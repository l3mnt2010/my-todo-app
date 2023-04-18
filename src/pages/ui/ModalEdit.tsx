import React, { useState } from 'react';


interface ModalEditProps {
  onConfirm: () => void;
  onCancel: () => void;
  children?:JSX.Element[] | JSX.Element;
}

const ModalEdit: React.FC<ModalEditProps> = (props) => {
  const handleDelete = () => {
    props.onConfirm();
  };

  const handleCancel = () => {
    props.onCancel();
  };

  return (
    <div className='border-2 border-sky-500 ml-8 p-14 w-full'>

    {props.children}
     <div className='flex'>
      <button onClick={handleCancel} className='w-36 h-10 bg-gray-600 text-white  hover:bg-blue-400 cursor-pointer mr-16'>Cancel</button>
      <button onClick={handleDelete} className='w-36 h-10 bg-red-600 text-white hover:bg-red-400 cursor-pointer '>Delete</button>
      </div>
    </div>
  );
};
 export default ModalEdit;