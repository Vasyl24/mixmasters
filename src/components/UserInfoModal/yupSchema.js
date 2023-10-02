import * as yup from 'yup';
export const yupSchema = yup.object().shape({
  name: yup
    .string()
    .min(2, ({ min }) => `Name must be at least ${min} characters`)
    .max(16, ({ max }) => `Name must be at least ${max} characters`)
    .required(),
});
