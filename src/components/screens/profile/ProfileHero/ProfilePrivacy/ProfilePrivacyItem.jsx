import {
  FormControl,
  FormLabel,
  Select,
  useColorModeValue,
} from '@chakra-ui/react';
import { useTranslation } from 'next-i18next';

export default function ProfilePrivacyItem({
  title,
  handleChange,
  value,
  name,
  options,
}) {
  const { t } = useTranslation('profile');
  return (
    <FormControl>
      <FormLabel>{t(title)}</FormLabel>
      <Select
        focusBorderColor={useColorModeValue('brandGreen.400', 'brandYellow')}
        borderColor="brandGray.200"
        variant="filled"
        h="40px"
        border="1px"
        onChange={handleChange}
        value={value}
        name={name}
      >
        {options.map((option) => (
          <option key={option.label} value={option.value}>
            {option.label}
          </option>
        ))}
      </Select>
    </FormControl>
  );
}
