import { useState } from 'react';
import { useTranslation } from 'next-i18next';
import { useDisclosure } from '@chakra-ui/react';

import { ModalTelegramBotIntegration } from '@/widgets/2fa/telegram/TelegramBotIntegration';
import { ModalConfirm2FA } from '@/widgets/security/ModalConfirm2FA';
import { useUpdateProtectionMethods } from '@/entities/security/protection';
import ModalGA from './ModalGA/ModalGA';
import Profile2FA from './Profile2FA';

function Profile2FAContainer() {
  const { t } = useTranslation('two-factor');
  const [selected, setSelected] = useState(null);

  const { isOpen, onOpen, onClose } = useDisclosure();
  const {
    isOpen: isOpenDisable2FA,
    onOpen: onOpenDisable2FA,
    onClose: onCloseDisable2FA,
  } = useDisclosure();
  const {
    isOpen: isOpenTelegramEnable,
    onOpen: onOpenTelegramEnable,
    onClose: onCloseTelegramEnable,
  } = useDisclosure();

  const { mutate } = useUpdateProtectionMethods();

  const handleGAEnable = (codes, cb) => {
    mutate(
      { codes, method: 'ga' },
      {
        onSuccess: () => {
          if (cb) cb();
          onClose();
        },
      }
    );
  };
  const handleEmailEnable = () => {
    mutate({ method: 'email' });
  };

  const handleGADisable = (codes, cb) => {
    mutate(
      { codes, method: 'ga', type: 'disable' },
      {
        onSuccess: () => {
          if (cb) cb();
          onCloseDisable2FA();
        },
      }
    );
  };

  return (
    <>
      <Profile2FA
        handleGAEnable={() => onOpen()}
        handleEmailEnable={handleEmailEnable}
        onOpenDisable2FA={onOpenDisable2FA}
        onOpenTelegram={onOpenTelegramEnable}
        setSelected={setSelected}
      />
      <ModalGA
        t={t}
        isOpen={isOpen}
        onClose={onClose}
        handleConfirm={handleGAEnable}
      />
      {isOpenTelegramEnable && (
        <ModalTelegramBotIntegration
          isOpen={isOpenTelegramEnable}
          onClose={onCloseTelegramEnable}
        />
      )}

      <ModalConfirm2FA
        action="disable-2fa"
        title={t(`turn-off-title`, {
          method: selected?.name,
        })}
        isOpen={isOpenDisable2FA}
        onClose={onCloseDisable2FA}
        onConfirm={(codes) => {
          mutate(
            {
              codes,
              type: 'disable',
              method: selected.type,
            },
            {
              onSuccess: () => onCloseDisable2FA(),
            }
          );
        }}
      />
    </>
  );
}

export default Profile2FAContainer;
