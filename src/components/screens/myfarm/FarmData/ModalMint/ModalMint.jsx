// import { useState } from 'react';
// import { Button, Stack, Step, Steps, useSteps } from '@chakra-ui/react';
// import { useAccount } from 'wagmi';
// import { useQueryClient } from 'react-query';

// import Modal from '@/components/layout/Modal/Modal';

// import Step1 from './Step1';
// import Step2 from './Step2';
// import Step3 from './Step3';

// export default function ModalMint({ isOpen, onClose, nftId }) {
//   const { address } = useAccount();
//   const { nextStep, prevStep, reset, activeStep } = useSteps({
//     initialStep: 0,
//   });
//   const [state, setState] = useState(null);

//   const queryClient = useQueryClient();

//   return (
//     <Modal
//       isOpen={isOpen}
//       onClose={() => {
//         reset();
//         onClose();
//         setState(null);
//         queryClient.refetchQueries('user-nfts');
//       }}
//       title="Mint"
//       size="2xl"
//       variant="circles"
//     >
//       <Stack spacing={4}>
//         <Steps
//           state={state}
//           activeStep={activeStep}
//           sx={{
//             '& .cui-steps__vertical-step-content': {
//               pl: 0,
//               zIndex: 1,
//             },
//           }}
//         >
//           <Step description="Предупреждение">
//             <Step1 />
//           </Step>
//           <Step description="Подтверждение">
//             <Step2 id={nftId} setState={setState} />
//           </Step>
//           <Step description="Mint">
//             <Step3 id={nftId} setState={setState} nextStep={nextStep} />
//           </Step>
//         </Steps>

//         {activeStep <= 1 && (
//           <>
//             <Button onClick={prevStep} isDisabled={activeStep === 0 || state}>
//               Back
//             </Button>
//             <Button
//               onClick={nextStep}
//               isLoading={state}
//               isDisabled={activeStep === 1 && !address}
//             >
//               Next
//             </Button>
//           </>
//         )}
//       </Stack>
//     </Modal>
//   );
// }
