// import CardList from '@/shared/ui/CardList';
import CardListSkeleton from '@/shared/ui/CardList/Skeleton';

import { CollectionNFT } from '@/entities/collection-nft';
import { useCollections } from '@/entities/collection-nft/model';
import CardList from '@/shared/ui/CardList/CardList';

export function CollectionNFTList() {
  const { data, isLoading, isError } = useCollections();

  if (isLoading) return <CardListSkeleton />;
  if (isError) return 'Error';
  if (!data.length) return null;

  return (
    <CardList spacing="20px">
      {data.map((item) => (
        <CollectionNFT
          key={item.id}
          id={item.id}
          image={item.image}
          name={item.name}
          intervalPaymentDays={item.intervalPaymentDays}
          minPrice={item.minPrice}
          minPercent={item.minPercent}
          type={item.type}
        />
      ))}
    </CardList>
  );
}
