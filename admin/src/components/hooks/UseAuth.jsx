import { useContext } from "react";
import authContext from "../../auth/AuthProvider";

const UseAuth =()=> {
  return useContext(authContext)
}

export default UseAuth

