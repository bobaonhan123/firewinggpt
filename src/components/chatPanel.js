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
    function handleSubmit(value) {

        setMessages([...messages, value]);
        setPrompt("");
    }
    return (<div className="lg:w-full h-full">
        <MainContainer className="h-full">
            <ChatContainer className="">
                <MessageList>
                    <Message
                        model={{
                            message: "Hello my friend",
                            sentTime: "just now",
                            sender: "Joe",
                        }}
                    />
                </MessageList>
                <MessageInput placeholder="Type message here" onSend={(value) => handleSubmit(value)} className="fixed bottom-16"/>
            </ChatContainer>
        </MainContainer>
    </div>)
}