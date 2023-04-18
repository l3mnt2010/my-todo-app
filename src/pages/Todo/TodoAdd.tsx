import React, { useState } from "react";
import axios from "axios";
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const API = "https://5cebbeb877d47900143b8ddc.mockapi.io/api/review";



export const TodoAdd = () => {
  
  const [createDate, setcreateDate] = useState("");
  const [nameCamp, setnameCamp] = useState("");
  const [currentReview, setcurrentReview] = useState("");
  const [beginReview, setbeginReview] = useState("");
  const [targetReview, settargetReview] = useState("");
  const [status, setstatus] = useState("");
  const [campType, setcampType] = useState("");
  const [content, setcontent] = useState("");
  const [linkChiendich, setlinkChiendich] = useState("");
  const [currentLike, setcurrentLike] = useState("");
  
  const showToastMessageFail = () => {
    toast.success("🦄 Add Faile !", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };

  const showToastMessageSuccess = () => {
    toast.success("🦄 Add Success !", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    let send = {
      createDate: `${createDate}`,
      nameCamp: `${nameCamp}`,
      currentReview: `${currentReview}`,
      beginReview: `${beginReview}`,
      targetReview: `${targetReview}`,
      status: `${status}`,
      campType: `${campType}`,
      content: `${content}`,
      linkChiendich: `${linkChiendich}`,
      currentLike: `${currentLike}`,
    };

    axios
      .post(API, send)
      .then((response) => {
        showToastMessageSuccess()
      })
      .catch(e=>{showToastMessageFail()});
  };

  return (
    <form
      onSubmit={handleSubmit}
      className=" ml-20 border border-black w-4/5 bg-white mb-5 mt-14"
    >
    <div className="w-full h-full pl-20">

      <div className="flex flex-col">
        <label className="text-left">createDate:</label>
        <input
          type={"datetime-local"}
          name="createDate"
          value={createDate}
          onChange={(e) => setcreateDate(e.target.value)}
          className="w-4/6 bg-orange-50"
        />
      </div>

      <div className="flex flex-col">
        <label className="text-left">nameCamp:</label>
        <input
          type={"text"}
          name="nameCamp"
          value={nameCamp}
          onChange={(e) => setnameCamp(e.target.value)}
          className="w-4/6 bg-orange-50"
        />
      </div>

      <div className="flex flex-col">
        <label className="text-left">currentReview:</label>
        <input
          type={"text"}
          name="currentReview"
          value={currentReview}
          onChange={(e) => setcurrentReview(e.target.value)}
          className="w-4/6 bg-orange-50"
        />
      </div>

      <div className="flex flex-col">
        <label className="text-left">beginReview:</label>
        <input
          type={"text"}
          name="beginReview"
          value={beginReview}
          onChange={(e) => setbeginReview(e.target.value)}
          className="w-4/6 bg-orange-50"
        />
      </div>

      <div className="flex flex-col">
        <label className="text-left">targetReview:</label>
        <input
          type={"text"}
          name="targetReview"
          value={targetReview}
          onChange={(e) => settargetReview(e.target.value)}
          className="w-4/6 bg-orange-50"
        />
      </div>
      <div className="flex flex-col">
        <label className="text-left">status:</label>
        <input
          type={"text"}
          name="status"
          value={status}
          onChange={(e) => setstatus(e.target.value)}
          className="w-4/6 bg-orange-50"
        />
      </div>
      <div className="flex flex-col">
        <label className="text-left">campType:</label>
        <input
          type={"text"}
          name="campType"
          value={campType}
          onChange={(e) => setcampType(e.target.value)}
          className="w-4/6 bg-orange-50"
        />
      </div>

      <div className="flex flex-col">
        <label className="text-left">content:</label>
        <input
          type={"text"}
          name="content"
          value={content}
          onChange={(e) => setcontent(e.target.value)}
          className="w-4/6 bg-orange-50"
        />
      </div>

      <div className="flex flex-col">
        <label className="text-left">linkChiendich:</label>
        <input
          type={"text"}
          name="linkChiendich"
          value={linkChiendich}
          onChange={(e) => setlinkChiendich(e.target.value)}
          className="w-4/6 bg-orange-50"
        />
      </div>

      <div className="flex flex-col mb-3">
        <label className="text-left">CurrentLike:</label>
        <input
          type={"text"}
          name="currentLike"
          value={currentLike}
          onChange={(e) => setcurrentLike(e.target.value)}
          className="w-4/6 bg-orange-50"
        />
      </div>
      </div>
      <ToastContainer/>
      <Link to ='/' className="mr-12 py-2 px-8 bg-cyan-400 ml-24">Exit</Link>
      <button className="w-20 h-9 bg-green-400 mb-10 ml-20" type="submit">Submit</button>
    </form>
    
  );
};
export default TodoAdd;
