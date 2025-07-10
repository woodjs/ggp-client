import { QuestionOutlineIcon } from '@chakra-ui/icons';
import { Tooltip } from '@chakra-ui/react';
import { useState } from 'react';

export default function QuestionPin({ label, ...rest }) {
  const [isLabelOpen, setIsLabelOpen] = useState(false);

  return (
    <Tooltip {...rest} label={label} isOpen={isLabelOpen}>
      <QuestionOutlineIcon
        onMouseEnter={() => setIsLabelOpen(true)}
        onMouseLeave={() => setIsLabelOpen(false)}
        onClick={() => setIsLabelOpen(true)}
      />
    </Tooltip>
  );
}
