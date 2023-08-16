import { Auth } from "../config/firebase";
import { signOut } from "firebase/auth";
import {TbLogout} from "react-icons/tb"


const Signout = () => {
    signOut(Auth)
};
const SignOut = () => {
  return (
    <div>
      <button 
      onClick={Signout}
      className="flex items-center bg-white border border-gray-300 rounded-lg shadow-md px-3 py-2 text-sm font-medium text-gray-800 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">
        <TbLogout className="text-[20px] mr-1 my-0"/>
      <span>Sign Out</span>
      </button>
    </div>
  );
};

export default SignOut;
