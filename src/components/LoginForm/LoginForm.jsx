import { useDispatch } from "react-redux";
import css from "./LoginForm.module.css";
import { Field, Form, Formik } from "formik";
import { logIn } from "../../redux/auth/operations";

export default function LoginForm() {
  const dispatch = useDispatch();
  const handleSubmit = (values, actions) => {
    console.log(values);
    dispatch(logIn(values));
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
