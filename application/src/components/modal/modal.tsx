import { CrossIcon } from "evergreen-ui";
import React from "react";

type TProps = {
  showModal: boolean;
  handleClose: () => void;
  children: React.ReactNode;
};

export default function Modal({ showModal, handleClose, children }: TProps) {
  return (
    <>
      {/* <button
        className="bg-pink-500 text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
        type="button"
        onClick={() => setShowModal(true)}
      >
        Open regular modal
      </button> */}
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto  my-6 mx-auto min-w-[350px] max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-2xl shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <button
                  className="p-1 ml-auto absolute right-4 top-4 hover:scale-110 border-0 text-black opacity-90  text-3xl leading-none font-semibold outline-none focus:outline-none"
                  onClick={() => handleClose()}
                >
                  <CrossIcon
                    className="text-black text-2xl"
                    color="black"
                    size={22}
                  />
                </button>
                {/* <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                  <h3 className="text-3xl font-semibold text-black">
                    Modal Title
                  </h3>
                </div> */}

                <div className="px-6 py-5">
                  <>{children}</>
                </div>
              </div>
            </div>
          </div>
          <div
            className="opacity-75 fixed inset-0 z-40 bg-black cursor-pointer"
            onClick={() => handleClose()}
          ></div>
        </>
      ) : null}
    </>
  );
}
