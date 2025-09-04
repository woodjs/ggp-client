import {
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  HStack,
  Input,
  Stack,
  Text,
  VStack,
} from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';

import ContentForm from '../Payment/Content/Content';

export default function PaymentSolana() {
  const { t } = useTranslation('finance');
  return (
    <ContentForm title="Solana Payment">
      <HStack>
        <svg
          width="30"
          height="30"
          viewBox="0 0 30 30"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="15" cy="15" r="15" fill="black" />
          <g clip-path="url(#clip0_2328_1950)">
            <path
              d="M23.4099 18.8264L20.521 21.7957C20.4582 21.8602 20.3822 21.9116 20.2978 21.9468C20.2133 21.9819 20.1222 22.0001 20.0302 22H6.33538C6.27004 22 6.20611 21.9817 6.15147 21.9474C6.09683 21.913 6.05384 21.8641 6.02779 21.8067C6.00175 21.7493 5.99378 21.6858 6.00486 21.6241C6.01594 21.5623 6.04559 21.5051 6.09017 21.4593L8.98126 18.49C9.04389 18.4257 9.11963 18.3743 9.20378 18.3392C9.28796 18.3041 9.37875 18.2859 9.47056 18.2857H23.1646C23.23 18.2857 23.2939 18.304 23.3486 18.3383C23.4031 18.3727 23.4461 18.4216 23.4723 18.479C23.4983 18.5365 23.5062 18.5999 23.4951 18.6616C23.4841 18.7234 23.4544 18.7806 23.4099 18.8264ZM20.521 12.8471C20.4582 12.7826 20.3822 12.7312 20.2978 12.6961C20.2133 12.6609 20.1222 12.6428 20.0302 12.6429H6.33538C6.27004 12.6429 6.20611 12.6612 6.15147 12.6955C6.09683 12.7298 6.05384 12.7787 6.02779 12.8362C6.00175 12.8936 5.99378 12.9571 6.00486 13.0188C6.01594 13.0805 6.04559 13.1378 6.09017 13.1836L8.98126 16.1529C9.04389 16.2172 9.11963 16.2685 9.20378 16.3036C9.28796 16.3388 9.37875 16.357 9.47056 16.3571H23.1646C23.23 16.3571 23.2939 16.3388 23.3486 16.3045C23.4031 16.2702 23.4461 16.2213 23.4723 16.1638C23.4983 16.1064 23.5062 16.0429 23.4951 15.9812C23.4841 15.9195 23.4544 15.8622 23.4099 15.8164L20.521 12.8471ZM6.33538 10.7143H20.0302C20.1222 10.7143 20.2133 10.6962 20.2978 10.6611C20.3822 10.6259 20.4582 10.5745 20.521 10.51L23.4099 7.54071C23.4544 7.49493 23.4841 7.43766 23.4951 7.37594C23.5062 7.31422 23.4983 7.25074 23.4723 7.19331C23.4461 7.13587 23.4031 7.08698 23.3486 7.05264C23.2939 7.0183 23.23 7 23.1646 7H9.47056C9.37875 7.00015 9.28796 7.01836 9.20378 7.0535C9.11963 7.08864 9.04389 7.13996 8.98126 7.20429L6.09092 10.1736C6.04638 10.2193 6.01674 10.2765 6.00563 10.3382C5.99453 10.3998 6.00244 10.4632 6.02839 10.5207C6.05435 10.5781 6.09722 10.6269 6.15175 10.6613C6.20628 10.6957 6.2701 10.7141 6.33538 10.7143Z"
              fill="url(#paint0_linear_2328_1950)"
            />
          </g>
          <defs>
            <linearGradient
              id="paint0_linear_2328_1950"
              x1="7.4772"
              y1="22.3575"
              x2="21.159"
              y2="6.2643"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0.08" stop-color="#9945FF" />
              <stop offset="0.3" stop-color="#8752F3" />
              <stop offset="0.5" stop-color="#5497D5" />
              <stop offset="0.6" stop-color="#43B4CA" />
              <stop offset="0.72" stop-color="#28E0B9" />
              <stop offset="0.97" stop-color="#19FB9B" />
            </linearGradient>
            <clipPath id="clip0_2328_1950">
              <rect
                width="17.5"
                height="15"
                fill="white"
                transform="translate(6.25 7.5)"
              />
            </clipPath>
          </defs>
        </svg>
        <Text as="span">SOL</Text>
      </HStack>

      <Stack
      // direction={{ base: 'column', md: 'row' }}
      // alignItems={{ base: 'start', md: 'center' }}
      // spacing={0}
      >
        <FormControl
          w="full"
          //  isInvalid={!!formik.errors.password}
        >
          <FormLabel
            w={['100%', null, '25%']}
            flex="0 0 auto"
            fontSize="14px"
            fontWeight="bold"
          >
            {t('payment-input-amount', {
              amount: '0.01',
              currency: 'SOL',
            })}
          </FormLabel>

          <VStack w="full" alignItems="start">
            <Input
              name="amount"
              // type="password"
              // onChange={formik.handleChange}
              // value={formik.values.password}
              // focusBorderColor={accentColor400}
            />
            <FormErrorMessage>{null}</FormErrorMessage>
          </VStack>
        </FormControl>
        <Button isDisabled>{t('withdrawal-total')}</Button>
      </Stack>
    </ContentForm>
  );
}
