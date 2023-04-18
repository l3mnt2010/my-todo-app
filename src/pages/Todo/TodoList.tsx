import React, { useState, useEffect, EventHandler, ChangeEvent } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import DeleteConfirmationDialog from "../ui/ModalConfirm";
import Deletes from "../ui/SetObj";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ErrorMessage } from '@hookform/error-message';
import { useForm, SubmitHandler } from "react-hook-form";
import { redirect } from "react-router-dom";
import ModalEdit from "../ui/ModalEdit";

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
}


interface Info {
  name?: string,
  brand?: string,
  category?: string,
  subCategory?: string
}
interface Datas {
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
};
 interface Toast {
  onSucess?: () => void;
  onNo?: () => void;
 }

const titles = [
  "id",
  "createDate",
  "nameCamp",
  "currentReview",
  "beginReview",
  "targetReview",
  "status",
  "campType",
  "content",
  "linkChiendich",
  "currentLike",
];

const TodoList: React.FC<Toast> = (props) => {
  
  const [id, setId] = useState("");
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
    toast.error("🦄 Gặp lỗi trong khi thực thi !", {
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

  const [isEdit, setIsEdit] =useState(false);


  const showToastMessageSuccess = () => {
    toast.success("🦄 Thành công !", {
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
  const [datas, setDatas] = useState([]  || null);
  const [user, setUser] = useState(0);

  const [sameuser, setsameUser] = useState(0);
 
  // trạng thái liên quan đến ModalConfirm

  const [isDeleting, setIsDeleting] = useState(false);
 
// dùng để get API và truyền API trở thành data
  console.log(sameuser);
  useEffect(() => {
    axios
      .get(`https://5cebbeb877d47900143b8ddc.mockapi.io/api/review`)
      .then((response) => {
        setDatas(response.data);
  });
  }, []);

    // truyền vào id khi click và để xóa REVIEWER có id truyền vào set datas là giá trị mới khi fillter ID

  const handleDelete = async (id: number) => {
    await axios
      .delete(`https://5cebbeb877d47900143b8ddc.mockapi.io/api/review/${id}`)
      .then((response) => {
        const newData = datas.filter((item) => item["id"] !== id);
        setDatas(newData);
        showToastMessageSuccess();
        setIsDeleting(false);
      })
      .catch(e => {
        showToastMessageFail();
      });

  };


// hàm này dùng để lấy API tương ứng theo id

  const handlePut = async (id: number) => {
   await axios
      .get(`https://5cebbeb877d47900143b8ddc.mockapi.io/api/review/${id}`)
      .then((res) => {
        const data = res.data;
        console.log(data.status);
        setId(data.id);
        setcreateDate(data.createDate);
        setnameCamp(data.nameCamp);
        setbeginReview(data.beginReview);
        setcurrentReview(data.currentReview);
        settargetReview(data.targetReview);
        setstatus(data.status);
        setcampType(data.campType);
        setcontent(data.content);
        setlinkChiendich(data.linkChiendich);
        setcurrentLike(data.currentLike);
    
      })
      .catch(e => {
        console.log(e);
      });
  }
   // setState cho việc render giao diện

  const handleCancel = () => {
    setIsDeleting(false);
  };
  const [objs, getobjs] = useState({})
  const handleEdit = async () => {
  
    await axios
      .put(`https://5cebbeb877d47900143b8ddc.mockapi.io/api/review/${sameuser}`, objs )
      .then((response) => {
        showToastMessageSuccess();
      })
      .catch((error) => {
        showToastMessageFail();
      });
  };
  

  const handleDetail=(item:any)=>{
    setIsEdit(true)
    // redirect(`del/${item.id}`)
    console.log(item.id);
  }


  const { register, formState: { errors }, handleSubmit } = useForm<IFormInputs>();
  const onSubmit: SubmitHandler<IFormInputs> = async (datass:object) => {console.log(datass);
    showToastMessageSuccess();
    getobjs(datass);

  }

  const handleChange = (event : React.ChangeEvent<HTMLInputElement>) => {
    setcreateDate(event.target.value);
  };
 const [Objs, setObj] = useState({})
const updateItem = (item:any)=>{
  console.log(item)
  setObj(item);
}
  return (
    <>
    <div className={!isEdit ? "": "hidden"}>
      {!isDeleting && ( 
        <>
         
          <Link
            to="/add"
            className=" text-white bg-blue-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 ml-48 cursor-pointer absolute top-8 right-80">Add</Link>
        {datas.length !==0 ? (
          <table className="font-serif text-sm ml-16 mt-20 w-5/6 max-h-screen text-center">
            <thead className="font-serif">
              <tr>
                {titles.map((items) => {
                  return <th className={!datas ? "hidden":"boder border-slate-950 px-3"}>{items}</th>;
                })}
                <th className="boder border-slate-950 px-3">Option</th>
                <th className="boder border-slate-950 px-3">Option</th>
              </tr>
            </thead>
            <tbody>
              {datas.map((item) => (
                <>
                <ModalEdit 
                onConfirm={() => {
                  handleDetail(item)
                }}
                onCancel={handleCancel}
                children={<>HELLO</>}/>
                <tr key={item["id"]}>
                  
                  <td className="border border-gray-400 rounded-lg">
                    {item["id"]}
                  </td>
                  <td className="border border-gray-400 rounded-lg">
                    {item["createDate"]}
                  </td>
                  <td className="border border-gray-400 rounded-lg">
                    {item["nameCamp"]}
                  </td>
                  <td className="border border-gray-400 rounded-lg">
                    {item["currentReview"]}
                  </td>
                  <td className="border border-gray-400 rounded-lg">
                    {item["beginReview"]}
                  </td>
                  <td className="border border-gray-400 rounded-lg">
                    {item["targetReview"]}
                  </td>
                  <td className="border border-gray-400 rounded-lg">
                    {item["status"]}
                  </td>
                  <td className="border border-gray-400 rounded-lg">
                    {item["campType"]}
                  </td>
                  <td className="border border-gray-400 rounded-lg">
                    {item["content"]}
                  </td>
                  <td className="border border-gray-400 rounded-lg">
                    {item["linkChiendich"]}
                  </td>
                  <td className="border border-gray-400 rounded-lg">
                    {item["currentLike"]}
                  </td>
                  <td className="pl-3">
                    <button
                      className="bg-red-600 w-16 h-6 text-white"
                      onClick={() => {
                        setUser(item["id"]);
                        setIsDeleting(true);
                      }}
                    >
                      Delete
                    </button>
                  </td>
                  <td className={"pl-3"}>
                  <button
                      className="bg-blue-400  w-16 h-6 text-white"
                      // onClick={ async () => {
                      //  await setsameUser(item['id']);
                      //  await handlePut(item['id']);
                      //  await setIsEdit(true);
                      //  await updateItem(item)
                      // }}
                      onClick={()=>{handleDetail(item)}}
                      >Edit</button>

                  </td>
                 
                </tr>
                </>
               
              ))}
            </tbody>
          </table>
          )  :  ( <h1 className="ml-80 mt-4 p-80 text-5xl text-cyan-300 font-bold">Loading...🦄🦄🦄🦄🦄</h1> )}
        </>
       )}
      {isDeleting && (
        <div className="w-96 h-1/2 absolute top-1/3 left-1/3">
          <DeleteConfirmationDialog
          />
        </div>
      )}
    </div>
    <>
    <div className={isEdit ? "": "hidden"}>
      
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col py-20 mx-96">
      <h1 className="mb-4 text-2xl font-bold text-orange-600">Bạn đang thao tác với Reviewer có id là: {id}</h1>
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
      <input type="submit" onSubmit={ async ()=>{await handleEdit()}} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-1 mt-8 ml-10 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" />
      <button onClick={()=>{setIsEdit(false)}} className="mt-8 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-red-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 ml-48 cursor-pointer">Exit</button>
      
      </div>
     

    </form>


    </div>

   
    </>
    <ToastContainer/>
   
    </>
  );
};
export default TodoList;

