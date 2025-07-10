import { Card } from '@/components/Card';
import { AspectRatio, Button, HStack, Text, VStack } from '@chakra-ui/react';
import { useTranslation } from 'next-i18next';
import { useState } from 'react';

/**
 * @typedef {Object} MediaProps
 * @property {React.ReactNode} props.children
 * @property {string} props.name
 * @property {string} props.description
 * @property {string} props.link
 *
 * @param {MediaProps & React.ComponentProps<typeof Card>} props
 * @returns {JSX.Element}
 */
function MediaStreamCard({
  children,
  name,
  description,
  link,
  handleOpen,
  ...props
}) {
  const { t } = useTranslation('media');
  const [isHovered, setIsHovered] = useState(false);
  return (
    <Card
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      position="relative"
      display="flex"
      flexDirection="column"
      cursor="pointer"
      {...props}
      onClick={handleOpen}
    >
      <AspectRatio overflow="hidden" borderRadius="16px" ratio={1 / 1}>
        {children}
      </AspectRatio>
      <VStack
        opacity={isHovered ? 1 : 0}
        transition="opacity 0.2s"
        bottom={0}
        borderBottomRadius="16px"
        position="absolute"
        bg="linear-gradient(0deg, rgba(23,25,35,0.8) 0%,rgba(23,25,35,0.5) 50%, rgba(23,25,35,0) 100%)"
        h="full"
        w="full"
        alignItems="start"
        justify="end"
        padding="20px"
      >
        <VStack alignItems="start">
          <Text color="white" fontSize="16px" fontWeight="bold">
            {name}
          </Text>
        </VStack>
        <HStack>
          {/* <Button onClick={onOpen} colorScheme="brand" variant="outline">
           
          </Button> */}
          {/* <Icon as={IoOpenOutline} /> */}
          <Button
            onClick={handleOpen}
            _hover={{
              backgroundColor: 'transparent',
            }}
            _active={{
              backgroundColor: 'transparent',
            }}
            borderColor="white"
            color="white"
            variant="outline"
          >
            {t('open')}
          </Button>
        </HStack>
      </VStack>
    </Card>
  );
}

export default MediaStreamCard;
