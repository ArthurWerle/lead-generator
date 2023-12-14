// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

type Response = {
  error?: any;
  result?: any;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Response>
) {
  if (req.method === "POST") {
    if (!openai.apiKey) {
      res.status(500).json({
        error: {
          message:
            "OpenAI API key not configured, please follow instructions in README.md",
        },
      });

      return;
    }

    const inputs = req.body;

    try {
      const stream = await openai.chat.completions.create({
        stream: true,
        model: "gpt-4",
        messages: [
          {
            role: "system",
            content:
              "You are a marketing expert and you are trying to make me buy your product.",
          },
          { role: "user", content: generatePrompt(inputs) },
        ],
        temperature: 0.6,
      });

      for await (const chunk of stream) {
        const response = chunk.choices[0]?.delta?.content || "";
        res.write(response);
      }

      res.end();
    } catch (error: any) {
      if (error.response) {
        console.log(error);
        console.error(error.response.status, error.response.data);
        res.status(error.response.status).json(error.response.data);
      } else {
        console.log(error);
        console.error(`Error with OpenAI API request: ${error.message}`);
        res.status(500).json({
          error: {
            message: "An error occurred during your request.",
          },
        });
      }
    }
  }
}

function generatePrompt(inputs: string) {
  return `Your trying to convince a company to buy your product. You are a marketing expert and you are trying to make me buy your product. 
  The product consists in a marketing taxonomy platform, that helps you to organize your marketing campaigns. The name of the company is Claravine.
  Some additional information you can use on your pitch: ${inputs}. I also want your answer to be in markdown format.`;
}
