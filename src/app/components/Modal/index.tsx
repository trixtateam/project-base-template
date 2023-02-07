import React, { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
// import { XMarkIcon } from "@heroicons/react/24/outline";

const Modal = (props: {
  children?: React.ReactNode;
  title: string | React.ReactNode;
  description?: string | React.ReactNode;
  isOpen?: boolean;
  setModalOpen?: Function;
  onClose?: Function;
  modalWidth?: string;
}) => {
  const {
    children,
    title,
    description,
    isOpen,
    setModalOpen,
    onClose,
    modalWidth = "max-w-md"
  } = props;

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-100"
        onClose={() => {
          if (setModalOpen) setModalOpen(false);
          onClose && onClose();
        }}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-30" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel
                className={`relative w-full transform rounded-2xl p-6 text-left align-middle shadow-2xl transition-all bg-white ${modalWidth}`}
              >
                {setModalOpen && (
                  <button
                    type="button"
                    className="absolute top-1 right-1 cursor-pointer rounded-full p-1 outline-0 text-gray-900 hover:bg-gray-100"
                    onClick={() => {
                      if (setModalOpen) setModalOpen(false);
                      // onClose();
                    }}
                  >
                    Close
                    {/* <XMarkIcon className="block h-6 w-6" aria-hidden="true" /> */}
                  </button>
                )}
                <Dialog.Title
                  as="h3"
                  className="text-2xl font-medium mb-5 leading-6 text-gray-900"
                >
                  {title}
                </Dialog.Title>
                {description && (
                  <Dialog.Description className="mb-4">
                    <span className="block font-normal text-md text-gray-500">
                      {description}
                    </span>
                  </Dialog.Description>
                )}
                <div className="mt-2">{children}</div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default Modal;
