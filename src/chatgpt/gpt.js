const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
    apiKey: process.env.REACT_APP_API_KEY || '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',
});
const openai = new OpenAIApi(configuration);

const chatCompletion = async (prompt) => {
    const response = await openai.createCompletion({
        model: "text-davinci-003",
        prompt: "Say this is a test",
        max_tokens: 7,
        temperature: 0,
    });
    console.log(response.data);
    return await openai.createChatCompletion({
        model: "text-davinci-003",
        messages: [{ role: "user", content: prompt }],
    });
}
console.log(process.env.REACT_APP_API_KEY);
console.log(chatCompletion("Hello, how are you?").data);
//module.exports = { chatCompletion };
