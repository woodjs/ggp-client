import { Card } from '@/components/Card';
import {
  Box,
  Text,
  useColorModeValue,
  SimpleGrid,
  Image,
  Flex,
  Avatar,
  Stack,
  Heading,
  Button,
  HStack,
  Grid,
  GridItem,
  VStack,
} from '@chakra-ui/react';
import CabinetContent from '@/components/layout/Cabinet/CabinetContent';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale ?? 'en', [
      'cabinet',
      'global',
      'promo-modal',
    ])),
  },
});

export default function Leaders() {
  return (
    <CabinetContent
      bgImage={useColorModeValue(
        '/images/bg/news/light.jpg',
        '/images/bg/news/dark.png'
      )}
    >
      <VStack spacing="30px">
        <Box w="full">
          <Text fontWeight="bold" mb="40px" as="h2" fontSize="2xl">
            Топ 5 лидеров компании
          </Text>

          <Grid
            templateColumns="repeat(auto-fit, minmax(186px, 1fr))"
            bg={useColorModeValue('white', 'darkLight')}
            borderRadius="16px"
          >
            <GridItem>
              <Box textAlign="center" p="30px">
                <Image
                  ml="auto"
                  mr="auto"
                  mb="15px"
                  width="130px"
                  height="130px"
                  borderRadius="50%"
                  objectFit="cover"
                  src="/images/leader-temp.png"
                  alt=""
                />
                <Text fontWeight="bold" mb="5px">
                  dkraw
                </Text>
                <Text mb="5px" color="brandGray.200">
                  Президент
                </Text>
                <Text color="brandGray.200">3000 партнёров</Text>
              </Box>
            </GridItem>
            <GridItem>
              <Box textAlign="center" p="30px">
                <Image
                  ml="auto"
                  mr="auto"
                  mb="15px"
                  width="130px"
                  height="130px"
                  borderRadius="50%"
                  objectFit="cover"
                  src="/images/leader-temp.png"
                  alt=""
                />
                <Text fontWeight="bold" mb="5px">
                  dkraw
                </Text>
                <Text mb="5px" color="brandGray.200">
                  Президент
                </Text>
                <Text color="brandGray.200">3000 партнёров</Text>
              </Box>
            </GridItem>
            <GridItem>
              <Box textAlign="center" p="30px">
                <Image
                  ml="auto"
                  mr="auto"
                  mb="15px"
                  width="130px"
                  height="130px"
                  borderRadius="50%"
                  objectFit="cover"
                  src="/images/leader-temp.png"
                  alt=""
                />
                <Text fontWeight="bold" mb="5px">
                  dkraw
                </Text>
                <Text mb="5px" color="brandGray.200">
                  Президент
                </Text>
                <Text color="brandGray.200">3000 партнёров</Text>
              </Box>
            </GridItem>
            <GridItem>
              <Box textAlign="center" p="30px">
                <Image
                  ml="auto"
                  mr="auto"
                  mb="15px"
                  width="130px"
                  height="130px"
                  borderRadius="50%"
                  objectFit="cover"
                  src="/images/leader-temp.png"
                  alt=""
                />
                <Text fontWeight="bold" mb="5px">
                  dkraw
                </Text>
                <Text mb="5px" color="brandGray.200">
                  Президент
                </Text>
                <Text color="brandGray.200">3000 партнёров</Text>
              </Box>
            </GridItem>
            <GridItem>
              <Box textAlign="center" p="30px">
                <Image
                  ml="auto"
                  mr="auto"
                  mb="15px"
                  width="130px"
                  height="130px"
                  borderRadius="50%"
                  objectFit="cover"
                  src="/images/leader-temp.png"
                  alt=""
                />
                <Text fontWeight="bold" mb="5px">
                  dkraw
                </Text>
                <Text mb="5px" color="brandGray.200">
                  Президент
                </Text>
                <Text color="brandGray.200">3000 партнёров</Text>
              </Box>
            </GridItem>
          </Grid>
        </Box>

        <Box w="full">
          <Text fontWeight="bold" mb="40px" as="h2" fontSize="2xl">
            Лидеры компании
          </Text>

          <Grid
            templateColumns="repeat(auto-fit, minmax(190px, 1fr))"
            bg={useColorModeValue('white', 'darkLight')}
            borderRadius="16px"
          >
            <GridItem>
              <Box textAlign="center" p="30px">
                <Image
                  ml="auto"
                  mr="auto"
                  mb="15px"
                  width="100px"
                  height="100px"
                  borderRadius="50%"
                  objectFit="cover"
                  src="/images/leader-temp.png"
                  alt=""
                />
                <Text fontWeight="bold" mb="5px">
                  dkraw
                </Text>
                <Text mb="5px" color="brandGray.200">
                  Президент
                </Text>
                <Text color="brandGray.200">3000 партнёров</Text>
              </Box>
            </GridItem>
            <GridItem>
              <Box textAlign="center" p="30px">
                <Image
                  ml="auto"
                  mr="auto"
                  mb="15px"
                  width="100px"
                  height="100px"
                  borderRadius="50%"
                  objectFit="cover"
                  src="/images/leader-temp.png"
                  alt=""
                />
                <Text fontWeight="bold" mb="5px">
                  dkraw
                </Text>
                <Text mb="5px" color="brandGray.200">
                  Президент
                </Text>
                <Text color="brandGray.200">3000 партнёров</Text>
              </Box>
            </GridItem>
            {/* <GridItem>
              <Box textAlign="center" p="30px">
                <Image
                  ml="auto"
                  mr="auto"
                  mb="15px"
                  width="100px"
                  height="100px"
                  borderRadius="50%"
                  objectFit="cover"
                  src="/images/leader-temp.png"
                  alt=""
                />
                <Text fontWeight="bold" mb="5px">
                  dkraw
                </Text>
                <Text mb="5px" color="brandGray.200">
                  Президент
                </Text>
                <Text color="brandGray.200">3000 партнёров</Text>
              </Box>
            </GridItem> */}
            {/* <GridItem>
              <Box textAlign="center" p="30px">
                <Image
                  ml="auto"
                  mr="auto"
                  mb="15px"
                  width="100px"
                  height="100px"
                  borderRadius="50%"
                  objectFit="cover"
                  src="/images/leader-temp.png"
                  alt=""
                />
                <Text fontWeight="bold" mb="5px">
                  dkraw
                </Text>
                <Text mb="5px" color="brandGray.200">
                  Президент
                </Text>
                <Text color="brandGray.200">3000 партнёров</Text>
              </Box>
            </GridItem>
            <GridItem>
              <Box textAlign="center" p="30px">
                <Image
                  ml="auto"
                  mr="auto"
                  mb="15px"
                  width="100px"
                  height="100px"
                  borderRadius="50%"
                  objectFit="cover"
                  src="/images/leader-temp.png"
                  alt=""
                />
                <Text fontWeight="bold" mb="5px">
                  dkraw
                </Text>
                <Text mb="5px" color="brandGray.200">
                  Президент
                </Text>
                <Text color="brandGray.200">3000 партнёров</Text>
              </Box>
            </GridItem> */}
          </Grid>
        </Box>
      </VStack>
      {/* <SimpleGrid
        fontSize="sm"
        spacingY={5}
        columns={{ '2xl': 4, xl: 2, md: 1 }}
        borderRadius="16px"
        bg={useColorModeValue('white', 'darkLight')}
      >
        <Box textAlign="center" p="30px">
          <Image
            ml="auto"
            mr="auto"
            mb="15px"
            width="100px"
            height="100px"
            borderRadius="50%"
            objectFit="cover"
            src="/images/leader-temp.png"
            alt=""
          />
          <Text fontWeight="bold" mb="5px">
            dkraw
          </Text>
          <Text mb="5px" color="brandGray.200">
            Президент
          </Text>
          <Text color="brandGray.200">3000 партнёров</Text>
        </Box>
        <Box textAlign="center" p="30px">
          <Image
            ml="auto"
            mr="auto"
            mb="15px"
            width="100px"
            height="100px"
            borderRadius="50%"
            objectFit="cover"
            src="/images/leader-temp.png"
            alt=""
          />
          <Text fontWeight="bold" mb="5px">
            dkraw
          </Text>
          <Text mb="5px" color="brandGray.200">
            Президент
          </Text>
          <Text color="brandGray.200">3000 партнёров</Text>
        </Box>
        <Box textAlign="center" p="30px">
          <Image
            ml="auto"
            mr="auto"
            mb="15px"
            width="100px"
            height="100px"
            borderRadius="50%"
            objectFit="cover"
            src="/images/leader-temp.png"
            alt=""
          />
          <Text fontWeight="bold" mb="5px">
            dkraw
          </Text>
          <Text mb="5px" color="brandGray.200">
            Президент
          </Text>
          <Text color="brandGray.200">3000 партнёров</Text>
        </Box>
        <Box textAlign="center" p="30px">
          <Image
            ml="auto"
            mr="auto"
            mb="15px"
            width="100px"
            height="100px"
            borderRadius="50%"
            objectFit="cover"
            src="/images/leader-temp.png"
            alt=""
          />
          <Text fontWeight="bold" mb="5px">
            dkraw
          </Text>
          <Text mb="5px" color="brandGray.200">
            Президент
          </Text>
          <Text color="brandGray.200">3000 партнёров</Text>
        </Box>
        <Box textAlign="center" p="30px">
          <Image
            ml="auto"
            mr="auto"
            mb="15px"
            width="100px"
            height="100px"
            borderRadius="50%"
            objectFit="cover"
            src="/images/leader-temp.png"
            alt=""
          />
          <Text fontWeight="bold" mb="5px">
            dkraw
          </Text>
          <Text mb="5px" color="brandGray.200">
            Президент
          </Text>
          <Text color="brandGray.200">3000 партнёров</Text>
        </Box>
        <Box textAlign="center" p="30px">
          <Image
            ml="auto"
            mr="auto"
            mb="15px"
            width="100px"
            height="100px"
            borderRadius="50%"
            objectFit="cover"
            src="/images/leader-temp.png"
            alt=""
          />
          <Text fontWeight="bold" mb="5px">
            dkraw
          </Text>
          <Text mb="5px" color="brandGray.200">
            Президент
          </Text>
          <Text color="brandGray.200">3000 партнёров</Text>
        </Box>
        <Box textAlign="center" p="30px">
          <Image
            ml="auto"
            mr="auto"
            mb="15px"
            width="100px"
            height="100px"
            borderRadius="50%"
            objectFit="cover"
            src="/images/leader-temp.png"
            alt=""
          />
          <Text fontWeight="bold" mb="5px">
            dkraw
          </Text>
          <Text mb="5px" color="brandGray.200">
            Президент
          </Text>
          <Text color="brandGray.200">3000 партнёров</Text>
        </Box>
        <Box textAlign="center" p="30px">
          <Image
            ml="auto"
            mr="auto"
            mb="15px"
            width="100px"
            height="100px"
            borderRadius="50%"
            objectFit="cover"
            src="/images/leader-temp.png"
            alt=""
          />
          <Text fontWeight="bold" mb="5px">
            dkraw
          </Text>
          <Text mb="5px" color="brandGray.200">
            Президент
          </Text>
          <Text color="brandGray.200">3000 партнёров</Text>
        </Box>
        <Box textAlign="center" p="30px">
          <Image
            ml="auto"
            mr="auto"
            mb="15px"
            width="100px"
            height="100px"
            borderRadius="50%"
            objectFit="cover"
            src="/images/leader-temp.png"
            alt=""
          />
          <Text fontWeight="bold" mb="5px">
            dkraw
          </Text>
          <Text mb="5px" color="brandGray.200">
            Президент
          </Text>
          <Text color="brandGray.200">3000 партнёров</Text>
        </Box>
        <Box textAlign="center" p="30px">
          <Avatar
            ml="auto"
            mr="auto"
            mb="15px"
            width="100px"
            height="100px"
            borderRadius="50%"
            objectFit="cover"
            src=""
            alt=""
          />
          <Text fontWeight="bold" mb="5px">
            Свободное место
          </Text>
        </Box>
      </SimpleGrid> */}
    </CabinetContent>
  );
}
