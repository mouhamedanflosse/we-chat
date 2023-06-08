import { RiSendPlaneFill } from "react-icons/ri";
import { useState } from "react";
import { Auth,db } from "../config/firebase";
import { collection,addDoc,serverTimestamp } from "firebase/firestore";

const SendMesage = ({scroll}) => {
  const messagesCollectionRef = collection(db,"Messages")
  const [message,sendMessage] = useState("")
  const sendmessage = async (e) => {
    e.preventDefault()
     if  (message === "") return;
    const {uid,displayName} = Auth.currentUser
    try {
      await addDoc(messagesCollectionRef,{
        text : message,
        uid,
        name : displayName,
        timestamp : serverTimestamp(),
        userImage : Auth.currentUser.photoURL
      })
      sendMessage("")
      scroll.current.scrollIntoView({behavior : "smooth"})
    }
    catch (err) {
      console.error("maybe your not sign in or there's problem service")
    }
  }
  return (
    <form onSubmit={(e) => sendmessage(e)}>
      <div className="mt-[10px] flex absolute bottom-0 w-full gap-1 p-1 z-30">
        <input
          value={message}
          className="bg-black text-white grow p-[10px] outline-none border-2 border-[black]  rounded-md "
          type="text"
          placeholder="text"
          onChange={(e) => sendMessage(e.target.value)}
        />
        <button type="submit" className=" hover:bg-[#25d365c5] px-[10px] py-[10px] rounded-[50%] bg-[#25D366]">
          <RiSendPlaneFill className="text-[25px] -translate-x-[2px] translate-y-[2px]" />
        </button>
      </div>
    </form>
  );
};

export default SendMesage;
