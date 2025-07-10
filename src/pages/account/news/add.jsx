import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Textarea,
  useColorModeValue,
} from '@chakra-ui/react';
import CabinetContent from '@/components/layout/Cabinet/CabinetContent';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { Card } from '@/components/Card';
import { Field, Formik } from 'formik';
import axios from 'axios';
import { toast } from 'react-toastify';
import * as Yup from 'yup';

const SUPPORTED_FORMATS = ['image/jpg', 'image/jpeg', 'image/gif', 'image/png'];

const SignupSchema = Yup.object().shape({
  titleRu: Yup.string()
    .min(2, 'Too Short!')
    .max(100, 'Too Long!')
    .required('Required'),
  titleEn: Yup.string()
    .min(2, 'Too Short!')
    .max(100, 'Too Long!')
    .required('Required'),
  contentRu: Yup.string().min(30, 'Too Short!').required('Required'),
  contentEn: Yup.string().min(30, 'Too Short!').required('Required'),
  posterRu: Yup.mixed().required('A file is required'),
  posterEn: Yup.mixed().required('A file is required'),
});

export default function AddNews() {
  return (
    <CabinetContent
      bgImage={useColorModeValue(
        '/images/bg/news/light.jpg',
        '/images/bg/news/dark.png'
      )}
      title="Добавить новость"
    >
      <Card w={'LG'} p={'30px'}>
        <Formik
          validationSchema={SignupSchema}
          initialValues={{
            titleRu: '',
            titleEn: '',
            contentRu: '',
            contentEn: '',
            posterRu: '',
            posterEn: '',
          }}
          onSubmit={(values, { resetForm }) => {
            const formData = new FormData();

            for (const key in values) {
              formData.append(key, values[key]);
            }

            axios
              .post('http://localhost:8080/api/news', formData, {
                headers: {
                  'Content-Type': 'multipart/form-data',
                },
              })
              .then((res) => {
                // console.log(res);
                resetForm();
                toast.success('ok');
              })
              .catch((err) => {
                console.log(err);
              });
          }}
        >
          {({ handleSubmit, errors, touched, setFieldValue }) => (
            <form onSubmit={handleSubmit}>
              <FormControl
                isInvalid={!!errors.titleRu && touched.titleRu}
                mb={'15px'}
              >
                <FormLabel htmlFor="titleRu">Заголовок (RU)</FormLabel>
                <Field
                  as={Input}
                  id="titleRu"
                  name="titleRu"
                  type="text"
                  variant="filled"
                />
                {touched.titleRu && errors.titleRu && (
                  <FormErrorMessage>{errors.titleRu}</FormErrorMessage>
                )}
              </FormControl>
              <FormControl
                isInvalid={!!errors.titleEn && touched.titleEn}
                mb="15px"
              >
                <FormLabel htmlFor="titleEn">Заголовок (EN)</FormLabel>
                <Field
                  as={Input}
                  id="titleEn"
                  name="titleEn"
                  type="text"
                  variant="filled"
                />
                {touched.titleEn && errors.titleEn && (
                  <FormErrorMessage>{errors.titleEn}</FormErrorMessage>
                )}
              </FormControl>
              <FormControl
                isInvalid={!!errors.contentRu && touched.contentRu}
                mb="15px"
              >
                <FormLabel htmlFor="contentRu">Контент (RU)</FormLabel>
                <Field
                  as={Textarea}
                  id="contentRu"
                  name="contentRu"
                  type="text"
                  variant="filled"
                  resize="none"
                />
                {touched.contentRu && errors.contentRu && (
                  <FormErrorMessage>{errors.contentRu}</FormErrorMessage>
                )}
              </FormControl>
              <FormControl
                isInvalid={!!errors.contentEn && touched.contentEn}
                mb="15px"
              >
                <FormLabel htmlFor="contentEn">Контент (EN)</FormLabel>
                <Field
                  as={Textarea}
                  id="contentEn"
                  name="contentEn"
                  type="text"
                  variant="filled"
                  resize="none"
                />
                {touched.contentEn && errors.contentEn && (
                  <FormErrorMessage>{errors.contentEn}</FormErrorMessage>
                )}
              </FormControl>
              <FormControl
                isInvalid={!!errors.posterRu && touched.posterRu}
                mb="15px"
              >
                <FormLabel htmlFor="posterRu">Постер (RU)</FormLabel>
                <Input
                  // as={Input}
                  id="posterRu"
                  name="posterRu"
                  type="file"
                  resize="none"
                  border="none"
                  p="0"
                  h="auto"
                  onChange={(e) => {
                    setFieldValue('posterRu', e.target.files[0]);
                  }}
                />
                {touched.posterRu && errors.posterRu && (
                  <FormErrorMessage>{errors.posterRu}</FormErrorMessage>
                )}
              </FormControl>
              <FormControl
                isInvalid={!!errors.posterEn && touched.posterEn}
                mb="15px"
              >
                <FormLabel htmlFor="posterEn">Постер (EN)</FormLabel>
                <Input
                  id="posterEn"
                  name="posterEn"
                  type="file"
                  resize="none"
                  border="none"
                  p="0"
                  h="auto"
                  onChange={(e) => {
                    setFieldValue('posterEn', e.target.files[0]);
                  }}
                />
                {touched.posterEn && errors.posterEn && (
                  <FormErrorMessage>{errors.posterEn}</FormErrorMessage>
                )}
              </FormControl>
              <Button type="submit" width="full">
                Создать новость
              </Button>
            </form>
          )}
        </Formik>
      </Card>
    </CabinetContent>
  );
}

export async function getStaticProps(context) {
  return {
    props: {
      ...(await serverSideTranslations(context.locale ?? 'en', [
        'news',
        'cabinet',
        'global',
        'promo-modal',
      ])),
    },
  };
}
