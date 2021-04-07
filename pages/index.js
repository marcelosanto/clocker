import { Formik, useFormik } from 'formik'
import * as yup from 'yup'

import {
  Container,
  Box,
  Input,
  Button,
  Text,
  FormControl,
  FormLabel,
  FormHelperText,
  InputGroup,
  InputLeftAddon,
} from '@chakra-ui/react'

import firebase from '../config/firebase'
import { Logo } from '../components/Logo'

const validationSchema = yup.object().shape({
  email: yup
    .string()
    .email('E-mail inválido')
    .required('Preenchimento obrigatorio'),
  password: yup.string().required('Preenchimento obrigatorio'),
  username: yup.string().required('Preenchimento obrigatorio'),
})

export default function Home() {
  const {
    values,
    errors,
    touched,
    handleChange,
    handleBlur,
    handleSubmit,
    isSubmitting,
  } = useFormik({
    onSubmit: (values, form) => {
      console.log(values)
    },
    validationSchema,
    initialValues: {
      email: '',
      username: '',
      password: '',
    },
  })

  return (
    <Container p={4} centerContent>
      <Logo />
      <Box p={4} mt={8}>
        <Text>Crie sua agenda compartilhada</Text>
      </Box>

      <Box>
        <FormControl id='email' p={4} isRequired>
          <FormLabel>Email</FormLabel>
          <Input
            size='lg'
            type='email'
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {touched.email && (
            <FormHelperText textColor='#e74c3c'>{errors.email}</FormHelperText>
          )}
        </FormControl>

        <FormControl id='password' p={4} isRequired>
          <FormLabel>Senha</FormLabel>
          <Input
            size='lg'
            type='password'
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {touched.password && (
            <FormHelperText textColor='#e74c3c'>
              {errors.password}
            </FormHelperText>
          )}
        </FormControl>

        <FormControl id='username' p={4} isRequired>
          <InputGroup size='lg'>
            <InputLeftAddon children='clocker.work/' />
            <Input
              type='username'
              value={values.username}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </InputGroup>
          {touched.username && (
            <FormHelperText textColor='#e74c3c'>
              {errors.username}
            </FormHelperText>
          )}
        </FormControl>

        <Box p={4}>
          <Button
            width='100%'
            colorScheme='blue'
            onClick={handleSubmit}
            isLoading={!isSubmitting}
          >
            Entrar
          </Button>
        </Box>
      </Box>
    </Container>
  )
}
