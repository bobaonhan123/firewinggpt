const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
    apiKey: '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',
});
const openai = new OpenAIApi(configuration);

const chatCompletion = async (prompt) => {
    return await openai.createChatCompletion({
        model: "gpt-3.5-turbo",
        messages: [{ role: "assistant", content: prompt }],
    });
}
exports.chatCompletion = chatCompletion;