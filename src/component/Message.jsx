import { Auth } from "../config/firebase";
import { useEffect, useState } from "react";
const style = {
  sent: ` break-words hyphens-auto mt-3 max-w-[60%] text-white text-left w-fit bg-[#0a54f2c5] w-fit px-[10px] py-[4px] text-[18px] rounded-xl`,
  received: ` break-words hyphens-auto mt-3 w-fit max-w-[60%]  bg-[#eee] text-left  px-[10px] py-[4px] text-[18px] rounded-md after::content-[''] after:w-8 relative after:h-3 after:absolute after:bg-inherit after:rounded-br-full after:-skew-y-[20deg] z-10 after:-z-10 after:-right-[10px] after:top-0`,
};

const Message = ({ Msg }) => {
  useEffect(()=> {
    Msg.uid === Auth.currentUser?.uid
    ? setmessagereceived(false)
    : setmessagereceived(true)
  },[Auth.currentUser?.uid ])
  const [messagereceived,setmessagereceived] = useState()
  return (
    <div className={`flex flex-col space-y-4 mt-[25px]`}>
      <div className={ messagereceived ? "flex items-end justify-start flex-row-reverse" : "flex"}>
        <img className="mx-[10px] w-[40px] h-[40px] rounded-[50%]" src={Msg.userImage} alt="" />
        <p className={messagereceived ? style.received : style.sent}>{Msg.text}</p>
      </div>
    </div>
    );
};

export default Message;

