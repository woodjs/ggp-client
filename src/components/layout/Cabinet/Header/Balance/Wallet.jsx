import { useColorMode } from '@chakra-ui/react';

export default function Wallet() {
  const { colorMode } = useColorMode();
  const fill = colorMode === 'light' ? '#000000' : '#ffffff';
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 684 518"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M658.667 159H408.667C353.437 159 308.667 203.77 308.667 259C308.667 314.23 353.437 359 408.667 359H658.667M408.667 259V259.333M95.7038 25.6666H588.297C627.16 25.6666 658.667 60.489 658.667 103.444V414.557C658.667 457.51 627.16 492.333 588.297 492.333H95.7038C56.8395 492.333 25.3335 457.51 25.3335 414.557V103.444C25.3335 60.489 56.8395 25.6666 95.7038 25.6666Z"
        stroke={fill}
        strokeWidth="50"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
