import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import emailjs from "emailjs-com";
import { SERVICE_ID, TEMPLATE_ID, USER_ID } from "public/constants";
export default function Contact({ current, headerData, setCurrentContent }) {
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    control,
    reset,
    formState: { errors },
  } = useForm({ mode: "onChange" });
  const [isSent, setIsSent] = useState(false);
  const [values, setValues] = useState({});
  function onSubmit(data) {
    setIsSent(true);
    emailjs
      .send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          to_name: "Anjani",
          from_name: data ? data.name : "",
          message: data ? data.message : "",
          reply_to: data ? data.email : "",
        },
        USER_ID
      )
      .then((res) => {
        console.log(res);
        setValue("email", "");
        setValue("name", "");
        setValue("message", "");
      })
      .catch((err) => {
        console.log(err);
      });
  }
  useEffect(() => {
    const subscription = watch((value) => {
      setValues({ ...values, ...value });
    });
    return () => subscription.unsubscribe();
  }, [watch, values]);
  return (
    <div className="w-full flex flex-col sm:flex-row py-10 fadeinout duration-100 justify-evenly px-2">
      <div className="w-full sm:w-2/5 flex flex-col mb-8">
        <div className="mb-4">
          <p className="text-white text-2xl sm:text-3xl font-kalam font-bold">
            Wanna drop something?{" "}
          </p>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="w-full my-4">
            <input
              type="email"
              name="email"
              placeholder="Please provide your email address."
              {...register("email", {
                required: "Please Enter your email address",
                minLength: {
                  value: 7,
                  message: "Email should contains 7 characters",
                },
                pattern: {
                  value: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
                  message: "Please enter a valid email",
                },
              })}
              className="w-full bg-black border-[1px] border-white rounded-lg text-white h-15 text-lg font-bold "
            ></input>
            {errors.email && (
              <p className="pt-2 text-red-700">{errors.email.message}</p>
            )}
          </div>
          <div className="w-full my-4">
            <input
              type="text"
              name="name"
              placeholder="May I know your given name, please?"
              {...register("name", {
                required: "Please Enter your Name",
                minLength: {
                  value: 4,
                  message: "Name should contains atleast 4 characters",
                },
                pattern: {
                  value: /^[a-zA-Z]+ [a-zA-Z]+$/,
                  message: "Please enter full name",
                },
              })}
              className="w-full bg-black border-[1px] border-white rounded-lg text-white h-15 text-lg font-bold "
            ></input>
            {errors.name && (
              <p className="pt-2 text-red-700">{errors.name.message}</p>
            )}
          </div>
          <div className="my-4">
            <textarea
              type="textarea"
              name="message"
              placeholder="Write me a message"
              {...register("message", {
                required: "Please Enter a message",
                minLength: {
                  value: 20,
                  message: "Message must be at least 20 characters",
                },
              })}
              className="w-full bg-black border-[1px] border-white rounded-lg text-white h-36 text-lg font-bold "
            ></textarea>
            {errors.message && (
              <p className="pt-2 text-red-500">{errors.message.message}</p>
            )}
          </div>

          <div className="w-full flex flex-row-reverse">
            <button
              type="submit"
              className="border-[1px] text-lg font-bold text-white border-spacing-4 border-white px-4 py-2 rounded-lg hover:text-2xl duration-150 "
              disabled={isSent}
            >
              {isSent ? (
                <p>
                  {" "}
                  Sent <i className="fa fa-check"></i>{" "}
                </p>
              ) : (
                <p>
                  {" "}
                  Send <i className="fa fa-send mx-2"></i>
                </p>
              )}
            </button>
          </div>
        </form>
      </div>
      <div className="w-full sm:w-2/5 flex flex-col">
        <div className="mb-4">
          <p className="text-white text-2xl  sm:text-3xl font-kalam font-bold">
            Or establish a connection with me through alternative platforms.
          </p>
        </div>
        <div className="flex flex-col pl-10">
          <div className="my-4 hover:underline">
            <a
              href="mailto:anjani1920@gmail.com"
              target="_blank"
              className="jello text-xl sm:text-2xl font-bold text-white hover:scale-110 duration-300"
            >
              {" "}
              <i className="fa fa-envelope mr-4 "></i>Anjani1920@gmail.com
            </a>
          </div>
          <div className="my-4 hover:underline">
            <a
              href="https://in.linkedin.com/in/anjani-saxena-b5971712b"
              target="_blank"
              className="jello text-xl sm:text-2xl font-bold text-white hover:scale-100 duration-300"
            >
              {" "}
              <i className="fa fa-linkedin mr-4"></i>Linkedin: Anjani Saxena
            </a>
          </div>
          <div className="my-4 hover:underline">
            <a
              href="https://www.facebook.com/anjani.saxena.5688"
              target="_blank"
              className="jello text-xl sm:text-2xl font-bold text-white hover:scale-110 duration-300"
            >
              {" "}
              <i className="fa fa-facebook-f mr-4"></i>Facebook: Anjani Saxena
            </a>
          </div>
          <div className="my-4 hover:underline ">
            <a
              href="https://www.instagram.com/saxena_anjani/"
              target="_blank"
              className="jello text-xl sm:text-2xl font-bold text-white hover:scale-110 duration-300"
            >
              {" "}
              <i className="fa fa-linkedin mr-4"></i>Instagram: Anjani Saxena
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
Contact.ReactPropTypes = {
  current: String,
  headerData: Array,
};
Contact.defaultProps = {
  current: "Home",
  headerData: [],
};
