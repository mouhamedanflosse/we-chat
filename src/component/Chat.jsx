import Message from "./Message";
import { useRef } from "react";
import { db, Auth } from "../config/firebase";
import { collection, query, orderBy, onSnapshot } from "firebase/firestore";
import { useEffect } from "react";
import { useState } from "react";
import SendMesage from "./SendMesage";
// import { getMessages } from "../features/MessagesSlice";
// import { useDispatch,useSelector } from "react-redux";
const Chat = () => {
  const scroll = useRef();
  // const {messages} = useSelector(state => state.messages)
  const [messages, setMessages] = useState([]);
  const MessageCollectinRef = collection(db, "Messages");
  // const getMessages = async () => {
  //   try {
  //     const data = await getDocs(MessageCollectinRef);
  //     const Messagesarray = data.docs.map((doc) => ({
  //       ...doc.data(),
  //       id: doc.id,
  //     }));
  //     setMessages(Messagesarray);
  //     console.log(data);
  //     console.log(Messagesarray);
  //   } catch (err) {
  //     console.error(err);
  //   }
  // };
  //  const GetMsg = () => {
  //   useDispatch(getMessages)
  // }

  useEffect(() => {
    // GetMsg()
    const Q = query(MessageCollectinRef, orderBy("timestamp"));
    const getMessages = onSnapshot(Q, (querySnapshot) => {
      let messages = [];
      querySnapshot.forEach((doc) => {
        messages.push({ ...doc.data(), id: doc.id });
      });
      setMessages(messages);
    });
    return () => getMessages();
    // getMessages()
  }, []);
  return (
    <div className="w-full overflow-auto h-[350px]">
      <main className="w-full mt-14 ">
        {messages.map((Msg) => (
          <Message key={Msg.id} Msg={Msg} />
        ))}
      </main>
      <span ref={scroll}></span>
      <SendMesage scroll={scroll} />
    </div>
  );
};

export default Chat;
