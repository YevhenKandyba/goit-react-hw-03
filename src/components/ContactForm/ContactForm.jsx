import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { nanoid } from "nanoid";

const ContactForm = ({ onAddContact }) => {
  const initialValues = { name: "", number: "" };
  const validationSchema = Yup.object({
    name: Yup.string().min(3).max(50).required(),
    number: Yup.string().required(),
  });

  const handleSubmit = (values, { resetForm }) => {
    onAddContact({ ...values, id: nanoid() });
    resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <Form>
        <label>
          Name
          <Field type="text" name="name" />
          <ErrorMessage name="name" component="div" />
        </label>
        <label>
          Number
          <Field type="text" name="number" />
          <ErrorMessage name="number" component="div" />
        </label>
        <button type="submit">Add contact</button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
