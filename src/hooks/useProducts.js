import { useQuery } from 'react-query';
import { ProductsService } from '@/services/products';

export const useProducts = () => useQuery('products', ProductsService.findAll);
