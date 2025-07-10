import { useColorModeValue } from '@chakra-ui/react';

export default function CustomizedDot(props) {
  const { cx, cy, payload } = props;

  if (payload.type === 'plant' || payload.type === 'harvest') {
    return (
      <svg
        x={cx - 10}
        y={cy - 8}
        width={20}
        height={20}
        viewBox="0 0 19 23"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g filter="url(#filter0_f_1_2)">
          <circle cx="9.5" cy="9.5" r="8.5" fill="#35CB33" />
        </g>
        <circle
          cx="9.5"
          cy="9.5"
          r="8.5"
          fill={useColorModeValue('#017101', '#FFDC3F')}
        />
        <g filter="url(#filter1_dd_1_2)">
          <circle cx="9.49991" cy="9.49991" r="5.40909" fill="white" />
        </g>
        <defs>
          <filter
            id="filter0_f_1_2"
            x="0"
            y="0"
            width="19"
            height="19"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feGaussianBlur
              stdDeviation="0.5"
              result="effect1_foregroundBlur_1_2"
            />
          </filter>
          <filter
            id="filter1_dd_1_2"
            x="0.0908203"
            y="4.09082"
            width="18.8182"
            height="18.8182"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dy="4" />
            <feGaussianBlur stdDeviation="2" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow_1_2"
            />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dy="4" />
            <feGaussianBlur stdDeviation="2" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
            />
            <feBlend
              mode="normal"
              in2="effect1_dropShadow_1_2"
              result="effect2_dropShadow_1_2"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect2_dropShadow_1_2"
              result="shape"
            />
          </filter>
        </defs>
      </svg>
    );
  }
  return null;
}
