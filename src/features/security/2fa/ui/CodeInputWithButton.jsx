import { useRequestCode } from '@/entities/security/2fa';
import { Tooltip } from '@/shared/ui';
import { InfoOutlineIcon } from '@chakra-ui/icons';
import {
  Button,
  FormControl,
  FormHelperText,
  FormLabel,
  HStack,
  Input,
  InputGroup,
  InputRightElement,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

function CodeInputWithButton({ label, helpText, method, action, onChange }) {
  const { t } = useTranslation('two-factor');

  const STORAGE_NAME = `${method}-expired-at`;
  const expiredTime = localStorage.getItem(STORAGE_NAME) || 0;
  const isExpired = Date.now() > expiredTime;
  const [isSending, setIsSending] = useState(!isExpired);
  const [seconds, setSeconds] = useState(
    isExpired ? 0 : Math.floor((expiredTime - Date.now()) / 1000)
  );

  useEffect(() => {
    let intervalId = null;
    if (isSending) {
      intervalId = setInterval(() => {
        setSeconds((prev) => {
          if (prev <= 0) {
            clearInterval(intervalId);
            localStorage.removeItem(STORAGE_NAME);
            setIsSending(false);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => clearInterval(intervalId);
  }, [isSending, seconds]);

  const { mutate, isLoading } = useRequestCode();
  const textColor = useColorModeValue('brandGreen.400', 'brandYellow');
  const handleClick = () => {
    mutate({ method, action }, { onSuccess: () => setIsSending(true) });
    localStorage.setItem(STORAGE_NAME, Date.now() + 60000);
    setSeconds(60);
  };

  return (
    <FormControl>
      <FormLabel>{label}</FormLabel>
      <InputGroup>
        <Input type="number" name={method} onChange={onChange} />
        <InputRightElement w="fit-content">
          {isSending ? (
            <HStack mr="10px" color="green.400">
              <Text>{t('success-code')}</Text>
              <Tooltip
                hasArrow
                label={t('notify-code', {
                  seconds,
                })}
                Icon={InfoOutlineIcon}
              >
                <Text color={textColor} fontSize="14px" ml="auto" mr="10px">
                  {t('success-code')}
                </Text>
              </Tooltip>
            </HStack>
          ) : (
            <Button
              onClick={handleClick}
              ml="auto"
              mr="4px"
              rounded="4px"
              size="sm"
              fontSize="12px"
              isLoading={isLoading}
            >
              {t('btn-get-code')}
            </Button>
          )}
        </InputRightElement>
      </InputGroup>
      <FormHelperText>{helpText}</FormHelperText>
    </FormControl>
  );
}

export default CodeInputWithButton;
