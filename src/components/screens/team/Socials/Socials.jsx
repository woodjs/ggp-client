import { HStack, Icon, Link, useColorModeValue } from '@chakra-ui/react';
import { SiTelegram, SiFacebook, SiInstagram } from 'react-icons/si';
import { HiExternalLink } from 'react-icons/hi';
/**
 * @typedef {Object} Social
 * @property {String} icon
 * @property {String} link
 * @property {String} name
 * @typedef {Object} Props
 * @property {Social[]} socials
 *
 * @param {import("@chakra-ui/react").StackProps & Props} props
 */
function Socials({ socials, ...rest }) {
  const iconColor = useColorModeValue('darkLight', 'brandGray.200');
  return (
    <HStack spacing="20px" {...rest}>
      {socials.tg && (
        <Link href={socials.tg} target="_blank">
          <Icon color={iconColor} as={SiTelegram} boxSize="25px" />
        </Link>
      )}
      {socials.fb && (
        <Link href={socials.fb} target="_blank">
          <Icon color={iconColor} as={SiFacebook} boxSize="25px" />
        </Link>
      )}
      {socials.inst && (
        <Link href={socials.inst} target="_blank">
          <Icon color={iconColor} as={SiInstagram} boxSize="25px" />
        </Link>
      )}
      {socials.website && (
        <Link href={socials.website} target="_blank">
          <Icon color={iconColor} as={HiExternalLink} boxSize="25px" />
        </Link>
      )}
    </HStack>
  );
}

export default Socials;
