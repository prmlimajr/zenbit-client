import { useFormik } from 'formik';
import { Button } from '../Button';
import { Input } from '../Input';
import { TextArea } from '../TextArea';
import {
  Form,
  FieldWrapper,
  Title,
  ButtonWrapper,
  ErrorMessage
} from './styles';
import { sendFeedback } from '../../store/reducer/feedbackSlice';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../store';
import * as Yup from 'yup';

export function FeedbackForm() {
  const dispatch = useDispatch<AppDispatch>();

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      message: ''
    },
    onSubmit: (values) => {
      dispatch(
        sendFeedback({
          name: values.name,
          email: values.email,
          message: values.message
        })
      );
    },
    validationSchema: Yup.object().shape({
      email: Yup.string()
        .email('Insert a valid email')
        .required('Please inform your email'),
      name: Yup.string()
        .required('Please inform your name')
        .min(2, 'Name must be at least 2 characters'),
      message: Yup.string()
        .required('Please inform your message')
        .max(255, 'Messages must not be longer than 255 characters')
    })
  });

  return (
    <Form onSubmit={formik.handleSubmit}>
      <Title>Reach out to us!</Title>

      <FieldWrapper>
        <Input
          id="name"
          name="name"
          type="text"
          placeholder="Your name*"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.name}
        />
        {formik.touched.name && formik.errors.name ? (
          <ErrorMessage>{formik.errors.name}</ErrorMessage>
        ) : null}
      </FieldWrapper>

      <FieldWrapper>
        <Input
          id="email"
          name="email"
          type="email"
          placeholder="Your email*"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
        />
        {formik.touched.email && formik.errors.email ? (
          <ErrorMessage>{formik.errors.email}</ErrorMessage>
        ) : null}
      </FieldWrapper>

      <FieldWrapper>
        <TextArea
          id="message"
          name="message"
          placeholder="Your message*"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.message}
        />
        {formik.touched.message && formik.errors.message ? (
          <ErrorMessage>{formik.errors.message}</ErrorMessage>
        ) : null}
      </FieldWrapper>

      <ButtonWrapper>
        <Button type="submit">Send message</Button>
      </ButtonWrapper>
    </Form>
  );
}
