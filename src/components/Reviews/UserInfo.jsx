//import { useEffect, useState } from 'react'
const UserInfo = ({review}) => {

    return (
        <>
        <div className="Icon">
        <h1>{review["user_icon"]}</h1>
        </div>
        <div className="TopDown">
        <h1>{review["user_name"]}</h1>
        <h1>{review["user_product"]} products in account</h1>
        <h1>{review["times_reviewed"]} reviews</h1>
        </div>
        </>
    );
  };
  
  export default UserInfo;
  