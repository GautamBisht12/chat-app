import { useEffect, useState } from "react";
import axios from "axios";
import useConversation from "../zustand/useConversation";
import toast from "react-hot-toast";

const useGetMessages = () => {
  const { messages, setMessages, selectedConversation } = useConversation();

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getMessages = async () => {
      setLoading(true);

      try {
        const response = await axios.get(
          `/api/messages/${selectedConversation._id}`
        );
        const data = response.data;

        if (data.error) {
          throw new Error(data.error);
        }

        await setMessages(data);
      } catch (error) {
        toast.error(error.message);
        console.error("Error fetching messages:", error);
      } finally {
        setLoading(false);
      }
    };

    getMessages();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedConversation._id, setMessages]);

  useEffect(() => {
    console.log(messages); //this have the value i want to use this value in message component
  }, [messages]);
  return { loading, messages };
};
export default useGetMessages;
