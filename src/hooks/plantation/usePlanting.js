import { PlantingService } from '@/services/plantation/planting/planting.service';
import { useQuery } from 'react-query';

export const usePlantings = (speciesId) =>
  useQuery(
    [`plantings-${speciesId}`, speciesId],
    () => PlantingService.getBySpeciesId(speciesId),
    {
      staleTime: Infinity,
    }
  );
