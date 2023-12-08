import * as yup from 'yup'
export const validationSchema = yup.object({
  userName: yup
    .string()
    .required("user name is Required ")
    .min(3, "user name must be at least 3 characters")
    .max(15, "user name musn't exceed 15 characters"),
  email: yup.string().email().required("email is Required "),
  password: yup
    .string()
    .required("password is Required ")
    .min(6, "password must be at least 6 characters")
    .max(16, "password musn't exceed 16 characters"),
});
export const loginSchema = yup.object({
  email: yup.string().email().required("email is Required "),
  password: yup
    .string()
    .required("password is Required ")
    .min(6, "password must be at least 6 characters")
    .max(16, "password musn't exceed 16 characters"),
});
export const forgetPassword = yup.object({
  email: yup.string().email().required("email is Required "),
  password: yup
    .string()
    .required("password is Required ")
    .min(6, "password must be at least 6 characters")
    .max(16, "password musn't exceed 16 characters"),
  code: yup.string().required("code is Required ").min(4, "code must be 4 characters").max(4,"code must be 4 characters")
});
