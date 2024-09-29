import { Field, Form, Formik } from "formik";
import css from "./RegistrationForm.module.css";
import { useDispatch } from "react-redux";
import { register } from "../../redux/auth/operations";

export default function RegistrationForm() {
  const dispatch = useDispatch();
  const handleSubmit = (values, actions) => {
    console.log(values);
    dispatch(register(values));
    actions.resetForm();
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
            <Field type="text" name="name" />
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
