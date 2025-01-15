import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { nanoid } from "nanoid";
import s from "./ContactForm.module.css";

const ContactForm = ({ onAddContact }) => {
  const initialValues = { name: "", number: "" };
  const validationSchema = Yup.object({
    name: Yup.string().min(3).max(50).required(),
    number: Yup.string().min(3).max(50).required(),
  });

  const handleSubmit = (values, { resetForm }) => {
    onAddContact({ ...values, id: nanoid() });
    resetForm();
  };

  return (
    <div className={s.formWrapper}>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form className={s.form}>
          <label className={s.label}>
            Name
            <Field className={s.field} type="text" name="name" />
            <ErrorMessage className={s.error} name="name" component="div" />
          </label>
          <label className={s.label}>
            Number
            <Field className={s.field} type="text" name="number" />
            <ErrorMessage className={s.error} name="number" component="div" />
          </label>
          <button className={s.formBtn} type="submit">
            Add contact
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default ContactForm;
