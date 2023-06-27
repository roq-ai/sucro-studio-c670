import * as yup from 'yup';

export const collaboratorValidationSchema = yup.object().shape({
  user_id: yup.string().nullable(),
  startup_id: yup.string().nullable(),
});
