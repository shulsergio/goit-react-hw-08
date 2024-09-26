import css from "./LoginForm.module.css";
import { Field, Form, Formik } from "formik";

export default function LoginForm() {
  const handleSubmit = (values, actions) => {
    console.log(values);
    actions.resetForm();
  };

  return (
    <>
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        onSubmit={handleSubmit}
      >
        <Form className={css.form} autoComplete="off">
          <label className={css.labelEmail}>
            E-mail
            <Field className={css.field} type="email" name="email" />
          </label>
          <label className={css.labelPassword}>
            <Field className={css.field} type="password" name="password" />
          </label>
          <button type="submit">Log In</button>
        </Form>
      </Formik>
    </>
  );
}
