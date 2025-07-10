import { useState } from 'react';
import { useTranslation } from 'next-i18next';
import {
  Box,
  Button,
  Center,
  Text,
  useDisclosure,
  VStack,
} from '@chakra-ui/react';
import { useRequisite } from '@/hooks/user/useRequisite';
import { Card } from '@/components/Card';

import RequisiteItem from './RequisiteItem/RequisiteItem';
import ModalCreate from './ModalCreate/ModalCreate';
import ModalUpdate from './ModalUpdate/ModalUpdate';
import ModalDelete from './ModalDelete/ModalDelete';
import RequisitesSkeleton from './Requisites.skeleton';

export default function Requisites() {
  const { t } = useTranslation('finance');
  const [selectedRequisite, setSelectedRequisite] = useState(null);

  const modalCreate = useDisclosure();
  const modalUpdate = useDisclosure();
  const modalDelete = useDisclosure();

  const { getAll } = useRequisite();
  const { data, isLoading, isError } = getAll();

  if (isLoading) return <RequisitesSkeleton />;
  if (isError) return <div>Error</div>;

  return (
    <>
      <Card w="full" py="26px">
        <Box pb="26px" px="23px">
          <Text
            color="brandGray.200"
            fontSize="2xl"
            fontWeight="bold"
            textAlign={['center', 'left']}
          >
            {t('requisite-title')}
          </Text>
        </Box>

        {data.length ? (
          <>
            {data.map((payload) => (
              <RequisiteItem
                key={payload.id}
                category={payload.category}
                name={payload.name}
                value={payload.value}
                handleUpdate={() => {
                  setSelectedRequisite(payload);
                  modalUpdate.onOpen();
                }}
                handleDelete={() => {
                  setSelectedRequisite(payload);
                  modalDelete.onOpen();
                }}
              />
            ))}
            {data.length < 5 && (
              <Center>
                <Button mt="26px" onClick={modalCreate.onOpen}>
                  {t('requisite-btn-add')}
                </Button>
              </Center>
            )}
          </>
        ) : (
          <VStack spacing="10px">
            <Text>{t('requisite-not-found')}</Text>
            <Button onClick={modalCreate.onOpen}>
              {t('requisite-btn-add')}
            </Button>
          </VStack>
        )}
      </Card>
      <ModalCreate isOpen={modalCreate.isOpen} onClose={modalCreate.onClose} />
      <ModalUpdate
        isOpen={modalUpdate.isOpen}
        onClose={modalUpdate.onClose}
        selectedRequisite={selectedRequisite}
      />
      <ModalDelete
        isOpen={modalDelete.isOpen}
        onClose={modalDelete.onClose}
        selectedRequisite={selectedRequisite}
      />
    </>
  );
}
