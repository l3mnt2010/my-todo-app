import React, { useState, Fragment} from 'react';


interface DeleteConfirmationDialogProps {
  
  children?:JSX.Element[] | JSX.Element;
}

const Deletes: React.FC<DeleteConfirmationDialogProps> = (props) => {
  console.log(props.children);
   const children = props.children;
   alert(children);

  return (
 <Fragment>
     <div>{children}</div>
 </Fragment>
  )
};
 export default Deletes;