import {
  Button,
  Heading,
  Pane,
  Paragraph,
  TextInput,
  TextInputField,
} from "evergreen-ui";
import Image from "next/image";
import React from "react";

const SimplifyOperations = () => {
  return (
    <Pane className="simplify-operations">
      <div className="relative h-[500px] md:p-[50px] rounded-lg bg-[#C0D7FF] flex justify-center items-center w-full  ">
        <Pane zIndex={5}>
          <h1 className=" text-[34px]  leading-[40px] max-w-[400px] md:text-[3.5rem] md:leading-[70px] font-bold text-center text-black md:max-w-[700px]">
            Ready to simplify your financial operations?
          </h1>
          <Paragraph
            marginY={10}
            textAlign="center"
            fontSize="18px"
            color="black"
          >
            Open an account today.
          </Paragraph>
          <div className="my-[50px] md:bg-white rounded-xl  py-3 px-4 flex flex-col gap-y-4  gap-x-2 md:flex-row justify-center items-center ">
            <input className="h-[45px] px-4 py-4 border-none flex-1 rounded-xl text-sm focus:outline-gray-700 w-full text-black .placeholder-black " />
            <button className="cta-primary text-white h-[45px] w-full sm:w-[200px] rounded-xl text-sm font-normal py-[10px] px-[35px] bg-black ">
              Get Started for free
            </button>
          </div>
        </Pane>
        <Pane position="absolute" left={0} zIndex={1}>
          <Image
            style={{
              transform: "rotate(180deg)",
              opacity: 0.1,
            }}
            alt="background-layer"
            src={require("../../../public/images/general/pattern-bg-1.png")}
          />
        </Pane>
        <Pane position="absolute" right={0} zIndex={1}>
          <Image
            style={{
              opacity: 0.1,
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
