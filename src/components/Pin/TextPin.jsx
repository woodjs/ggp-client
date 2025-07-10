import { useState } from 'react';
import { Box, Tooltip } from '@chakra-ui/react';

export default function TextPin({ label, children, ...rest }) {
  const [isLabelOpen, setIsLabelOpen] = useState(false);

  return (
    <Tooltip {...rest} label={label} isOpen={isLabelOpen}>
      <Box
        onMouseEnter={() => setIsLabelOpen(true)}
        onMouseLeave={() => setIsLabelOpen(false)}
        onClick={() => setIsLabelOpen(true)}
      >
        {children}
      </Box>
    </Tooltip>
  );
}
