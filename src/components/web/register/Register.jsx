import React from "react";
import Input from "../../pages/Input";
import { useFormik, Formik } from "formik";
import {validationSchema} from '../validation/validate.js'
export default function Register() {
  const initialValues = {
    userName: "",
    email: "",
    password: "",
  };
  const onSubmit = (values) => {
    console.log(values);
  };

  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema:validationSchema,
    validateOnBlur: true,
    validateOnChange: false,
  });

  const inputs = [
    {
      id: "username",
      type: "text",
      name: "userName",
      title: "User Name",
      value: formik.values.userName,
    },
    {
      id: "email",
      type: "email",
      name: "email",
      title: "User Email",
      value: formik.values.email,
    },
    {
      id: "password",
      type: "password",
      name: "password",
      title: "User Password",
      value: formik.values.password,
    },
  ];
  const renderInputs = inputs.map((input, index) => (
    <Input
      type={input.type}
      name={input.name}
      id={input.id}
      title={input.title}
      value={input.value}
      key={index}
      errors={formik.errors}
      onChange={formik.handleChange}
      onBlur={formik.handleBlur}
      touched={formik.touched}
    />
  ));
  return (
    <>
      <div className="container m-auto w-50">
        <h2 className=" text-center">Create Account</h2>
        <form onSubmit={formik.handleSubmit} className="p-4">
          {renderInputs}
          <div className="input-group my-4 d-block m-auto w-50 ">
            <input type="submit" className="submit text-white" />
          </div>
        </form>
      </div>
    </>
  );
}
