import { createSlice } from "@reduxjs/toolkit";
import { getDocs, collection } from "firebase/firestore";
import { db } from "../config/firebase";
const initialState = {
  messages: [],
};
const messageItems = createSlice({
  name: "message",
  initialState,
  reducers: {
    // -----------------------get movies action
    getMessages(state) {
      const MessageCollectinRef = collection(db, "Messages");
      const getMessages = async () => {
        try {
          const data = await getDocs(MessageCollectinRef);
          const Messagesarray = data.docs.map((doc) => ({
            ...doc.data(),
            id: doc.id,
          }));
          state.tasks = [...state.messages, {  ...Messagesarray }];
          console.log(data);
          console.log(Messagesarray);
        } catch (err) {
          console.error(err);
        }
      };
      getMessages()
    },
    // --------------------------------------------------

  },
});
export default messageItems.reducer
export const {getMessages} = messageItems.actions
