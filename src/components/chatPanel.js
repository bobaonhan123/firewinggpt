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
    const [responseList, setResponseList] = useState([]);
    useEffect(() => {
        setResponseList(["Data transformation is like the alchemy of the digital world, where raw data is transformed into valuable insights.", "Just as a caterpillar transforms into a butterfly, data transformation takes raw data and turns it into something beautiful and useful.", "Data transformation is the art of reshaping data, turning it into a masterpiece that reveals hidden patterns and trends.", "Think of data transformation as the superhero power that takes messy, unstructured data and turns it into organized, actionable information.", "Data transformation is like solving a puzzle, where you rearrange and manipulate data pieces until they fit perfectly and reveal the big picture.", "Imagine data transformation as a magician's trick, where the data goes in one way and comes out completely transformed, unlocking its true potential.", "Data transformation is the bridge between chaos and clarity, where we cleanse, filter, and manipulate data to make it meaningful and insightful.", "Data transformation is like the metamorphosis of data, where it undergoes a profound change, emerging as a valuable asset.", "Think of data transformation as a powerful tool that unlocks the full potential of data, allowing us to extract knowledge and make informed decisions."]);
    }, []);
    function handleSubmit() {
        //const response = "Hello, how can I help you?";
        //random response
        const response = responseList[Math.floor(Math.random() * responseList.length)];

        setMessages([...messages, { prompt, response }]);
        setPrompt("");
    }
    return (
        <div className="lg:w-full h-full">
            <MainContainer >
                <ChatContainer className="h-full">
                    <MessageList>
                        {messages.map((message) => (<>
                            <Message
                                model={{
                                    message: message.prompt,
                                    sentTime: "just now",
                                    direction: "outgoing",
                                }}
                            ></Message>
                            <Message
                                model={{
                                    message: message.response,
                                    sentTime: "just now",
                                    direction: "incoming",
                                }}
                            ></Message>
                        </>
                        ))}

                    </MessageList>
                    <MessageInput
                        className="fixed bottom-16 md:bottom-0"
                        placeholder="Type message here"
                        onChange={(value) => setPrompt(value)}
                        onSend={(value) => handleSubmit(value)}
                    />
                </ChatContainer>
            </MainContainer>
        </div>
    );
}