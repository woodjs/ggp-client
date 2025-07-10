import { useColorMode } from '@chakra-ui/react';

export default function Marketing() {
  const { colorMode } = useColorMode();
  const fill = colorMode === 'light' ? '#017101' : '#171923';
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      stroke={fill}
      fill="transparent"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10 10V2.5"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16.4922 6.25L3.50781 13.75"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M2.62508 11.375C2.53981 10.9217 2.49795 10.4613 2.50008 10C2.49909 8.4489 2.97954 6.93573 3.87514 5.6693C4.77073 4.40288 6.0373 3.44564 7.50008 2.92969V8.55469L2.62508 11.375Z"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10 2.5C11.3142 2.50015 12.6053 2.84561 13.7439 3.50179C14.8826 4.15797 15.8288 5.10183 16.4879 6.23881C17.1469 7.3758 17.4957 8.66601 17.4991 9.98019C17.5026 11.2944 17.1607 12.5864 16.5076 13.7269C15.8546 14.8673 14.9134 15.8162 13.7782 16.4783C12.643 17.1405 11.3538 17.4928 10.0396 17.4999C8.72545 17.507 7.43248 17.1686 6.29023 16.5187C5.14799 15.8688 4.19656 14.9302 3.53125 13.7969"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
