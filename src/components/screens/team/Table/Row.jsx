import { memo, useState } from 'react';
import { ChevronDownIcon } from '@chakra-ui/icons';
import { Td, Tr, useColorModeValue } from '@chakra-ui/react';

import { useQuery } from 'react-query';

import { toDateNormalUtil } from '../../../../commons/utils/toDate';
import RowPopUp from './RowPopUp';
import { protectedAPI } from '@/shared/api';

function Row({
  id,
  index,
  avatar,
  login,
  rankName,
  investment,
  depth,
  turnover,
  createdAt,
  teamCount,
  email,
  socials,
  countTeamFirstLine,
  totalActivePartners,
  isLast = false,
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [childrens, setChildrens] = useState([]);

  const { refetch } = useQuery(
    `team-${id}`,
    () => protectedAPI.get(`/users/structure?partnerId=${id}`),
    {
      enabled: false,
      onSuccess: (res) => {
        setChildrens(res.data);
      },
    }
  );

  const toggleRow = () => {
    if (!isOpen && !childrens.length) {
      refetch();
    }

    setIsOpen((prev) => !prev);
  };

  return (
    <>
      <Tr
        boxShadow={`${isOpen ? '1px 10px 10px -8px rgba(0,0,0,0.75)' : ''}`}
        borderBottom={isLast === index ? '2px' : false}
        borderColor={useColorModeValue('brandGreen.400', 'brandYellow')}
      >
        {countTeamFirstLine ? (
          <Td onClick={toggleRow} textAlign="right" p={0}>
            <ChevronDownIcon
              transform={`rotate(${isOpen ? '180deg' : '0deg'})`}
              transition="0.3s"
            />
          </Td>
        ) : (
          <Td p={0} />
        )}
        <Td textAlign="center" cursor="pointer" pl={0}>
          {depth}
        </Td>
        <Td textAlign="center">
          <RowPopUp
            data={{
              login,
              avatar,
              rankName,
              totalAmount: investment,
              totalActivePartners,
              turnover,
              teamCount,
              createdAt,
              socials,
              email,
            }}
          />
        </Td>
        <Td textAlign="center">{rankName}</Td>
        <Td textAlign="center">{investment}</Td>
        <Td textAlign="center">{turnover}</Td>
        <Td textAlign="center">{teamCount}</Td>
        <Td textAlign="center">{totalActivePartners}</Td>
        <Td textAlign="center">{toDateNormalUtil(createdAt)}</Td>
      </Tr>
      {childrens.length && isOpen
        ? childrens.map((dataChildren, indexChild) => (
            <Row
              key={dataChildren.id}
              id={dataChildren.id}
              depth={depth + 1}
              login={dataChildren.login}
              rankName={dataChildren.rankName}
              investment={dataChildren.investment}
              turnover={dataChildren.turnover}
              teamCount={dataChildren.teamCount}
              createdAt={dataChildren.createdAt}
              countTeamFirstLine={dataChildren.countTeamFirstLine}
              totalActivePartners={dataChildren.totalActivePartners}
              isLast={childrens.length - 1}
              index={indexChild}
              socials={dataChildren.socials}
            />
          ))
        : null}
    </>
  );
}

export default memo(Row);
