import { Dialog } from '@headlessui/react';
import { useEffect, useRef, useState } from 'react';
import MiniBtn from '../buttons/mini-btn';
import TableRow from './table-row';

export default function MyModal({
  isOpen,
  setIsOpen,
  name,
  handleComplete,
  multiple = true,
}) {
  const [files, setFiles] = useState([]);

  let completeButtonRef = useRef(null);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  function removeFile(id) {
    let newFile = files.slice();
    newFile.splice(id, 1);
    setFiles(newFile);
  }

  useEffect(() => {
    return () => {};
  }, []);

  return (
    <>
      <Dialog
        open={isOpen}
        as="div"
        className="fixed inset-0 z-10 overflow-y-auto"
        onClose={closeModal}
      >
        <div className="min-h-screen px-4 text-center">
          <Dialog.Overlay className="fixed inset-0 bg-black opacity-30" />
          {/* This element is to trick the browser into centering the modal contents. */}
          <span
            className="inline-block h-screen align-middle"
            aria-hidden="true"
          >
            &#8203;
          </span>

          <div className="inline-block w-full max-w-md my-8 overflow-hidden text-left align-middle transition-all transform bg-gray-100 shadow-xl rounded-2xl">
            <Dialog.Title
              as="h3"
              className="text-lg font-medium leading-6 text-gray-900 bg-white py-6 px-8"
            >
              New Upload
            </Dialog.Title>

            {files.length > 0 ? (
              <div className="px-8 pt-6">
                <div className="space-y-4 divide-y">
                  {files.map((file, id) => (
                    <TableRow
                      file={file}
                      removeFile={removeFile}
                      key={id}
                      id={id}
                    />
                  ))}
                </div>

                <div className="mt-8 pt-4 border-t border-gray-200 grid grid-cols-2 gap-4">
                  <label
                    htmlFor={`${name}-file-upload`}
                    className="border-2 border-gray-400 text-gray-400 text-lg text-center rounded px-4 py-1 cursor-pointer"
                  >
                    Open browser
                  </label>
                  <MiniBtn
                    placeholder="Save"
                    width="w-full"
                    onClick={() => handleComplete(files)}
                  />
                </div>
              </div>
            ) : (
              <div className="m-8 border border-dashed border-gray-400 flex rounded-lg">
                <label
                  htmlFor={`${name}-file-upload`}
                  className="text-sm text-gray-400 p-24 text-center flex items-center justify-center w-full h-24 cursor-pointer"
                >
                  Click to browse
                  <br />
                  or drag and drop your files
                </label>
              </div>
            )}
            <input
              id={`${name}-file-upload`}
              type="file"
              name={name}
              onChange={(e) => setFiles([...files, e.target.files])}
              multiple={multiple}
              className="hidden"
            />
            <button ref={completeButtonRef} />
          </div>
        </div>
      </Dialog>
    </>
  );
}
