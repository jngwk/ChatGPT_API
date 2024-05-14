import OpenAI from "openai";
import express from "express";
import bodyParser from "body-parser";
import cors from "cors";

const openai = new OpenAI({
  apiKey: "",
});
const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(cors());
app.get("/", async (req, res) => {
  async function main() {
    const completion = await openai.chat.completions.create({
      messages: [
        {
          role: "user",
          content:
            "너가 요리와 음악 전문가라고 상상하고 돈까스와 어울리는 음악 추천해줘 다음 상황도 고려해줘: 장르: 재즈 , 시간대: 저녁",
        },
      ],
      model: "gpt-3.5-turbo",
    });

    // console.log(completion.choices[0].message);
    res.json({
      completion: completion.choices[0].message,
    });
  }

  main();
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
