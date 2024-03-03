import { Form, Formik } from "formik";
import * as Yup from "yup";
import InputFeild from "./InputFeild";

const SignUpSchema = Yup.object({
  firstName: Yup.string().required("First Name cannot be empty"),
  lastName: Yup.string().required("Last Name cannot be empty"),
  email: Yup.string()
    .matches(/[a-z0-9]+@[a-z]+\.[a-z]{2,3}/, "Looks like this is not an email")
    .required("Email cannot be empty"),
  password: Yup.string()
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
      "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
    )
    .required("Password cannot be empty"),
});
const SignUpForm = () => {
  return (
    <Formik
      initialValues={{
        firstName: "",
        lastName: "",
        email: "",
        password: "",
      }}
      validationSchema={SignUpSchema}
      validateOnMount={true}
    >
      {({ isValid }) => (
        <Form className="bg-white rounded-lg px-8 pt-8 pb-5 flex flex-col gap-2">
          <InputFeild type="text" name="firstName" placeholder="First Name" />
          <InputFeild type="text" name="lastName" placeholder="Last Name" />
          <InputFeild type="email" name="email" placeholder="Email" />
          <InputFeild type="password" name="password" placeholder="Password" />
          <button
            type="submit"
            disabled={!isValid}
            className="bg-green text-white p-5 rounded-lg hover:opacity-50 transition"
          >
            CLAIM YOUR FREE TRIAL
          </button>
          <p className="text-grayishBlue text-center">
            By clicking the button, you are agreeing to our{" "}
            <a href="#" className="text-red">
              Terms and Services
            </a>
          </p>
        </Form>
      )}
    </Formik>
  );
};

export default SignUpForm;
