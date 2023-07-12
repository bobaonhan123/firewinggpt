const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

const chatCompletion = (prompt) => {
    return openai.createChatCompletion({
        model: "gpt-3.5-turbo",
        messages: [{ role: "assistant", content: prompt }],
    });
}

module.exports = { chatCompletion };
