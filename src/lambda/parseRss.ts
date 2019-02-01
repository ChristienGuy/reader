import { Handler, APIGatewayEvent } from "aws-lambda";
import HttpStatus from "http-status-codes";
import Parser from "rss-parser";

const parser = new Parser();

const handler: Handler = async (event: APIGatewayEvent) => {
  const { rssUrl } = event.queryStringParameters;

  if (!rssUrl) {
    return {
      statusCode: HttpStatus.BAD_REQUEST,
      msg: "missing rssUrl"
    };
  }

  const output = await parser.parseURL(rssUrl);

  return {
    statusCode: 200,
    body: JSON.stringify(output)
  };
};

export { handler };
