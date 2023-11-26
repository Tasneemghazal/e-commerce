import React from "react";
import Input from "../../pages/Input";
import { useFormik, Formik } from "formik";
import { toast } from "react-toastify";
import { loginSchema } from "../validation/validate.js";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Login() {
    const navigate = useNavigate();
  const initialValues = {
    email: "",
    password: "",
  };
const onSubmit = async (users) => {
    
    const { data } = await axios.post(
      "https://ecommerce-node4.vercel.app/auth/signin",
      users
    );
    console.log(data);
    if (data.message == "success") {
      localStorage.setItem("userToken",data.token);
      toast.success( "login successfully", {
        position:"top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        });
        navigate('/home');
  };
}
  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema: loginSchema,
    validateOnBlur: true,
    validateOnChange: false,
  });

  const inputs = [
  
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
        <h2 className=" text-center">Login</h2>
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
              value="Login"
            />
          </div>
        </form>
      </div>
    </>
  );
}


