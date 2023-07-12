import styles from "@chatscope/chat-ui-kit-styles/dist/default/styles.min.css";
import {
    MainContainer,
    ChatContainer,
    MessageList,
    Message,
    MessageInput,
} from "@chatscope/chat-ui-kit-react";
import { useEffect, useState } from "react";
export default function ChatPanel() {
    const [prompt, setPrompt] = useState("");
    const [response, setResponse] = useState("");
    const [messages, setMessages] = useState([]);
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        console.log("messages", messages);
    }, [messages]);
    function handleSubmit() {
        setMessages([...messages, prompt]);
        setPrompt("");
    }
    return (<div className="lg:w-full h-full">
        <MainContainer >
            <ChatContainer className="h-full">
                <MessageList>
                    {messages.map((message) => <Message
                        model={{
                            message: message,
                            sentTime: "just now",
                            direction: "outgoing",
                        }}
                    ></Message>)}

                </MessageList>
                <MessageInput placeholder="Type message here" onChange={ } onSend={(value) => handleSubmit(value)} />
            </ChatContainer>
        </MainContainer>
    </div>)
}