import { APIGatewayProxyHandler } from "aws-lambda";
import { DynamoDBClient, PutItemCommand, GetItemCommand, DeleteItemCommand, ScanCommand } from "@aws-sdk/client-dynamodb";

const client = new DynamoDBClient({ region: "eu-north-1" });
const tableName = process.env.USERS_TABLE || "";

export const createUser: APIGatewayProxyHandler = async (event) => {
  const body = JSON.parse(event.body || "{}");
  const params = {
    TableName: tableName,
    Item: {
      UserID: { S: body.userId },
      Name: { S: body.name },
      Email: { S: body.email },
    },
  };

  try {
    const command = new PutItemCommand(params);
    await client.send(command);
    return {
      statusCode: 201,
      body: JSON.stringify({ message: "User created" }),
    };
  } catch (err) {
    return {
      statusCode: 500,
      body: JSON.stringify({ message: "Error creating user", error: err }),
    };
  }
};

export const getUser: APIGatewayProxyHandler = async (event) => {
  const userId = event.pathParameters?.userId || "";
  const params = {
    TableName: tableName,
    Key: {
      UserID: { S: userId },
    },
  };

  try {
    const command = new GetItemCommand(params);
    const result = await client.send(command);
    return {
      statusCode: 200,
      body: JSON.stringify(result.Item),
    };
  } catch (err) {
    return {
      statusCode: 500,
      body: JSON.stringify({ message: "Error fetching user", error: err }),
    };
  }
};

export const getUsers: APIGatewayProxyHandler = async (event) => {
  const params = {
    TableName: tableName,
  };

  try {
    const command = new ScanCommand(params);
    const result = await client.send(command);
    return {
      statusCode: 200,
      body: JSON.stringify(result.Items),
    };
  } catch (err) {
    return {
      statusCode: 500,
      body: JSON.stringify({ message: "Error fetching users", error: err }),
    };
  }
};

export const deleteUser: APIGatewayProxyHandler = async (event) => {
  const userId = event.pathParameters?.userId || "";
  const params = {
    TableName: tableName,
    Key: {
      UserID: { S: userId },
    },
  };

  try {
    const command = new DeleteItemCommand(params);
    await client.send(command);
    return {
      statusCode: 200,
      body: JSON.stringify({ message: "User deleted" }),
    };
  } catch (err) {
    return {
      statusCode: 500,
      body: JSON.stringify({ message: "Error deleting user", error: err }),
    };
  }
};
