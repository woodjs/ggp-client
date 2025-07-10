import { useEffect, useState } from 'react';
import { useTranslation } from 'next-i18next';
import { useFormik } from 'formik';
import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Select,
  Stack,
} from '@chakra-ui/react';

import { useRequisite, useRequisiteType } from '@/hooks/user/useRequisite';
import Modal from '@/components/layout/Modal/Modal';
import { requisiteSchema } from '../requisite.schema';

export default function ModalUpdate({ isOpen, onClose, selectedRequisite }) {
  const { t } = useTranslation('finance');
  const { getAll } = useRequisiteType();
  const { updateById } = useRequisite();
  const { data } = getAll();
  const { mutate } = updateById();

  const [categories, setCategories] = useState([]);
  const [initial, setInitial] = useState(null);

  const {
    values,
    errors,
    touched,
    setErrors,
    setTouched,
    setValues,
    setFieldValue,
    handleBlur,
    handleSubmit,
    handleChange,
  } = useFormik({
    initialValues: {
      requisiteId: '',
      categoryId: '',
      name: '',
      value: '',
    },
    validationSchema: requisiteSchema,
    onSubmit: (payload, { resetForm }) => {
      mutate(
        {
          id: selectedRequisite.id,
          data: payload,
        },
        {
          onSuccess: () => {
            resetForm();
            onClose();
          },
        }
      );
    },
  });

  const handleChangeCategories = (dataCategories) => {
    if (!dataCategories || !dataCategories?.length) {
      setCategories([]);
      setFieldValue('categoryId', '', false);
      return false;
    }

    return setCategories(dataCategories);
  };

  useEffect(() => {
    if (!selectedRequisite) return;
    const result = data.find(
      (item) => item.id === selectedRequisite.category.requisiteId
    );
    setValues({
      requisiteId: String(selectedRequisite.category.requisiteId),
      categoryId: String(selectedRequisite.categoryId),
      name: selectedRequisite.name,
      value: selectedRequisite.value,
    });
    handleChangeCategories(result.categories);
    setInitial({
      requisiteId: String(selectedRequisite.category.requisiteId),
      categoryId: String(selectedRequisite.categoryId),
      name: selectedRequisite.name,
      value: selectedRequisite.value,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedRequisite]);

  return (
    <Modal
      isOpen={isOpen}
      onClose={() => {
        setErrors({});
        setTouched({}, false);
        onClose();
      }}
      title={t('requisite-edit-title')}
      blockScrollOnMount={false}
      handleClick={handleSubmit}
      isDisabled={JSON.stringify(initial) === JSON.stringify(values)}
    >
      {data ? (
        <Stack spacing="20px">
          <FormControl
            isRequired
            isInvalid={!!errors.requisiteId && touched.requisiteId}
          >
            <FormLabel>{t('requisite-type')}</FormLabel>
            <Select
              placeholder={t('requisite-type-placeholder')}
              name="requisiteId"
              onBlur={handleBlur}
              value={values.requisiteId}
              onChange={(e) => {
                setFieldValue('categoryId', '', false);
                handleChange(e);
                const type = data.find((item) => item.id === +e.target.value);
                handleChangeCategories(type?.categories);
              }}
            >
              {data.map(({ id, name }) => (
                <option key={id} value={id}>
                  {name}
                </option>
              ))}
            </Select>
            <FormErrorMessage>{t(errors.requisiteId)}</FormErrorMessage>
          </FormControl>
          <FormControl
            isRequired
            isInvalid={!!errors.categoryId && touched.categoryId}
          >
            <FormLabel>{t('requisite-category')}</FormLabel>
            <Select
              placeholder={
                categories?.length
                  ? t('requisite-category-placeholder')
                  : t('requisite-category-placeholder-empty')
              }
              name="categoryId"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.categoryId}
            >
              {categories?.length
                ? categories.map(({ id, name }) => (
                    <option key={id} value={id}>
                      {name}
                    </option>
                  ))
                : null}
            </Select>
            <FormErrorMessage>{t(errors.categoryId)}</FormErrorMessage>
          </FormControl>
          <FormControl>
            <FormLabel>{t('requisite-name')}</FormLabel>
            <Input
              placeholder={t('requisite-name-placeholder')}
              onChange={handleChange}
              name="name"
              onBlur={handleBlur}
              value={values.name}
            />
          </FormControl>
          <FormControl isRequired isInvalid={!!errors.value && touched.value}>
            <FormLabel>{t('requisite-wallet')}</FormLabel>
            <Input
              placeholder={t('requisite-wallet-placeholder')}
              onChange={handleChange}
              name="value"
              onBlur={handleBlur}
              value={values.value}
            />
            <FormErrorMessage>{t(errors.value)}</FormErrorMessage>
          </FormControl>
        </Stack>
      ) : (
        <div>Loading...</div>
      )}
    </Modal>
  );
}
