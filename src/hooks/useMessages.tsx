import {ArticleType} from "../types/ArticleType";
import {useEffect, useState} from "react";
import {MessageType} from "../types/MessageType";


const useMessages = () => {
    const [messages, setMessages] = useState<MessageType[]>([]);

    const fetchMessages = () => {
        const messageList = [
            {
                message: "Bonjour"
            }
        ];
        setMessages(messageList);
    }

    useEffect(() => {
        fetchMessages();
    }, []);

    return {messages}
}

export default useMessages;
