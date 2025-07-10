import { Icon } from '@chakra-ui/react';
import { MdComputer, MdOutlineSmartphone } from 'react-icons/md';
/**
 *
 * @param {Object} props
 * @param {String} [props.device='computer'] - 'computer' or 'phone'
 * @param {import('@chakra-ui/react').IconProps} [props.iconProps] - props for Icon component from Chakra UI
 * @returns
 *
 */

function DeviceIcon({ device = 'computer', iconProps }) {
  if (device === 'computer') {
    return <Icon boxSize="30px" as={MdComputer} {...iconProps} />;
  }
  if (device === 'phone') {
    return <Icon boxSize="30px" as={MdOutlineSmartphone} {...iconProps} />;
  }
  return <Icon boxSize="30px" as={MdComputer} {...iconProps} />;
}
export default DeviceIcon;
