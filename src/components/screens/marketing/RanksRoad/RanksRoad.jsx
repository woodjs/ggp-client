import { Box, Stack } from '@chakra-ui/react';

import RanksCardList from '../RanksCardList/RanksCardList';
import RankCurrent from '../RankCurrent/RankCurrent';

function RanksRoad() {
  // const ranks = Object.keys(data);
  //   const nextRank = userData?.rank + 1;
  // const cardRef = useRef(null);
  // const [isLoadedPage, setIsLoadedPage] = useState(false);
  // const [selectedRank, setSelectedRank] = useState(nextRank);

  // useEffect(() => {
  //   setTimeout(() => {
  //     if (cardRef.current) {
  //       const currentRank = document.getElementById(userData.rank);
  //       if (currentRank) {
  //         const currentRankPosition =
  //           currentRank.offsetTop - cardRef.current.offsetTop;
  //         cardRef.current.scrollTo(0, currentRankPosition);
  //       }
  //       setIsLoadedPage(true);
  //     }
  //   }, 0);
  // }, [userData?.rank, cardRef, isLoading]);

  return (
    <Box h="full" w="full">
      <Stack>
        <RankCurrent />
        <RanksCardList />
        {/* <Accordion
          // onChange={(index) => {
          //   setSelectedRank(index);
          // }}
          defaultIndex={data.rank}
        >
          {ranksData.map((rank) => (
            <div key={rank.id} id={rank.id}>
              <RanksRoadItem
                isSelectedRank={data.rank === rank.id}
                rank={rank}
                userData={data}
                isCurrentRank={rank.id === data.rank}
                isNextRank={rank.id === data.rank + 1}
                isRecieved={rank.id <= data.rank}
                directPartners={rank.directPartners}
                branches={rank.branches}
                personalInvestment={rank.personalInvestment}
                teamTurnover={rank.teamTurnover}
                maxBranchTurnover={rank.maxBranchTurnover}
                additionalBonus={rank.additionalBonus}
                statusBonus={rank.statusBonus}
                lines={rank.lines}
              />
            </div>
          ))}
          </Accordion> */}
      </Stack>
    </Box>
  );
}

export default RanksRoad;
