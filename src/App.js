import "./App.css";
import Navbar from "./component/Navbar";
import Chat from "./component/Chat";
import { Auth } from "./config/firebase";
import {useAuthState} from "react-firebase-hooks/auth"
import SendMesage from "./component/SendMesage";

function App() {
  const [user] = useAuthState(Auth)
  return (
    <div className="App  flex items-center h-[100vh]">
      <div className="flex relative flex-col lg:w-[40%] md:w-[60%] sm:w-[400px] xs:w-[360px] w-[100%]  bg-white h-[80vh] mx-auto shadow-md rounded-md border border-t-0">
        <Navbar/>
        <Chat />
        {/* <SendMesage /> */}
      </div>
    </div>
   );
}

export default App;
