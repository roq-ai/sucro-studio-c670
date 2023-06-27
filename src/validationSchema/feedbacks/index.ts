import * as yup from 'yup';

export const feedbackValidationSchema = yup.object().shape({
  content: yup.string().required(),
  end_customer_id: yup.string().nullable(),
  startup_id: yup.string().nullable(),
});
