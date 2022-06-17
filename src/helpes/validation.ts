import * as yup from 'yup'

export const schemaValidation = yup
  .object({
    username: yup.string().required('Usuario é obrigatório'),
    //email: yup.string().email('Email invalido').required('Email é obrigatório'),
    password: yup.string().required('Senha é Obrigatório'),
  })
  .required()
