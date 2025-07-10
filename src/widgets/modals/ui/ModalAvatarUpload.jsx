import {
  ALLOWED_EXTENSIONS,
  useAvatar,
  validateUploadFile,
} from '@/features/profile/avatar';
import {
  Alert,
  AlertIcon,
  Avatar,
  Button,
  Center,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Stack,
} from '@chakra-ui/react';
import { useRef, useState } from 'react';

export function ModalAvatarUpload({ isOpen, onClose }) {
  const fileInputRef = useRef(null);
  const [file, setFile] = useState(null);
  const { mutate } = useAvatar();
  const [isLoading, setIsloading] = useState(false);

  const handleUpload = () => {
    if (validateUploadFile(file)) {
      mutate(file, {
        onSuccess: () => {
          fileInputRef.current.value = null;
          onClose();
        },
      });
    }
  };

  return (
    <Modal
      isCentered
      onClose={onClose}
      isOpen={isOpen}
      motionPreset="slideInBottom"
    >
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Загрузка аватара</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Stack>
            <Center>
              <Avatar size="xl" src={file ? URL.createObjectURL(file) : null} />
            </Center>

            <Button
              isLoading={isLoading}
              onClick={() => {
                if (!file) return fileInputRef.current.click();
                setIsloading(true);
                return handleUpload();
              }}
            >
              {file ? 'Добавить' : 'Загрузить'}
              <Input
                type="file"
                ref={fileInputRef}
                display="none"
                onChange={(e) => setFile(e.target.files[0])}
              />
            </Button>
            <Button
              variant="border"
              isDisabled={!file}
              onClick={() => {
                setFile(null);
                fileInputRef.current.value = null;
              }}
            >
              Поменять
            </Button>
            <Alert status="info">
              <AlertIcon />
              Поддерживающий формат аватара: {ALLOWED_EXTENSIONS.join(', ')}
            </Alert>
          </Stack>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}
