import SignIn from "./SignIn";
import SignOut from "./SignOut";
import { useAuthState } from "react-firebase-hooks/auth";
import { Auth } from "../config/firebase";

const Navbar = () => {
  const [user] = useAuthState(Auth);
  return (
    <div className="bg-black flex justify-between px-[10px] items-center w-full min-h-[50px] text-white">
      <header className="text-[25px] font-bold flex items-center">we chat
    {  user &&
      <img className="ml-4 w-[30px] shadow-lg border-[2px] rounded-[50%]  border-green-600 outline-offset-2" src={Auth.currentUser.photoURL} alt={user.displayName} />
      }
      </header>
      {user ? <SignOut /> : <SignIn />}
      {/* <button className="py-[5px] px-[20px] text-[20px] rounded-md bg-black hover:bg-bla">login in</button> */}
    </div>
  );
};

export default Navbar;
