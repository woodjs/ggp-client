import { useState } from 'react';
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  useColorModeValue,
  Checkbox,
} from '@chakra-ui/react';
import { useTranslation } from 'next-i18next';
import {
  useNotificationOption,
  useNotificationOptionUpdate,
} from '@/hooks/user/useNotificationOption';
import ProfileCard from '../Card/Card';
import ProfileCardBody from '../Card/CardBody/CardBody';
import NotificationOptionSkeleton from './NotificationTable.skeleton';
import ProfileForm from '../ProfileForm';

function NotificationTableContainer() {
  const { t } = useTranslation('profile');
  const { data, isLoading, isError } = useNotificationOption();
  const { mutate } = useNotificationOptionUpdate();
  const [options, setOptions] = useState([]);
  const handleClick = () =>
    options.length > 0 &&
    mutate({ options }, { onSuccess: () => setOptions([]) });

  if (isLoading) return <NotificationOptionSkeleton />;
  if (isError) return <NotificationOptionSkeleton />;
  return (
    <ProfileCard title={t('sidebar-notifications')}>
      <TableContainer>
        <Table variant="simple" w="full">
          <Thead>
            <Tr bg={useColorModeValue('brandGreen.100', 'brandYellow')}>
              <Th color={useColorModeValue('white', 'darkLight')}>
                {t('type')}
              </Th>
              <Th
                color={useColorModeValue('white', 'darkLight')}
                textAlign="center"
              >
                Email
              </Th>
              <Th
                color={useColorModeValue('white', 'darkLight')}
                textAlign="center"
              >
                {t('browser')}
              </Th>
            </Tr>
          </Thead>
          <Tbody>
            {data.map((notificationOption, index) => (
              <Tr key={`id-${index + 1}`}>
                <Td>{notificationOption.name}</Td>
                <Td textAlign="center">
                  <Checkbox
                    colorScheme={useColorModeValue('green', 'yellow')}
                    name={notificationOption.type}
                    defaultChecked={notificationOption.email}
                    onChange={(e) => {
                      // Проверить есть ли в массиве объект с таким же типом, если есть тогда заменить значение в ином случае добавить
                      const indexOption = options.findIndex(
                        (option) => option.type === notificationOption.type
                      );
                      if (indexOption !== -1) {
                        options[indexOption] = {
                          ...options[indexOption],
                          type: notificationOption.type,
                          email: e.target.checked,
                        };

                        return true;
                      }
                      setOptions([
                        ...options,
                        {
                          type: notificationOption.type,
                          email: e.target.checked,
                        },
                      ]);

                      return true;
                    }}
                  />
                </Td>
                <Td textAlign="center">
                  <Checkbox
                    colorScheme={useColorModeValue('green', 'yellow')}
                    defaultChecked={notificationOption.browser}
                    onChange={(e) => {
                      // Проверить есть ли в массиве объект с таким же типом, если есть тогда заменить значение в ином случае добавить
                      const indexOption = options.findIndex(
                        (option) => option.type === notificationOption.type
                      );
                      if (indexOption !== -1) {
                        options[indexOption] = {
                          ...options[indexOption],
                          type: notificationOption.type,
                          browser: e.target.checked,
                        };

                        return true;
                      }
                      setOptions([
                        ...options,
                        {
                          type: notificationOption.type,
                          browser: e.target.checked,
                        },
                      ]);

                      return true;
                    }}
                  />
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
      <ProfileCardBody>
        <ProfileForm isDisabled={!options.length} onSubmit={handleClick} />
      </ProfileCardBody>
    </ProfileCard>
  );
}

export default NotificationTableContainer;
