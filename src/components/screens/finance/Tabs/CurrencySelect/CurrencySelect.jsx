import {
  chakra,
  HStack,
  Image,
  Stack,
  Text,
  useColorModeValue,
  useRadio,
  useRadioGroup,
} from '@chakra-ui/react';

function CustomRadio(props) {
  const { image, label, ...radioProps } = props;
  const { state, getInputProps, getCheckboxProps, htmlProps, getLabelProps } =
    useRadio(radioProps);
  const borderColor = useColorModeValue('brandGreen.300', 'brandYellow');
  return (
    <chakra.label w="full" {...htmlProps} cursor="pointer">
      <input {...getInputProps({})} hidden />
      <HStack
        _hover={{
          opacity: 0.7,
        }}
        transitionDuration="0.2s"
        w="full"
        justify="center"
        {...getCheckboxProps()}
        borderColor={state.isChecked ? borderColor : 'brandGray.200'}
        borderWidth="1px"
        p="15px"
        py="2px"
        h="50px"
        rounded="md"
      >
        <Image w="25px" src={image} {...getLabelProps()} />
        <Text>{label}</Text>
      </HStack>
    </chakra.label>
  );
}

export default function CurrenySelect({ setCurrency, currency }) {
  const currencies = [
    {
      name: 'usdt',
      label: 'USDT',
      image: '/images/finance/tether.svg',
    },
    // {
    //   name: 'ggt',
    //   label: 'GGT',
    //   image: '/images/finance/ggt.svg',
    // },
  ];
  const getItem = (name) => currencies.find((item) => item.name === name);
  const handleChange = (value) => {
    if (setCurrency) setCurrency(getItem(value)?.label || value);
  };
  const { getRadioProps } = useRadioGroup({
    defaultValue: currency?.toLowerCase() || 'usdt',
    onChange: handleChange,
  });

  return (
    <Stack>
      <HStack>
        {currencies.map((avatar) => (
          <CustomRadio
            key={avatar.name}
            image={avatar.image}
            label={avatar.label}
            {...getRadioProps({ value: avatar.name })}
          />
        ))}
      </HStack>
    </Stack>
  );
}
