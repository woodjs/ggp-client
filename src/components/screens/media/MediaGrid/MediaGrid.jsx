import { SimpleGrid } from '@chakra-ui/react';
import { MediaCard } from '../MediaCard';

/**
 * @typedef {React.ComponentProps<typeof MediaCard>} MediaProps
 * @property {string | number} props.id
 *
 * @typedef {Object} MediaGridProps
 * @property {MediaProps[]} props.medias
 *
 * @param {MediaGridProps} props
 * @returns {JSX.Element}
 */
function MediaGrid({ medias }) {
  // const checkLang = (langauges) => {
  //   if (langauges.includes(i18n.language)) {
  return (
    <SimpleGrid
      columns={{
        base: 1,
        sm: 2,
        md: 4,
        xl: 5,
        '2xl': 5,
      }}
      spacing="20px"
    >
      {medias.map((media) => (
        <MediaCard key={media.id} {...media} />
      ))}
    </SimpleGrid>
  );
}

export default MediaGrid;
