import React, { useContext } from "react";
import Input from "../../pages/Input";
import { useFormik } from "formik";
import { toast } from "react-toastify";
import axios from "axios";
import {useNavigate } from "react-router-dom";
import { UserContext } from "../context/User.jsx";
import { loginSchema, sendCode } from "../validation/validate.js";
export default function SendCode() {
  let navigate = useNavigate();
  let { userToken, setUserToken } = useContext(UserContext);

  const initialValues = {
    email: "",
  };

  const onSubmit = async (email) => {
    try {
      const { data } = await axios.patch(
        "https://ecommerce-node4.vercel.app/auth/sendcode",
        email
      );
      console.log(data);

      if (data.message == "success") {
        toast.success("code send successfully, visit your email to get it", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
        navigate("/forgetpassword");
      }
    } catch (err) {
      console.log(err);
    }
  };

  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema:sendCode,
    validateOnBlur: true,
    validateOnChange: false,
  });

  return (
    <>
      <div className="container m-auto w-50 pt-5">
        <h2 className=" text-center">Send Code</h2>
        <form
          onSubmit={formik.handleSubmit}
          className="p-4"
          encType="multipart/form-data"
        >
          <Input
            type={"email"}
            name={"email"}
            id={"email"}
            title={"User Email"}
            value={formik.values.email}
            errors={formik.errors}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            touched={formik.touched}
          />
          <div className="input-group my-4 d-block m-auto w-50 ">
            <input
              type="submit"
              className="submit text-white"
              value="Get Code"
            />
          </div>
        </form>
      </div>
    </>
  );
}
