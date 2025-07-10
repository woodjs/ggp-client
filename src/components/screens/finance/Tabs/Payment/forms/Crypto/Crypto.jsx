import { usePaymentCreate } from '@/hooks/user/usePayment';
import { Center } from '@chakra-ui/react';
import { useTranslation } from 'next-i18next';
import { useEffect, useState } from 'react';
import Breadcrumbs from '../../Breadcrumbs/Breabcrumbs';
import ContentForm from '../../Content/Content';
// import InputAmountForm from '../InputAmount/InputAmountForm';
import NetworkForm from './Network/Network';
import QRCodeForm from './QRCode/QRCode';

export default function CryptoForm({ handleBack, method }) {
  // const { t } = useTranslation();
  const paymentCreate = usePaymentCreate();

  const [breadcrumbs, setBreadcrumbs] = useState([
    { name: method.name, icon: method.icon },
  ]);
  const [step, setStep] = useState(method.params?.networks.length > 1 ? 1 : 2);
  const [formData, setFormData] = useState({ methodId: method.id });

  const handleStep = () => {
    setStep((prev) => prev + 1);
  };

  const handleNetwork = async (network) => {
    setBreadcrumbs((prev) => [
      ...prev,
      { name: network.name, icon: network.icon },
    ]);

    setFormData({
      ...formData,
      network: network.code,
      networkName: network.name,
      currency: method.baseCurrency,
    });

    handleStep();
  };

  // const handleAmount = async (amount) => {
  //   setFormData({
  //     ...formData,
  //     amount,
  //   });

  //   handleStep();
  //   const result = await paymentCreate.mutateAsync({ ...formData, amount });
  //   console.log(result);
  // };

  useEffect(() => {
    if (step === 2) {
      console.log(step, formData);
      paymentCreate.mutate(formData);
    }
  }, [step]);

  switch (step) {
    // Выбор сети
    case 1: {
      return (
        <ContentForm title="Выберите сеть" handleBack={handleBack}>
          <Center>
            <Breadcrumbs data={breadcrumbs} />
          </Center>
          <NetworkForm
            data={method.params.networks}
            handleClick={handleNetwork}
          />
        </ContentForm>
      );
    }

    // case 2: {
    //   // Ввод суммы
    //   return (
    //     <ContentForm
    //       title="Введите сумму"
    //       handleBack={() => {
    //         if (method?.params?.networks.length > 1) {
    //           setStep((prev) => prev - 1);
    //           setBreadcrumbs((prev) => prev.slice(0, -1));
    //         } else {
    //           handleBack();
    //         }
    //       }}
    //     >
    //       <Center>
    //         <Breadcrumbs data={breadcrumbs} />
    //       </Center>

    //       <InputAmountForm
    //         amount={method.minAmount}
    //         minAmount={method.minAmount}
    //         baseCurrency={method.baseCurrency}
    //         handleClick={handleAmount}
    //       />
    //     </ContentForm>
    //   );
    // }

    // Создание заказа
    case 2: {
      if (paymentCreate.isLoading || !paymentCreate.data) return 'Loading';
      if (paymentCreate.isError) return 'Error';

      return (
        <ContentForm
          handleBack={() => {
            if (method?.params?.networks.length > 1) {
              setStep((prev) => prev - 1);
              setBreadcrumbs((prev) => prev.slice(0, -1));
            } else {
              handleBack();
            }
          }}
        >
          <Center>
            <Breadcrumbs data={breadcrumbs} />
          </Center>
          <QRCodeForm
            amount={method.minAmount}
            currency={method.baseCurrency}
            name={method.name}
            address={paymentCreate.data.address}
            network={formData.networkName || method.name}
            qrCode={paymentCreate.data.qrCode}
          />
        </ContentForm>
      );
    }

    default: {
      return 123;
    }
  }

  // return (

  // );
}
