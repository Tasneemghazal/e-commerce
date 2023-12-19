import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useFormik } from "formik";
import Input from "../../pages/Input";
import axios from "axios";
import { toast } from "react-toastify";

export default function Review() {
  const { id } = useParams();
  let navigate = useNavigate();
  let token = localStorage.getItem("userToken");
  const initialValues = {
    comment: "",
    rating: "",
  };

  const onSubmit = async (comment) => {
    try {
      const { data } = await axios.post(
        `https://ecommerce-node4.vercel.app/products/${id}/review`,
        comment,
        { headers: { Authorization: `Tariq__${token}` } }
      );
      console.log(data);

      if (data.message == "success") {
        toast.success("your comment is puplished successfully", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
        navigate(`/products/${id}`);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const formik = useFormik({
    initialValues,
    onSubmit,
    validateOnBlur: true,
    validateOnChange: false,
  });
  const inputs = [
    {
      id: "comment",
      type: "text",
      name: "comment",
      title: "Comment",
      value: formik.values.comment,
    },
    {
      id: "rating",
      type: "number",
      name: "rating",
      title: "Rating",
      value: formik.values.rating,
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
        <h2 className=" text-center">Send Review</h2>
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
              value="Post Review"
            />
          </div>
        </form>
      </div>
    </>
  );
}
