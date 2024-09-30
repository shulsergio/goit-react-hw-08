import { useDispatch } from "react-redux";
import css from "./LoginForm.module.css";
import { Field, Form, Formik } from "formik";
import { logIn } from "../../redux/auth/operations";

export default function LoginForm() {
  const dispatch = useDispatch();
  const handleSubmit = (values, actions) => {
    console.log("LoginForm values:");
    console.log(values);
    dispatch(logIn(values));
    actions.resetForm();
  };

  return (
    <div className={css.box}>
      <h2 className={css.header}>Please enter login</h2>
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        onSubmit={handleSubmit}
      >
        <Form className={css.form} autoComplete="off">
          <label className={css.label}>
            <Field
              className={css.field}
              type="email"
              name="email"
              placeholder="E-mail"
            />
          </label>
          <label className={css.label}>
            <Field
              className={css.field}
              type="password"
              name="password"
              placeholder="Password"
            />
          </label>
          <button className={css.button} type="submit">
            Log In
          </button>
        </Form>
      </Formik>
    </div>
  );
}
