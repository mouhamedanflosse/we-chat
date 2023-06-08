import { GoogleProvider, Auth } from "../config/firebase";
import { signInWithRedirect } from "firebase/auth";
import {FcGoogle} from "react-icons/fc"


const Signin = () => {
  signInWithRedirect(Auth, GoogleProvider);
};
const SignIn = () => {
  return (
    <div>
      <button 
      onClick={Signin}
      className="flex items-center bg-white border border-gray-300 rounded-lg shadow-md px-6 py-2 text-sm font-medium text-gray-800 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">
        <FcGoogle className="text-[20px] mr-1 my-0"/>
      <span>Continue with Google</span>
      </button>
    </div>
  );
};

export default SignIn;
