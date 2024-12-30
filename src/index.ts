import { APIGatewayProxyHandler } from 'aws-lambda'; 
import { secondHandler } from './second';


export const handler: APIGatewayProxyHandler = async (event, context) => {
  const secondMessage = await secondHandler();

  return {
    statusCode: 200,
    body: JSON.stringify({
      message: 'Hello from handler.ts TypeScript!' + secondMessage,
    }),
  };
};

