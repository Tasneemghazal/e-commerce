import React, { useContext } from "react";
import Input from "../../pages/Input";
import { useFormik, Formik } from "formik";
import { toast } from "react-toastify";
import { forgetPassword } from "../validation/validate.js";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../context/User.jsx";

export default function ForgetPassword() {
  let navigate = useNavigate();
  let { userToken, setUserToken } = useContext(UserContext);

  const initialValues = {
    email: "",
    password: "",
    code: "",
  };
  const onSubmit = async (users) => {
    const { data } = await axios.patch(
      "https://ecommerce-node4.vercel.app/auth/forgotPassword",
      users
    );
        console.log(data);
    if (data.message == "success") {
      localStorage.setItem("userToken", data.token);
      setUserToken(data.token);
      toast.success("password updated successfully", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
      navigate("/home");
    }
  };
  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema: forgetPassword,
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
    {
        id: "code",
        type: "text",
        name: "code",
        title: "Code",
        value: formik.values.code,
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
      <div className="container m-auto w-50 pt-5">
        <h2 className=" text-center">Forget Password</h2>
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
              value="Save Changes"
            />
          </div>
        </form>
      </div>
    </>
  );
}

