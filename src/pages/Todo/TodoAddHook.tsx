import { Link } from "react-router-dom";
import { useForm, SubmitHandler } from "react-hook-form";
import { ErrorMessage } from '@hookform/error-message';
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";
import "react-toastify/dist/ReactToastify.css";
const API = "https://5cebbeb877d47900143b8ddc.mockapi.io/api/review";

interface IFormInputs {
  createDate: string;
  nameCamp: string;
  currentReview: string;
  beginReview: number;
  targetReview: number;
  status: string;
  campType: string;
  content: string;
  linkChiendich: string;
  currentLike: number;
  singleErrorInput: string;
}

 function TodoAddHook() {
  
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
    toast.success("🦄 Add Success ! Click Exit to Home ^^ ", {
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
  const { register, formState: { errors } ,handleSubmit } = useForm<IFormInputs>();
  const onSubmit: SubmitHandler<IFormInputs> = async (data) => {console.log(data);
   await axios
      .post(API, data)
      .then((response) => {
        showToastMessageSuccess()
      })
      .catch(e=>{showToastMessageFail()})
  }
  
  

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col py-16 mx-96">
       <h1 className="mb-4 text-2xl font-bold text-orange-600">Bạn đang thêm mới Reviewer</h1>
      <label className="block mb-2 text-sm font-medium text-gray-900 ">createDate</label>
      <input className=" bg-gray-50 border border-gray-300 text-gray-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-500 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="mời nhập ngày tạo" type="datetime-local" {...register("createDate", { required: true, minLength:5, maxLength: 20 })} />
      <ErrorMessage
        errors={errors}
        name="createDate"
        render={({ message }) => <p className="text-red-500">Vui lòng nhập thông tin Date</p>} />

      <label  className="block mb-2 text-sm font-medium text-gray-900">nameCamp</label>
      <input className=" bg-gray-50 border border-gray-300 text-gray-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-500 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="mời nhập nơi truy cập" type="text" {...register("nameCamp", { required: true, maxLength: 30, minLength:7 }  )} />
      <ErrorMessage
        errors={errors}
        name="nameCamp"
        render={({ message }) => <p className="text-red-500">Vui lòng nhập lại yêu cầu độ dài lớn hơn 7 và tối đa la 30 </p>} />
      <label  className="block mb-2 text-sm font-medium text-gray-900 "> currentReview</label>
      <input className=" bg-gray-50 border border-gray-300 text-gray-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-500 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="mời nhập số người ghé thăm" type="number" {...register("currentReview", { min: 18, max: 99 })} />
      <ErrorMessage
        errors={errors}
        name="currentReview"
        render={({ message }) => <p className="text-red-500">Vui lòng nhập lại tuổi yêu cầu lớn hơn 18 </p>} />
      <label  className="block mb-2 text-sm font-medium text-gray-900">beginReview</label>
      <input className=" bg-gray-50 border border-gray-300 text-gray-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-500 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="mời nhập số người quay lại" type="number" {...register("beginReview", { min: 0 , max: 1000000000000 })} />
      <ErrorMessage
        errors={errors}
        name="beginReview"
        render={({ message }) => <p className="text-red-500">Vui lòng nhập lại số yêu cầu lớn hơn 5 </p>} />
      <label  className="block mb-2 text-sm font-medium text-gray-900">targetReview</label>
      <input className=" bg-gray-50 border border-gray-300 text-gray-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-500 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="mời nhập số điểm đánh giá" type="number" {...register("targetReview", { min: 0 , max: 100 })} />
      <ErrorMessage
        errors={errors}
        name="targetReview"
        render={({ message }) => <p className="text-red-500">Vui lòng nhập lại số điểm từ 0 đến 100 </p>} />
      <label className="block mb-2 text-sm font-medium text-gray-900">status</label>
      <input className=" bg-gray-50 border border-gray-300 text-gray-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-500 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="mời nhập trạng thái" {...register("status", { required: true, minLength:2, maxLength: 20 })} />
      <ErrorMessage
        errors={errors}
        name="status"
        render={({ message }) => <p className="text-red-500">Vui lòng nhập cảm xúc tối thiểu 2 và tối đa 20 kí tự </p>} />
      <label className="block mb-2 text-sm font-medium text-gray-900">campType</label>
      <input className=" bg-gray-50 border border-gray-300 text-gray-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-500 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="mời nhập vị trí " {...register("campType", { required: true, minLength: 1, maxLength: 20 })} />
      <ErrorMessage
        errors={errors}
        name="campType"
        render={({ message }) => <p className="text-red-500">Vui lòng nhập lại yêu cầu độ dài lớn hơn 1 và nhỏ hơn 20 </p>} />
      <label className="block mb-2 text-sm font-medium text-gray-900">content</label>
      <input className=" bg-gray-50 border border-gray-300 text-gray-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-500 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="mời nhập content" {...register("content", { required: true, minLength: 1, maxLength: 20 })} />
      <ErrorMessage
        errors={errors}
        name="content"
        render={({ message }) => <p className="text-red-500">Vui lòng nhập lại yêu cầu độ dài lớn hơn 5 </p>} />
      <label className="block mb-2 text-sm font-medium text-gray-900">linkChiendich</label>
      <input className=" bg-gray-50 border border-gray-300 text-gray-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-500 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="mời nhập link truy cập" type="url" {...register("linkChiendich", { required: true, minLength:1, maxLength: 100 })} />
      <ErrorMessage
        errors={errors}
        name="linkChiendich"
        render={({ message }) => <p className="text-red-500">Vui lòng nhập lại yêu cầu độ dài từ 1 đến 100 </p>} />
      <label className="block mb-2 text-sm font-medium text-gray-900">currentLike</label>
      <input className=" bg-gray-50 border border-gray-300 text-gray-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-500 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="mời nhập số like" type="number" {...register("currentLike", { min: 0, max: 100000000 })} />
      <ErrorMessage
        errors={errors}
        name="currentLike"
        render={({ message }) => <p className="text-red-500">Vui lòng nhập số like </p>} />
      <div className="flex">
      <input type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-1 mt-8 ml-10 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" />
      <Link to = "/" className="mt-8 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-red-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 ml-48">Exit</Link>
      </div>
      <ToastContainer/>

    </form>
  );

}
export default TodoAddHook;