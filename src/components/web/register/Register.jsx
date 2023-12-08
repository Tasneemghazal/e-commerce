import React from "react";
import Input from "../../pages/Input";
import { useFormik, Formik } from "formik";
import { toast } from "react-toastify";
import { validationSchema } from "../validation/validate.js";
import axios from "axios";
export default function Register() {
  const initialValues = {
    userName: "",
    email: "",
    password: "",
    image: "",
  };
  const handleFieldChange = (event) => {
    formik.setFieldValue("image", event.target.files[0]);
  };
  const onSubmit = async (users) => {
    const formData = new FormData();
    formData.append("userName", users.userName);
    formData.append("email", users.email);
    formData.append("password", users.password);
    formData.append("image", users.image);

    const { data } = await axios.post(
      "https://ecommerce-node4.vercel.app/auth/signup",
      formData
    );
    if (data.message == "success") {
      formik.resetForm();
      toast.success( "Account created successfully, please verify your email", {
        position: "bottom-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        });
    }
  
  };

  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema: validationSchema,
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
    {
      id: "image",
      type: "file",
      name: "image",
      title: "User Image",
      onChange: handleFieldChange,
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
      onChange={input.onChange || formik.handleChange}
      onBlur={formik.handleBlur}
      touched={formik.touched}
    />
  ));
  return (
    <>
      <div className="container m-auto w-50">
        <h2 className=" text-center">Create Account</h2>
        <form
          onSubmit={formik.handleSubmit}
          className="p-4"
          encType="multipart/form-data"
        >
          {renderInputs}
          <div className="input-group my-4 d-block m-auto w-50 ">
            <input
              type="submit"
              className="submit text-white"
              disabled={!formik.isValid}
            />
          </div>
        </form>
      </div>
    </>
  );
}
