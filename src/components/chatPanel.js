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
    return (<div className="lg:w-full lg:h-full">
        <MainContainer>
            <ChatContainer>
                <MessageList>
                    <Message
                        model={{
                            message: "Hello my friend",
                            sentTime: "just now",
                            sender: "Joe",
                        }}
                    />
                </MessageList>
                <MessageInput placeholder="Type message here" onSend={(value) => handleSubmit(value)} />
            </ChatContainer>
        </MainContainer>
    </div>)
}