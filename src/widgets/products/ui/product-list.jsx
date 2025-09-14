import { Flex, Skeleton } from '@chakra-ui/react';
import { ProductCard } from './product-card';
import { useCart, useProducts } from '../hooks';

export function ProductsList() {
  const { data: products = [], isLoading } = useProducts();
  const { addToCart } = useCart();

  if (isLoading) {
    return (
      <Flex gap="20px" flexWrap="wrap">
        {Array.from({ length: 4 }).map((_, i) => (
          // eslint-disable-next-line react/no-array-index-key
          <Skeleton key={i} height="200px" width="200px" borderRadius="md" />
        ))}
      </Flex>
    );
  }

  return (
    <Flex gap="20px" flexWrap="wrap">
      {products.map((p) => (
        <ProductCard
          key={p.id}
          id={p.id}
          name={p.name}
          stockGrams={p.stockGrams}
          onAdd={(grams) => addToCart({ productId: p.id, name: p.name, grams })}
        />
      ))}
    </Flex>
  );
}
