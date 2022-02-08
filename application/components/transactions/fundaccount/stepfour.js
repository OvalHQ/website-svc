import { useState } from 'react';
import TableRow from '../../upload-modal/table-row';
import MiniBtn from '../../buttons/mini-btn';
import PrimaryBtn from '../../buttons/primary-btn';
import SecondaryBtn from '../../buttons/secondary-btn';

export default function StepFour(props) {
  const [files, setFiles] = useState([]);
  const [activeTab, setActiveTab] = useState('new')
  const { toggleModal, updateStep } = props;

  function removeFile(id) {
    let newFile = files.slice();
    newFile.splice(id, 1);
    setFiles(newFile);
  }

  return (
    <div className="bg-white">
      <h5 className="text-grey-title text-xl font-medium">Fund Wallet</h5>
      <p className="leading-7 mb-5 text-sm text-grey-title">Upload proof of your payment</p>
      <div className="bg-gray-50 p-2 rounded-2xl">
        <div className="h-16 rounded-t-2xl w-full bg-white flex items-center justify-center">
          <div className="px-1 bg-gray-100 w-1/2 h-10 rounded-3xl shadow-sm flex items-center">
            <button
              onClick={() => setActiveTab('new')}
              className={`transition duration-500 w-1/2 text-center text-sm h-9 rounded-3xl
              ${activeTab === "new" ? "bg-gray-400 text-white" : "bg-transparent text-gray-600"}
            `}
            >
              New Upload
            </button>
            <button
              onClick={() => setActiveTab('recent')}
              className={`transition duration-500 w-1/2 text-center text-sm h-9 rounded-3xl
              ${activeTab === "recent" ? "bg-gray-400 text-white" : "bg-transparent text-gray-600"}
            `}
            >
              Recents
            </button>
          </div>
        </div>
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
              <MiniBtn placeholder="Save" width="w-full" onClick={toggleModal} />
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
          multiple={true}
          className="hidden"
        />
      </div>
      <div className="flex space-between items-center gap-x-4 w-full my-4">
        <SecondaryBtn
          placeholder="Cancel"
          style={{ width: '50%' }}
          onClick={() => toggleModal()}
        />
        <PrimaryBtn
          placeholder="Confirm"
          style={{ width: '50%', height: '2.5rem' }}
          onClick={() => updateStep(2)}
        />
      </div>
    </div>
  );
}