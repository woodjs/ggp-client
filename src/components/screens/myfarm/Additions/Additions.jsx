import { Box, Stack } from '@chakra-ui/react';
import AdditionsCard from './AdditionsCard';

function Additions() {
  const additions = [
    {
      id: 0,
      isBought: false,
      title: 'Страховка',
      description:
        'Ваш актив может заболеть и умереть, поэтому рекомендуем закладывать страховку',
      image: '/images/myfarm/additions/insurance.png',
      onBuy: () => {},
      imageTransform: 'translateX(7%) scale(0.9)',
      price: 120,
    },
    {
      id: 1,
      isBought: false,
      title: 'Отчетность',
      description: 'Вы получите фото и видео отчет к каждому активу',
      image: '/images/myfarm/additions/report.png',
      onBuy: () => {},
      imageTransform: 'scale(1.2)',
      price: 120,
    },
    {
      id: 2,
      isBought: true,
      title: 'Отчетность',
      description: 'Вы получите фото и видео отчет к каждому активу',
      image: '/images/myfarm/additions/report.png',
      onBuy: () => {},
      imageTransform: 'scale(1.2)',
      price: 120,
    },
  ];
  return (
    <Box
      display="flex"
      gap="30px"
      alignItems={{ base: 'center', md: 'stretch' }}
      w="full"
      justifyItems={{ base: 'center', md: 'flex-start' }}
      flexDirection={{ base: 'column', md: 'row' }}
      flexWrap="wrap"
    >
      {additions.map((addition) => (
        <AdditionsCard
          key={addition.id}
          title={addition.title}
          description={addition.description}
          image={addition.image}
          onBuy={addition.onBuy}
          price={addition.price}
          imageTransform={addition.imageTransform}
          isBought={addition.isBought}
        />
      ))}
    </Box>
  );
}

export default Additions;
