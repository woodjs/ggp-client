import { useColorMode } from '@chakra-ui/react';

export default function MoreIcon() {
  const { colorMode } = useColorMode();
  const fill = colorMode === 'light' ? '#017101' : '#171923';
  return (
    <svg
      width="18"
      height="4"
      viewBox="0 0 18 4"
      fill={fill}
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="2" cy="2" r="2" />
      <circle cx="9" cy="2" r="2" />
      <circle cx="16" cy="2" r="2" />
    </svg>
  );
}
