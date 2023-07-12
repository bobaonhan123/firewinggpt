const { useEffect, useState } = require("react");



const GPT = () => {
    const [prompt, setPrompt] = useState("");
    const [response, setResponse] = useState("");
    const [messages, setMessages] = useState([]);
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        console.log("messages", messages);
    }, [messages]);
    function handleSubmit(e) {
        e.preventDefault();
        setMessages([...messages, prompt]);
        setPrompt("");
    }
    return (
        <div class="max-w-xl lg:max-w-lg ml-8 mt-8">

            {/*show response */}
            <div class="mt-6">
                <h2 class="text-3xl font-bold tracking-tight text-gray-500 sm:text-4xl">Answer</h2>
                <p class="mt-4 text-lg leading-8 text-gray-500">Answer</p>
                {messages.map((message) => <>
                    <h2 class="text-3xl font-bold tracking-tight text-gray-500 sm:text-4xl">{message}</h2>
                </>)}
            </div>
            <h2 class="text-3xl font-bold tracking-tight text-gray-500 sm:text-4xl">Question</h2>
            <p class="mt-4 text-lg leading-8 text-gray-500">Question</p>
            <form class="mt-6 flex max-w-md gap-x-4" onSubmit={handleSubmit} >
                <label for="email-address" class="sr-only">Question</label>
                <input onChange={(e) => { setPrompt(e.target.value) }} id="email-address" name="email" required class="min-w-0 flex-auto rounded-md border-0 bg-white/5 px-3.5 py-2 text-gray-500 shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6" placeholder="Enter your question" />
                <button type="submit" class="flex-none rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500">Ask</button>
            </form>
        </div>
    )
}
export default GPT;