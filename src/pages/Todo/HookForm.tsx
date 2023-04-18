// import ReactDOM from "react-dom";
// import { useForm, SubmitHandler } from "react-hook-form";

// enum GenderEnum {
//   female = "female",
//   male = "male",
//   other = "other"
// }

// interface IFormInput {
//   firstName: String;
//   gender: GenderEnum;
// }

// export default function Edit() {
//   const { register, handleSubmit } = useForm<IFormInput>();
//   const onSubmit: SubmitHandler<IFormInput> = data => console.log(data);

//   return (
//     <form onSubmit={handleSubmit(onSubmit)}>
//       <label>First Name</label>
//       <input {...register("firstName")} />
//       <label>Gender</label>
//       <select {...register("gender")} >
//         <option value="female">female</option>
//         <option value="male">male</option>
//         <option value="other">LGBT</option>
//       </select>
//       <input type="submit" />
//     </form>
//   );
// }

// đầu tiên khi sử dụng react hook form ta cần phải khai báo interface của nó trước 
// có thể áp một số interface như là gender: giới tính IFORMInput
// khai báo useForm sử dụng tương tự như useState và truyền interface IFORMINPUT const { register, handleSubmit } = useForm<IFormInput>();
// khai báo kiểu cho OnSubMit :SubmitHandler<IFORMInput> = data => console.log(data

import { useForm, SubmitHandler } from "react-hook-form";


interface IFormInput {
  firstName: string;
  lastName: string;
  age: number;
}

export default function App() {
  const { register, handleSubmit } = useForm<IFormInput>();
  const onSubmit: SubmitHandler<IFormInput> = data => console.log(data);
   
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>First Name</label>
      <input {...register("firstName", { required: true, maxLength: 20 })} />
      <label>Last Name</label>
      <input {...register("lastName", { pattern: /^[A-Za-z]+$/i })} />
      <label>Age</label>
      <input type="number" {...register("age", { min: 18, max: 99 })} />
      <input type="submit" />
    </form>
  );
}