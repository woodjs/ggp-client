import { SimpleGrid } from '@chakra-ui/react';
import Category from './Category/Category';

export default function NFTsCategories({ data, categoryId, handleChange }) {
  return (
    <SimpleGrid
      gridTemplateColumns={{
        base: '1fr',
        xl: 'repeat(4, 1fr)',
        lg: 'repeat(3, 1fr)',
        md: 'repeat(2, 1fr)',
      }}
      gap="26px"
    >
      {data.map(({ id, name, icon, isDisabled, subtitle }) => (
        <Category
          key={id}
          name={name}
          icon={icon}
          isActive={categoryId === id}
          isDisabled={isDisabled}
          subtitle={subtitle}
          handleClick={() => handleChange(id)}
        />
      ))}
    </SimpleGrid>
  );
}
