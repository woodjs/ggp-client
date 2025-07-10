import { Switch, useColorModeValue } from '@chakra-ui/react';
import { useState } from 'react';
import { useNFTReinvest } from '../model';

export default function SwitchReinvest({ id, status }) {
  const [isReinvest, setIsReinvest] = useState(status);
  const { mutate, isLoading } = useNFTReinvest();

  const onChange = () => {
    setIsReinvest((prev) => !prev);
    mutate(
      { id, status: !isReinvest },
      {
        onError: () => setIsReinvest(status),
      }
    );
  };

  return (
    <Switch
      colorScheme={useColorModeValue('green', 'yellow')}
      onChange={onChange}
      isChecked={isReinvest}
      isDisabled={isLoading}
    />
  );
}
