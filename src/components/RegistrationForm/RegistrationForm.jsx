import { Field, Form, Formik } from "formik";
import css from "./RegistrationForm.module.css";

export default function RegistrationForm() {
  const handleSubmit = (value, actions) => {
    console.log(value);
  };
  return (
    <>
      <Formik
        initialValues={{
          name: "",
          email: "",
          password: "",
        }}
        onsubmit={handleSubmit}
      >
        <Form className={css.form} autoComplete="off">
          <label className={css.labelName}>
            Name
            <Field type="name" name="name" />
          </label>
          <label className={css.labelEmail}>
            E-mail
            <Field type="email" name="email" />
          </label>
          <label className={css.labelPassword}>
            <Field type="password" name="password" />
          </label>
          <button type="submit">Register</button>
        </Form>
      </Formik>
    </>
  );
}
