// import { Configuration,OpenAIApi} from "openai";
import OpenAI from 'openai';


// const configuration = new Configuration({
//     apiKey: process.env.OPENAI_API_KEY,
// });
// const openai = new OpenAIApi(configuration);
const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
  });

export default openai;