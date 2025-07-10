import CabinetContent from '@/components/layout/Cabinet/CabinetContent';
import getFilesName from '@/utils/getFilesName';
import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Image,
  Input,
  Select,
  Stack,
  VStack,
  chakra,
  useColorModeValue,
} from '@chakra-ui/react';
import axios from 'axios';
import { Form, Formik } from 'formik';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useState } from 'react';
import { toast } from 'react-toastify';
import * as yup from 'yup';

/**
 * @param {FileList} files
 */
const checkTypeFiles = (files) => {
  let result = true;
  if (!files) return false;
  if (!files?.length) return false;
  for (let i = 0; i < files.length; i += 1) {
    const { type } = files.item(i);
    if (
      !(
        type === 'image/jpeg' ||
        type === 'image/jpg' ||
        type === 'image/png' ||
        type === 'video/mp4' ||
        type === 'video/mov' ||
        type === 'video/quicktime'
      )
    ) {
      result = false;
    }
  }
  return result;
};
const reportUploadSchema = yup.object().shape({
  potNumber: yup.number('Введите число').required('Это обязательное поле'),
  date: yup.string().required('Это обязательное поле'),
  file: yup
    .mixed()
    .test(
      'type',
      'Поддерживаемые типы файлов: .jpeg, .jpg, .png, .mp4, .mov',
      checkTypeFiles
    ),
});

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale ?? 'en', ['cabinet', 'global'])),
  },
});

function ReportUpload() {
  const bgColor = useColorModeValue('white', 'darkLight');

  const [filesSrc, setFilesSrc] = useState([]);
  return (
    <CabinetContent title="Загрузка отчетности">
      <Stack
        w="full"
        gap={4}
        spacing={0}
        direction={{ base: 'column', md: 'row' }}
      >
        <Formik
          initialValues={{
            potNumber: '',
            date: 1,
            file: '',
          }}
          validationSchema={reportUploadSchema}
          onSubmit={(values, { resetForm }) => {
            console.log(values);
            const formData = new FormData();
            formData.append('potId', values.potNumber);
            formData.append('plantingId', +values.date);
            for (let i = 0; i < values.file.length; i += 1) {
              formData.append('media', values.file[i]);
            }
            axios
              .post(`${process.env.SERVER_URL}/api/sergey/pots`, formData, {
                headers: {
                  'Content-Type': 'multipart/form-data',
                },
              })
              .then((res) => {
                resetForm();
                toast.success('ok');
                setFilesSrc([]);
                // console.log(res);
              })
              .catch((err) => {
                console.log(err);
              });
          }}
        >
          {(props) => (
            <Box maxW="400px">
              <Form>
                <VStack>
                  <FormControl
                    isInvalid={
                      props.errors.potNumber && props.touched.potNumber
                    }
                  >
                    <FormLabel htmlFor="potNumber">Номер горшка</FormLabel>
                    <Input
                      type="number"
                      name="potNumber"
                      onChange={props.handleChange}
                      onBlur={props.handleBlur}
                      value={props.values.potNumber}
                    />
                    <FormErrorMessage>
                      {props.errors.potNumber}
                    </FormErrorMessage>
                  </FormControl>
                  <FormControl
                    isInvalid={props.errors.date && props.touched.date}
                  >
                    <FormLabel htmlFor="date">Дата посадки</FormLabel>

                    <Select
                      name="date"
                      onChange={props.handleChange}
                      value={props.values.date}
                    >
                      <option value={1}>Март</option>
                      <option value={2}>Апрель</option>
                      <option value={3} selected>
                        Нужный месяц
                      </option>
                    </Select>
                    <FormErrorMessage>{props.errors.date}</FormErrorMessage>
                  </FormControl>
                  <FormControl
                    isInvalid={props.errors.file && props.touched.file}
                  >
                    <FormLabel htmlFor="file">Файл (фото или видео)</FormLabel>
                    <chakra.label htmlFor="file">
                      <Box
                        bg={bgColor}
                        _hover={{
                          opacity: 0.8,
                        }}
                        p="2"
                        borderRadius="md"
                        cursor="pointer"
                      >
                        {getFilesName(props.values.file)}
                      </Box>
                    </chakra.label>
                    <Input
                      display="none"
                      id="file"
                      multiple
                      type="file"
                      name="file"
                      onChange={(e) => {
                        props.setFieldValue('file', e.target.files);
                        if (checkTypeFiles(e.target.files)) {
                          const files = [];
                          for (let i = 0; i < e.target.files.length; i += 1) {
                            files.push(URL.createObjectURL(e.target.files[i]));
                          }
                          setFilesSrc(files);
                        } else {
                          setFilesSrc([]);
                        }
                      }}
                      onBlur={props.handleBlur}
                    />
                    <FormErrorMessage>{props.errors.file}</FormErrorMessage>
                  </FormControl>
                  <Button
                    alignSelf={{ base: 'center', md: 'start' }}
                    type="submit"
                  >
                    Отправить
                  </Button>
                </VStack>
              </Form>
            </Box>
          )}
        </Formik>

        {filesSrc.length && (
          <chakra.label
            htmlFor="file"
            w="fit-content"
            h="fit-content"
            mt="4"
            bg={bgColor}
            p="4"
            borderRadius="md"
            cursor="pointer"
            display="flex"
            alignItems="center"
            justifyContent="center"
            flexWrap="wrap"
          >
            {filesSrc.map((file) => (
              <Image
                key={file}
                objectFit="cover"
                h="full"
                w="full"
                maxH="300px"
                maxW="300px"
                css={{
                  aspectRatio: '1/1',
                }}
                src={file}
              />
            ))}
          </chakra.label>
        )}
      </Stack>
    </CabinetContent>
  );
}

export default ReportUpload;
