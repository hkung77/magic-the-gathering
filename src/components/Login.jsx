import React from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import { Link } from "react-router-dom";

import Input from "./shared/Input";
import Button from "./shared/Button";
import Auth from "../utils/auth";

const Login = () => {
  const initialValues = {
    email: "",
    password: "",
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string().email().required(),
    password: Yup.string().required(),
  });

  const onSubmit = async (values, setSubmitting, submitType) => {
    const {email, password} = values;
    if (submitType === "login") {
      await Auth.login({email, password});
    } else {
      await Auth.signup({email, password});
    }
    setSubmitting(false);
  };

  const handleLoginPress = (values, setSubmitting) => {
    onSubmit(values, setSubmitting, 'login');
  }

  const handleSignUpPress = (values, setSubmitting) => {
    onSubmit(values, setSubmitting, 'signup');
  }

  return (
    <Formik
      initialValues={initialValues}
      initialErrors={["email", "password"]}
      validationSchema={validationSchema}
      handleSubmit={onSubmit}
    >
      {({ handleSubmit, isSubmitting, isValid, setSubmitting, values }) => (
        <form onSubmit={handleSubmit}>
          <div className="flex flex-1 flex-col bg-gray-500 h-screen justify-center items-center">
            <h1 className="text-center text-5xl pb-4 text-white font-sans font-bold">
              Sign In / Sign Up
            </h1>
            <div className="mb-2">
              <Input name="email" label="Email" type="text" />
            </div>
            <div className="mb-5">
              <Input name="password" label="Password" type="password" />
            </div>
            <div className="mb-4 space-x-4">
              <Button
                onClick={() => { handleSignUpPress(values, setSubmitting) }}
                bgColor="bg-blue-600"
                label="Sign Up"
                disabled={isSubmitting || !isValid}
              />
              <Button
                onClick={() => { handleLoginPress(values, setSubmitting) }}
                label="Login"
                disabled={isSubmitting || !isValid}
              />
            </div>
            <div className="text-white hover:underline">
              <Link to="/forgotPassword">Forgot Password</Link>
            </div>
          </div>
        </form>
      )}
    </Formik>
  );
};

export default Login;
