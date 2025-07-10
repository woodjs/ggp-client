import { Box } from '@chakra-ui/react';
import AuthHistoryCards from './AuthHistoryCards/AuthHistoryCards';
import AuthHistoryTable from './AuthHistoryTable';
/**
 *
 * @typedef {Object} HistoryItem
 * @property {String} id - id of history item
 * @property {String} ip - ip of history item
 * @property {Object} device - device of history item
 * @property {String} device.name - name of device
 * @property {"computer" | "phone"} device.type - type of device
 * @property {String} location - location of history item
 * @property {Object} browser - browser of history item
 * @property {String} browser.name - name of browser
 * @property {String} date - date of history item (in format 'DD.MM.YYYY HH:mm')
 * @property {String} title - title of history item
 * @param {Object} props
 * @param {HistoryItem[]} [props.history] - array of history items
 * @returns
 *
 * @example
 * <AuthHistory history={history} />
 */
function AuthHistory({ history }) {
  return (
    <>
      <Box id="devices" w="full" display={{ base: 'none', lg: 'flex' }}>
        <AuthHistoryTable history={history} />
      </Box>
      <Box w="full" display={{ base: 'flex', lg: 'none' }}>
        <AuthHistoryCards history={history} />
      </Box>
    </>
  );
}

export default AuthHistory;
