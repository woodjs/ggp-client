import { Card } from '@/components/Card';
import { useProfitChart } from '@/hooks/user/useProfictChart';
import formatCurrency from '@/utils/formatCurrency';
import {
  Box,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
  useBreakpointValue,
  useColorMode,
} from '@chakra-ui/react';
import { useTranslation } from 'next-i18next';
import React, { useEffect, useState } from 'react';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';
import ChartFilters from './ChartFilters';

// const data = [
//   {
//     name: 'Page A',
//     date: '2021-01-01',
//     income: 0,
//     affiliate: 0,
//     users: 0,
//   },
//   {
//     name: 'Page B',
//     date: '2021-01-02',
//     income: 0,
//     affiliate: 0,
//     users: 0,
//   },
//   {
//     name: 'Page C',
//     date: '2021-01-03',
//     income: 0,
//     affiliate: 0,
//     users: 0,
//   },
//   {
//     name: 'Page D',
//     date: '2021-01-04',
//     income: 0,
//     affiliate: 0,
//     users: 0,
//   },
//   {
//     name: 'Page E',
//     date: '2021-01-05',
//     income: 0,
//     affiliate: 0,
//     users: 0,
//   },
//   {
//     name: 'Page F',
//     date: '2021-01-06',
//     income: 0,
//     affiliate: 0,
//     users: 0,
//   },
//   {
//     name: 'Page G',
//     date: '2021-01-07',
//     income: 0,
//     affiliate: 0,
//     users: 0,
//   },
//   {
//     name: 'Page H',
//     date: '2021-01-08',
//     income: 0,
//     affiliate: 0,
//     users: 0,
//   },
// ];

// import {
//   Chart as ChartJS,
//   CategoryScale,
//   LinearScale,
//   PointElement,
//   LineElement,
//   Title,
//   Tooltip,
//   Filler,
//   Legend,
// } from 'chart.js';
// import { Line } from 'react-chartjs-2';

// ChartJS.register(
//   CategoryScale,
//   LinearScale,
//   PointElement,
//   LineElement,
//   Title,
//   Tooltip,
//   Filler,
//   Legend
// );

function Chart() {
  const { t } = useTranslation('statistics');
  const { colorMode } = useColorMode();
  const chartHeight = useBreakpointValue({ base: 200, md: 350 });
  const generateDataForCurrentMonth = () => {
    const newData = [];
    const date = new Date();
    const year = date.getFullYear();
    const month = date.getMonth();
    // const daysInMonth = new Date(year, month + 1, 0).getDate();
    const currentDay = date.getDate();
    for (let i = 1; i <= currentDay; i += 1) {
      newData.push({
        date: `${year}-${month + 1}-${i}`,
        income: 0,
        affiliate: 0,
        users: 0,
      });
    }
    return newData;
  };
  const tickFormatter = (value) => {
    if (value > 1000000) {
      const newValue = value / 1000000;
      return `${Math.floor(newValue)}M`;
    }
    if (value > 1000) {
      const newValue = value / 1000;
      return `${Math.floor(newValue)}k`;
    }
    return value;
  };

  const [filters, setFilters] = useState({
    type: 'day',
    from: null,
    to: null,
  });
  const chartData = useProfitChart(filters);

  const handleSubmitFilters = (values) => {
    setFilters(values);
    // eslint-disable-next-line no-console
    console.log(values);
  };
  const handleResetFilters = () => {
    setFilters({
      type: 'day',
      from: null,
      to: null,
    });
  };
  const [data, setData] = useState(generateDataForCurrentMonth());
  useEffect(() => {
    if (chartData?.data) {
      setData(chartData.data);
    }
  }, [chartData]);

  useEffect(() => {
    chartData.refetch();
  }, [filters]);
  return (
    <Card
      display="flex"
      flexDirection="column"
      overflow="hidden"
      w="full"
      px={{ base: '0', md: '0px' }}
      pt={{ base: '20px', md: '32px' }}
      pb={{ base: '20px', md: '32px' }}
    >
      <Tabs variant="unstyled">
        <TabList
          px="40px"
          flexDirection={{
            base: 'column',
            md: 'row',
          }}
          mb="8px"
        >
          <Tab
            outline="none"
            _selected={{
              color: colorMode === 'light' ? 'dark' : 'white',
              outline: 'none',
            }}
            color="brandGray.200"
          >
            <Text
              textAlign={{
                base: 'center',
                sm: 'left',
              }}
              as="h3"
              fontSize="24px"
              fontWeight={700}
            >
              {t('chart.title-1')}
            </Text>
          </Tab>
          {/* <Tab
            outline="none"
            _selected={{
              color: colorMode === 'light' ? 'dark' : 'white',
              outline: 'none',
            }}
            color="brandGray.200"
          >
            <Text
              textAlign={{
                base: 'center',
                sm: 'left',
              }}
              as="h3"
              fontSize="24px"
              fontWeight={700}
            >
              {t('chart.title-2')}
            </Text>
          </Tab> */}
          {/* <Tab
            outline="none"
            _selected={{
              color: colorMode === 'light' ? 'dark' : 'white',
              outline: 'none',
            }}
            color="brandGray.200"
          >
            <Text
              textAlign={{
                base: 'center',
                sm: 'left',
              }}
              as="h3"
              fontSize="24px"
              fontWeight={700}
            >
              {t('chart.title-3')}
            </Text>
          </Tab> */}
        </TabList>
        <ChartFilters
          filters={filters}
          submit={handleSubmitFilters}
          reset={handleResetFilters}
        />
        <TabPanels>
          <TabPanel px="0" pr="20px">
            <Box height={chartHeight} position="relative">
              <Box position="absolute" opacity={1} h="full" w="full">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart
                    width={500}
                    height={400}
                    data={data}
                    margin={{
                      top: 10,
                      right: 30,
                      left: 0,
                      bottom: 0,
                    }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis
                      tick={{
                        fill: colorMode === 'light' ? '#1A202C' : '#fff',
                      }}
                      dataKey="date"
                    />
                    <YAxis
                      tickFormatter={tickFormatter}
                      domain={[0, 'dataMax + 10']}
                      tick={{
                        fill: colorMode === 'light' ? '#1A202C' : '#fff',
                      }}
                    />
                    <Tooltip
                      formatter={(value) => [
                        `${formatCurrency(value)}`,
                        t('chart.label-1'),
                      ]}
                      contentStyle={{
                        backgroundColor:
                          colorMode === 'light' ? '#fff' : '#2D3748',
                      }}
                      wrapperStyle={{
                        outline: 'none',
                      }}
                      isAnimationActive={false}
                    />
                    <Area
                      type="monotone"
                      dataKey="income"
                      stroke={
                        colorMode === 'light' ? 'rgba(1, 113, 1)' : '#FFDC3F'
                      }
                      fill={
                        colorMode === 'light' ? 'rgba(1, 113, 1)' : '#FFDC3F'
                      }
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </Box>
            </Box>
          </TabPanel>
          <TabPanel>
            <Box height={chartHeight} position="relative">
              <Box position="absolute" opacity={1} h="full" w="full">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart
                    width={500}
                    height={400}
                    data={data}
                    margin={{
                      top: 10,
                      right: 30,
                      left: 0,
                      bottom: 0,
                    }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis
                      tick={{
                        fill: colorMode === 'light' ? '#1A202C' : '#fff',
                      }}
                      dataKey="date"
                    />
                    <YAxis
                      tick={{
                        fill: colorMode === 'light' ? '#1A202C' : '#fff',
                      }}
                    />
                    <Tooltip
                      formatter={(value) => [`$${value}`, t('chart.label-2')]}
                      contentStyle={{
                        backgroundColor:
                          colorMode === 'light' ? '#fff' : '#2D3748',
                      }}
                      wrapperStyle={{
                        outline: 'none',
                      }}
                      isAnimationActive={false}
                    />
                    <Area
                      type="monotone"
                      dataKey="affiliate"
                      stroke={
                        colorMode === 'light' ? 'rgba(1, 113, 1)' : '#FFDC3F'
                      }
                      fill={
                        colorMode === 'light' ? 'rgba(1, 113, 1)' : '#FFDC3F'
                      }
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </Box>
            </Box>
          </TabPanel>
          <TabPanel>
            <Box height={chartHeight} position="relative">
              <Box position="absolute" opacity={1} h="full" w="full">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart
                    width={500}
                    height={400}
                    data={data}
                    margin={{
                      top: 10,
                      right: 30,
                      left: 0,
                      bottom: 0,
                    }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis
                      tick={{
                        fill: colorMode === 'light' ? '#1A202C' : '#fff',
                      }}
                      dataKey="date"
                    />
                    <YAxis
                      tick={{
                        fill: colorMode === 'light' ? '#1A202C' : '#fff',
                      }}
                    />
                    <Tooltip
                      formatter={(value) => [`${value}`, t('chart.label-3')]}
                      contentStyle={{
                        backgroundColor:
                          colorMode === 'light' ? '#fff' : '#2D3748',
                      }}
                      wrapperStyle={{
                        outline: 'none',
                      }}
                      isAnimationActive={false}
                    />
                    <Area
                      type="monotone"
                      dataKey="users"
                      stroke={
                        colorMode === 'light' ? 'rgba(1, 113, 1)' : '#FFDC3F'
                      }
                      fill={
                        colorMode === 'light' ? 'rgba(1, 113, 1)' : '#FFDC3F'
                      }
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </Box>
            </Box>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Card>
  );
}

export default Chart;
