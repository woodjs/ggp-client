import { Tooltip as ChakraTooltip } from '@chakra-ui/react';
import { Icon as ChakraIcon } from '@chakra-ui/icons';
import { useState } from 'react';

export function Tooltip({ label, Icon, ...rest }) {
  const [isLabelOpen, setIsLabelOpen] = useState(false);
  return (
    <ChakraTooltip {...rest} label={label} isOpen={isLabelOpen}>
      {Icon && (
        <ChakraIcon
          as={Icon}
          onMouseEnter={() => setIsLabelOpen(true)}
          onMouseLeave={() => setIsLabelOpen(false)}
          onClick={() => setIsLabelOpen(true)}
        />
      )}
    </ChakraTooltip>
  );
}
