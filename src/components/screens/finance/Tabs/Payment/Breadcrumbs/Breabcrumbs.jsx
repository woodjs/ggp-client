import {
  Breadcrumb,
  BreadcrumbItem,
  HStack,
  Image,
  Text,
} from '@chakra-ui/react';
import { ChevronRightIcon } from '@chakra-ui/icons';

export default function Breadcrumbs({ data }) {
  console.log('test');
  return (
    <Breadcrumb separator={<ChevronRightIcon color="gray.500" />}>
      {data.map((breadcrumb) => (
        <BreadcrumbItem key={breadcrumb.name}>
          <HStack spacing="10px">
            <Image src={breadcrumb.icon} alt="" w="30px" h="30px" />
            <Text fontWeight="bold">{breadcrumb.name}</Text>
          </HStack>
        </BreadcrumbItem>
      ))}
    </Breadcrumb>
  );
}
