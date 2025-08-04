import { Card } from '@/components/Card';
import {
  Avatar,
  HStack,
  Icon,
  Link,
  Stack,
  Text,
  useColorModeValue,
  VStack,
} from '@chakra-ui/react';
import { useTranslation } from 'next-i18next';
import { SiTelegram, SiVk, SiFacebook, SiInstagram } from 'react-icons/si';
import { HiExternalLink } from 'react-icons/hi';
import { useSponsor } from '@/hooks/user/useTeam';
import ProfileCardSkeleton from '@/components/screens/team/TeamDashboard/ProfileCard/ProfileCard.skeleton';

/**
 * @typedef {Object} Social
 * @property {String} icon
 * @property {String} link
 * @property {String} name
 * @typedef {Object} Props
 * @property {String} avatar
 * @property {String} name
 * @property {String} subtitle
 * @property {String} chat
 * @property {Social[]} social
 *
 * @param {Props} props
 */

function ProfileCard() {
  const { data, isLoading, isError } = useSponsor();

  const linkColor = useColorModeValue('blue.600', 'blue.400');
  const { t } = useTranslation('team');

  if (isLoading) {
    return <ProfileCardSkeleton />;
  }

  if (isError) {
    return <ProfileCardSkeleton isLoaded />;
  }

  if (!data) {
    return (
      <Card minH="150px" h="full">
        <VStack h="full" justify="center">
          <Text textAlign="center">{t('team:no-sponsor')}</Text>
        </VStack>
      </Card>
    );
  }

  return (
    <Card h="full" p="20px" py="25px" w="full">
      <Text
        w="full"
        mb="20px"
        textAlign={{ base: 'center', xl: 'left' }}
        fontWeight="bold"
        fontSize="20px"
      >
        {t('team-profile-card-title')}
      </Text>
      <Stack
        direction={{ base: 'column', xl: 'row' }}
        alignItems="center"
        justify="space-around"
        spacing="20px"
      >
        <Avatar size="xl" src={data.avatar} />
        <VStack h="full" alignItems="center" spacing="20px">
          <VStack>
            <Text fontWeight="bold">{data.login}</Text>
            <Text textAlign="center" color="brandGray.200">
              {data.rankName}
            </Text>
            <HStack pt="10px" spacing="20px">
              {data?.socials?.website && (
                <Link
                  color="brandGray.400"
                  href={data.socials.website}
                  target="_blank"
                >
                  <Icon as={HiExternalLink} boxSize="25px" />
                </Link>
              )}
              {data?.socials?.fb && (
                <Link
                  color="brandGray.400"
                  href={data.socials.fb}
                  target="_blank"
                >
                  <Icon as={SiFacebook} boxSize="25px" />
                </Link>
              )}
              {data?.socials?.inst && (
                <Link
                  color="brandGray.400"
                  href={data.socials.inst}
                  target="_blank"
                >
                  <Icon as={SiInstagram} boxSize="25px" />
                </Link>
              )}
              {data?.socials?.tg && (
                <Link
                  color="brandGray.400"
                  href={data.socials.tg}
                  target="_blank"
                >
                  <Icon as={SiTelegram} boxSize="25px" />
                </Link>
              )}
            </HStack>
          </VStack>
          {/* {data?.socials?.chat && (
            <VStack spacing={0}>
              <Link target="_blank" href={data.socials.chat}>
                <Text
                  fontSize="sm"
                  color={linkColor}
                  // textDecoration="underline"
                  // fontWeight="bold"
                >
                  {t('team-char')}
                </Text>
              </Link>
            </VStack>
          )} */}
        </VStack>
      </Stack>
    </Card>
  );
}

export default ProfileCard;
