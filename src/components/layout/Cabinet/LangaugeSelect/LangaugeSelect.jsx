import Cookies from 'js-cookie';
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';
import { BsGlobe } from 'react-icons/bs';
import {
  Box,
  Button,
  IconButton,
  Image,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverContent,
  PopoverTrigger,
  useDisclosure,
  VStack,
} from '@chakra-ui/react';

function LangaugeSelect() {
  const router = useRouter();
  const { i18n } = useTranslation();
  const { isOpen, onClose, onOpen } = useDisclosure();
  const onLanguageChange = (lang) => {
    // НЕ ТРОГАТЬ
    const { pathname, query } = router;
    if (JSON.stringify(query) === '{}') {
      router.push(pathname, pathname, { locale: lang });
    } else {
      const queryKeys = Object.keys(query);
      let newPath = pathname;
      queryKeys.forEach((key) => {
        newPath = newPath.replace(`[${key}]`, query[key]);
      });
      router.push(newPath, newPath, { locale: lang });
    }

    i18n.changeLanguage(lang);
    Cookies.set('NEXT_LOCALE', lang);
    onClose();
  };
  const currentLanguage = i18n.language;

  return (
    <Box pos="relative">
      <Popover
        display={{ base: 'none', md: 'block' }}
        isOpen={isOpen}
        onOpen={onOpen}
        onClose={onClose}
        placement="bottom-start"
      >
        <PopoverTrigger>
          <IconButton
            size="lg"
            variant="ghost"
            aria-label="open menu"
            icon={<BsGlobe />}
          />
        </PopoverTrigger>
        <PopoverContent w="fit-content">
          <PopoverArrow />
          <PopoverBody w="48px" p="6px">
            <VStack>
              <Button
                p="6px"
                w="fit-content"
                h="fit-content"
                rounded="sm"
                variant={currentLanguage === 'en' ? 'solid' : 'ghost'}
                onClick={() => onLanguageChange('en')}
              >
                <Image rounded="sm" maxW="25px" src="/images/landing/gb.svg" />
              </Button>
              <Button
                variant={currentLanguage === 'ru' ? 'solid' : 'ghost'}
                p="6px"
                w="fit-content"
                h="fit-content"
                rounded="sm"
                onClick={() => onLanguageChange('ru')}
              >
                <Image rounded="sm" maxW="25px" src="/images/landing/ru.svg" />
              </Button>
              <Button
                variant={currentLanguage === 'es' ? 'solid' : 'ghost'}
                p="6px"
                w="fit-content"
                h="fit-content"
                rounded="sm"
                onClick={() => onLanguageChange('es')}
              >
                <Image rounded="sm" maxW="25px" src="/images/landing/es.svg" />
              </Button>
            </VStack>
          </PopoverBody>
        </PopoverContent>
      </Popover>
    </Box>
  );
}

export default LangaugeSelect;
