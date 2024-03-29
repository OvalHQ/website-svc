import { Pane, Spinner, toaster } from "evergreen-ui";
import Image from "next/image";
import React, { useState } from "react";
import * as yup from "yup";
import { useFormik } from "formik";
import { ValidationMessages } from "@/utils/constants";
import { AirtableAPI } from "@/service/airtable/api";
import { useRouter } from "next/navigation";

const SimplifyOperations = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const validationSchema = yup.object().shape({
    email: yup
      .string()
      .email(ValidationMessages.email)
      .required(ValidationMessages.required),
  });

  const handleSendGetStarted = async (values: any) => {
    setIsLoading(true);
    try {
      // const payload = {
      //   fields: {
      //     fldiaL2CCd0Z39TeV: values.email,
      //   },
      // };
      // const response = await AirtableAPI.createGetStartedRecord(payload);
      // toaster.success("Success!");
      router.push(`/contact?&email=${values.email}`);
      resetForm();
    } catch (e) {
      toaster.danger("Error: Please try again!");
    } finally {
      setIsLoading(false);
    }
  };

  const {
    values,
    errors,
    touched,
    handleChange,
    handleBlur,
    handleSubmit,
    resetForm,
  } = useFormik({
    validationSchema: validationSchema,
    enableReinitialize: true,
    initialValues: {
      email: "",
    },
    onSubmit: handleSendGetStarted,
  });

  return (
    <Pane className="simplify-operations text-black overflow-hidden">
      <div className="relative md:h-[500px] md:p-[50px] md:py-[110px] py-12 rounded-2xl bg-[#C0D7FF] flex justify-center items-center w-full  ">
        <Pane zIndex={5}>
          <h2 className=" text-[34px] -tracking-[1px] leading-[40px] max-w-[400px] md:text-[65px] md:leading-[70px] font-semibold text-center text-black md:max-w-[700px]">
            Ready to simplify your financial operations?
          </h2>
          <p className="md:text-xl text-sm text-center font-medium my-2.5">
            Open an account today.
          </p>
          <div className=" mx-auto max-w-[550px] md:my-[50px] mt-8 mb-0 md:bg-white rounded-2xl md:flex md:justify-between md:items-center  py-3 px-4 gap-y-0  gap-x-2 md:flex-row flex flex-col justify-center items-center ">
            <div className="w-full mb-4 md:mb-0 ">
              <input
                name="email"
                id="email"
                type="text"
                className="
                  w-full px-4 py-4 border-none flex-1 rounded-xl text-sm focus:outline-gray-10 md:placeholder:text-left placeholder:text-center placeholder:opacity-[0.25] placeholder:text-black
                "
                placeholder="Enter your work email"
                onChange={handleChange("email")}
                onBlur={handleBlur("email")}
                value={values.email}
              />
              {errors.email && (
                <div className="text-xs mt-2 tracking-wider text-center text-red-500">
                  {errors.email}
                </div>
              )}
            </div>
            <div className="w-full md:w-auto">
              <button
                className=" flex text-center items-center justify-center gap-4 cta-primary text-white h-[55px] md:h-[45px] w-full sm:w-[180px] rounded-xl text-sm font-normal py-[10px] px-[35px] bg-black"
                onClick={() => handleSubmit()}
              >
                {isLoading && <Spinner size={16} />}
                <span className="text-center">Get Started for free</span>
              </button>
            </div>
          </div>
        </Pane>
        <Pane className="h-[100%]" position="absolute" left={0} zIndex={1}>
          <Image
            style={{
              transform: "rotate(180deg)",
              opacity: 0.15,
              height: "100%",
            }}
            alt="background-layer"
            src={require("../../../public/images/general/pattern-bg-1.png")}
          />
        </Pane>
        <Pane position="absolute" right={0} zIndex={1}>
          <Image
            style={{
              opacity: 0.15,
              height: "100%",
            }}
            alt="background-layer"
            src={require("../../../public/images/general/pattern-bg-1.png")}
            className=" hidden md:block"
          />
        </Pane>
      </div>
    </Pane>
  );
};

export default SimplifyOperations;
