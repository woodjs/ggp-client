import { request } from 'commons/api/111';
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Grid,
  Text,
} from '@chakra-ui/react';
import { memo } from 'react';
import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { useInfiniteQuery } from 'react-query';

function Row({ id, countTeamFirstLine }) {
  const [isClicked, setIsClicked] = useState(false);
  const { data, isLoading, isError, hasNextPage, fetchNextPage, refetch } =
    useInfiniteQuery(
      `team-${id}`,
      ({ pageParam = 1 }) =>
        request.get(`/users/structure?page=${pageParam}&partnerId=${id}`),
      {
        getNextPageParam: (lastPage, allPages) => {
          const maxPages = Math.ceil(lastPage.count / 10);
          const nextPage = allPages.length + 1;
          const isValid = lastPage.data;

          if (!countTeamFirstLine) return undefined;
          if (!isValid.length) return undefined;

          return nextPage <= maxPages ? nextPage : undefined;
        },
        // enabled: false,
      }
    );

  const { ref, inView } = useInView({
    threshold: 0,
  });

  useEffect(() => {
    if (!inView) return;
    if (!hasNextPage) return;
    if (!countTeamFirstLine) return;

    fetchNextPage();
  }, [inView]);
  return (
    <Accordion allowMultiple>
      {data?.pages.length ? (
        data.pages
          .filter((page) => page.count)
          .map((item) =>
            item.data.map(
              ({
                id,
                avatar,
                login,
                rankName,
                investment,
                turnover,
                createdAt,
                countTeamFirstLine,
                totalActivePartners,
                teamCount,
                socials,
              }) => (
                <AccordionItem>
                  <Grid
                    templateColumns="100px auto auto auto auto auto auto auto"
                    // templateColumns="repeat(8, minmax(max-content, max-content))"
                    columnGap="20px"
                    py="12px"
                    px="24px"
                  >
                    {countTeamFirstLine ? (
                      <AccordionButton
                        onClick={() => {
                          if (!isClicked) {
                            refetch();
                            setIsClicked(true);
                          }
                        }}
                      >
                        <AccordionIcon />
                      </AccordionButton>
                    ) : (
                      1
                    )}

                    <Text>{id}</Text>
                    <Text>3</Text>
                    <Text>4</Text>
                    <Text>5</Text>
                    <Text>6</Text>
                    <Text>7</Text>
                    <Text textAlign="center">2022-01-09 15:04:00</Text>
                  </Grid>
                  <AccordionPanel pb={4} pl={0} pr={0}>
                    {countTeamFirstLine && isClicked && <Row id={id} />}
                  </AccordionPanel>
                </AccordionItem>
              )
            )
          )
      ) : (
        <Box colSpan="9" textAlign="center">
          Нет данных
        </Box>
      )}
      <Box ref={ref} />
    </Accordion>
  );
}

export default memo(Row);
