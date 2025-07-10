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
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { useInfiniteQuery } from 'react-query';
import Row from './Row';

export default function TableTeam() {
  const { data, isLoading, isError, hasNextPage, fetchNextPage } =
    useInfiniteQuery(
      'team',
      ({ pageParam = 1 }) => request.get(`/users/structure?page=${pageParam}`),
      {
        getNextPageParam: (lastPage, allPages) => {
          const maxPages = Math.ceil(lastPage.count / 10);
          const nextPage = allPages.length + 1;

          const isValid = lastPage.data;

          if (!isValid.length) return undefined;

          return nextPage <= maxPages ? nextPage : undefined;
        },
      }
    );

  const { ref, inView } = useInView({
    threshold: 0,
  });

  useEffect(() => {
    if (!inView) return;
    if (!hasNextPage) return;

    fetchNextPage();
  }, [inView]);
  console.log(data);
  if (isLoading) return 'loading';

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
                // <Row
                //   key={id}
                //   id={id}
                //   depth={1}
                //   avatar={avatar}
                //   login={login}
                //   rankName={rankName}
                //   investment={investment}
                //   turnover={turnover}
                //   createdAt={createdAt}
                //   countTeamFirstLine={countTeamFirstLine}
                //   totalActivePartners={totalActivePartners}
                //   teamCount={teamCount}
                //   socials={socials}
                //   isView
                // />
                <AccordionItem>
                  <Grid
                    templateColumns="100px auto auto auto auto auto auto auto"
                    // templateColumns="repeat(8, minmax(max-content, max-content))"
                    columnGap="20px"
                    py="12px"
                    px="24px"
                  >
                    <AccordionButton
                    // onClick={() => {
                    //   setIsClicked(true);
                    //   handleRequest();
                    // }}
                    >
                      <AccordionIcon />
                    </AccordionButton>

                    <Text>2</Text>
                    <Text>3</Text>
                    <Text>4</Text>
                    <Text>5</Text>
                    <Text>6</Text>
                    <Text>7</Text>
                    <Text textAlign="center">2022-01-09 15:04:00</Text>
                  </Grid>
                  <AccordionPanel pb={4} pl={0} pr={0}>
                    <Row id={id} countTeamFirstLine={countTeamFirstLine} />
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
