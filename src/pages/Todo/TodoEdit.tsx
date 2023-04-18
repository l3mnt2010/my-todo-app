import React, { useState} from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface ConfirmationDialogProps {
  nums : number;
}

const TodoEdit: React.FC<ConfirmationDialogProps> = (props) => {
 
console.log(props.nums);

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
    toast.success("🦄 Add completed !", {
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
    toast.success("🦄 Add failed !", {
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
  const handleEdit = async () => {
    await axios
      .put(`https://5cebbeb877d47900143b8ddc.mockapi.io/api/review/${props.nums}`, {
        
      })
      .then((response) => {
        showToastMessageSuccess();
      })
      .catch((error) => {
        showToastMessageFail();
      });
  };

  return (
    <div className=" ml-10 w-4/5 boder boder-solid border-slate-950 h-4/6 bg-slate-700 text-white">
      

      <div className="w-full ml-3 flex flex-col m-2">
        <label>createDate:</label>
        <input
          className="w-3/6 h-7 text-black"
          type={"text"}
          name="createDate"
          value={createDate}
          onChange={(e) => setcreateDate(e.target.value)}
        />
      </div>

      <div className="w-full ml-3 flex flex-col m-2">
        <label>nameCamp:</label>
        <input
          className="w-3/6 h-7 text-black"
          type={"text"}
          name="nameCamp"
          value={nameCamp}
          onChange={(e) => setnameCamp(e.target.value)}
        />
      </div>

      <div className="w-full ml-3 flex flex-col m-2">
        <label>currentReview:</label>
        <input
          className="w-3/6 h-7"
          type={"text"}
          name="currentReview"
          value={currentReview}
          onChange={(e) => setcurrentReview(e.target.value)}
        />
      </div>

      <div className="w-full ml-3 flex flex-col m-2">
        <label>beginReview:</label>
        <input
          className="w-3/6 h-7"
          type={"text"}
          name="beginReview"
          value={beginReview}
          onChange={(e) => setbeginReview(e.target.value)}
        />
      </div>

      <div className="w-full ml-3 flex flex-col m-2">
        <label>targetReview:</label>
        <input
          className="w-3/6 h-7"
          type={"text"}
          name="targetReview"
          value={targetReview}
          onChange={(e) => settargetReview(e.target.value)}
        />
      </div>
      <div className="w-full ml-3 flex flex-col m-2">
        <label>status:</label>
        <input
          className="w-3/6 h-7"
          type={"text"}
          name="status"
          value={status}
          onChange={(e) => setstatus(e.target.value)}
        />
      </div>
      <div className="w-full ml-3 flex flex-col m-2">
        <label>campType:</label>
        <input
          className="w-3/6 h-7"
          type={"text"}
          name="campType"
          value={campType}
          onChange={(e) => setcampType(e.target.value)}
        />
      </div>

      <div className="w-full ml-3 flex flex-col m-2">
        <label>content:</label>
        <input
          className="w-3/6 h-7"
          type={"text"}
          name="content"
          value={content}
          onChange={(e) => setcontent(e.target.value)}
        />
      </div>

      <div className="w-full ml-3 flex flex-col m-2">
        <label>linkChiendich:</label>
        <input
          className="w-3/6 h-7"
          type={"text"}
          name="linkChiendich"
          value={linkChiendich}
          onChange={(e) => setlinkChiendich(e.target.value)}
        />
      </div>

      <div className="w-full ml-3 flex flex-col m-2">
        <label>CurrentLike:</label>
        <input
          className="w-3/6 h-7"
          type={"text"}
          name="currentLike"
          value={currentLike}
          onChange={(e) => setcurrentLike(e.target.value)}
        />
      </div>

      <button
        type="submit"
        onClick={() => {handleEdit()}}
        className="ml-20 bg-white hover:bg-green-400 w-28 h-10 text-black"
      >
        Submit
      </button>
      <button className="w-28 h-10 m-10 bg-white hover:bg-cyan-200 text-black">
        <Link to="/">Exit</Link>
        <ToastContainer/>
      </button>
    </div>
  );
};
export default TodoEdit;
// createDate: `${createDate}`,
        // nameCamp: `${nameCamp}`,
        // currentReview: `${currentReview}`,
        // beginReview: `${beginReview}`,
        // targetReview: `${targetReview}`,
        // status: `${status}`,
        // campType: `${campType}`,
        // content: `${content}`,
        // linkChiendich: `${linkChiendich}`,
        // currentLike: `${currentLike}`,