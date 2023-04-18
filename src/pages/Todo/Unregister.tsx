import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";

interface IFORMInputs {
  firstname: string;
  lastname?: string;
}
// khi sử dụng unregister chúng ta phải khai báo useForm có interface input
const Unregister = () => {
  const {
    register,
    formState: { isLoading, errors },
    setValue,
    watch,   // chúng ta có thể sử dụng watch để thay đổi trạng thái render
    handleSubmit,
    unregister,
  } = useForm<IFORMInputs>();
  const onSubmit = (data: IFORMInputs) => console.log(data);

  React.useEffect(() => {
    register("firstname");
  }, [register]);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("firstname")} />
      <input {...register("lastname")} />
      <button
        type="button"
        onClick={() => {
          unregister("lastname");
        }}
      >
        unregister
      </button>
      <input type="submit" />
    </form>
  );
};

export default Unregister;


// import * as React from "react";
// import * as ReactDOM from "react-dom";
// import { useForm } from "react-hook-form";

// import "./styles.css";

// type FormInputs = {
//   firstName: string;
//   lastName: string;
//   amount: string;
//   corndogAmount: number;
// };

// const App = () => {
//   const {
//     register,
//     handleSubmit,
//     setValue,
//     formState: { touchedFields }
//   } = useForm<FormInputs>({
//     defaultValues: {
//       firstName: "Bill",
//       lastName: "Luo",
//       amount: ""
//     }
//   });

//   const onSubmit = (data: FormInputs) => {
//     alert(JSON.stringify(data));
//   };

//   console.log("touched", touchedFields);

//   return (
//     <form onSubmit={handleSubmit(onSubmit)}>
//       <label>First Name</label>
//       <input type="text" {...register("firstName")} />
//       <label>Last Name</label>
//       <input type="text" {...register("lastName")} />
//       <label>Number of Corndog's</label>
//       <input type="number" {...register("amount", { min: 1, max: 99 })} />
//       <button
//         type="button"
//         onClick={() => {
//           setValue("amount", 100, { shouldDirty: true });
//         }}
//       >
//         change amount
//       </button>
//       <input type="submit" />
//     </form>
//   );
// };

// const rootElement = document.getElementById("root");
// ReactDOM.render(<App />, rootElement);