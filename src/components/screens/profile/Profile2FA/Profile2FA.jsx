import { useTranslation } from 'next-i18next';
import { Button, Grid, Stack, Text, VStack } from '@chakra-ui/react';
// import { useProtections } from '@/hooks/user/useTwoFactor';
import { useProtectionMethods } from '@/entities/security/protection';
import { useProfile } from '@/entities/profile';
import ProfileCard from '../Card/Card';
import ProfileCardBody from '../Card/CardBody/CardBody';

function Profile2FA({
  handleGAEnable,
  handleEmailEnable,
  onOpenDisable2FA,
  onOpenTelegram,
  setSelected,
}) {
  const { t } = useTranslation('profile');
  const { data: profile } = useProfile();
  const { data, isLoading, isError } = useProtectionMethods();

  if (isLoading) return 'Loading';
  if (isError) return 'Error';
  return (
    <ProfileCard title="2FA" borderTitle>
      <ProfileCardBody>
        <VStack alignItems="start" spacing="30px">
          <Grid
            w="full"
            columnGap="60px"
            rowGap={{ base: '20px', md: '0px' }}
            templateColumns={{ base: '1fr', md: '1fr .7fr' }}
            alignItems="center"
          >
            <Stack spacing="5px">
              <Text fontWeight={700}>{t('2fa-email')}</Text>
              <Text fontSize="12px">{t('2fa-desc')}</Text>
            </Stack>

            <Grid
              templateColumns={['1fr', '1fr 120px']}
              gap="10px"
              alignItems="center"
            >
              {!data.email ? (
                <>
                  <Text>{t('text-turn-off')}</Text>
                  <Button onClick={handleEmailEnable}>
                    {t('btn-turn-on')}
                  </Button>
                </>
              ) : (
                <>
                  <Text>
                    {profile &&
                      `${profile.email
                        .split('@')[0]
                        .slice(0, 3)}...@${profile.email.split('@').pop()}`}
                  </Text>
                  <Button
                    onClick={() => {
                      onOpenDisable2FA();
                      setSelected({
                        name: 'Email',
                        type: 'email',
                      });
                    }}
                    variant="border"
                  >
                    {t('btn-turn-off')}
                  </Button>
                </>
              )}
            </Grid>
          </Grid>

          <Grid
            w="full"
            columnGap="60px"
            rowGap={{ base: '20px', md: '0px' }}
            templateColumns={{ base: '1fr', md: '1fr .7fr' }}
            alignItems="center"
          >
            <Stack spacing="5px">
              <Text fontWeight={700}>{t('2fa-google')}</Text>
              <Text fontSize="12px">{t('2fa-desc')}</Text>
            </Stack>

            <Grid
              templateColumns={['1fr', '1fr 120px']}
              gap="10px"
              alignItems="center"
            >
              {data.ga ? (
                <>
                  <Text>{t('text-turn-on')}</Text>
                  <Button
                    variant="border"
                    onClick={() => {
                      onOpenDisable2FA();
                      setSelected({
                        name: 'Google Authenticator',
                        type: 'ga',
                      });
                    }}
                  >
                    {t('btn-turn-off')}
                  </Button>
                </>
              ) : (
                <>
                  <Text>{t('text-turn-off')}</Text>
                  <Button onClick={handleGAEnable}>{t('btn-turn-on')}</Button>
                </>
              )}
            </Grid>
          </Grid>

          <Grid
            w="full"
            columnGap="60px"
            rowGap={{ base: '20px', md: '0px' }}
            templateColumns={{ base: '1fr', md: '1fr .7fr' }}
            alignItems="center"
          >
            <Stack spacing="5px">
              <Text fontWeight={700}>Telegram Bot</Text>
              <Text fontSize="12px">{t('2fa-email-desc')}</Text>
            </Stack>

            <Grid
              templateColumns={['1fr', '1fr 120px']}
              gap="10px"
              alignItems="center"
            >
              {!data.tg ? (
                <>
                  <Text>{t('text-turn-off')}</Text>
                  <Button onClick={onOpenTelegram}>{t('btn-turn-on')}</Button>
                </>
              ) : (
                'Включено'
              )}
            </Grid>
          </Grid>
        </VStack>
      </ProfileCardBody>
    </ProfileCard>
  );
}

export default Profile2FA;
