import { Card } from '@/components/Card';
import {
  AspectRatio,
  Button,
  HStack,
  IconButton,
  Image,
  Text,
  useMediaQuery,
  VStack,
} from '@chakra-ui/react';
import { useTranslation } from 'next-i18next';
import { useState } from 'react';
import { MdCheck, MdContentCopy } from 'react-icons/md';

/**
 * @typedef {Object} MediaProps
 * @property {React.ReactNode} props.children
 * @property {string} props.preview
 * @property {string} props.name
 * @property {string} props.description
 * @property {string} props.link
 * @property {boolean} props.isAlwaysShow
 *
 * @param {MediaProps & React.ComponentProps<typeof Card>} props
 * @returns {JSX.Element}
 */
function MediaCard({
  children,
  preview,
  isAlwaysShow,
  name,
  description,
  link,
  langauges,

  isLinkWithDomain,
  ...props
}) {
  const handleOpen = () => {
    window.open(link, '_blank');
  };

  const [isCopied, setIsCopied] = useState(false);
  const handleCopy = (e) => {
    e.stopPropagation();
    if (isCopied) return;
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
    const domain = window.location.origin;
    navigator.clipboard.writeText(isLinkWithDomain ? link : domain + link);
  };
  const { t, i18n } = useTranslation('media');
  const [isHovered, setIsHovered] = useState(false);
  const [isMobile] = useMediaQuery('(max-width: 468px)');
  const getOpacity = () => {
    if (isAlwaysShow) return 1;
    if (isHovered) return 1;
    if (isMobile) return 1;
    return 0;
  };
  // eslint-disable-next-line no-nested-ternary
  const opacity = getOpacity();
  if (langauges?.length > 0) {
    if (!langauges.includes(i18n.language)) {
      return null;
    }
  }
  return (
    <Card
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      position="relative"
      display="flex"
      flexDirection="column"
      cursor="pointer"
      onClick={handleOpen}
      {...props}
    >
      <AspectRatio overflow="hidden" borderRadius="16px" ratio={1 / 1}>
        {children || (
          <Image borderRadius="16px" src={preview} alt="Media preview" />
        )}
      </AspectRatio>
      <VStack
        opacity={opacity}
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
          {name && (
            <Text color="white" fontSize="14px" fontWeight="bold">
              {name}
            </Text>
          )}
        </VStack>
        <HStack w="full" justify="space-between">
          <Button
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
          <IconButton
            onClick={handleCopy}
            aria-label="Copy"
            variant="ghost"
            icon={isCopied ? <MdCheck /> : <MdContentCopy />}
          />
        </HStack>
      </VStack>
    </Card>
  );
}

export default MediaCard;
