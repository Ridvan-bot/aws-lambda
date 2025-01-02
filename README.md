# AWS Lambda

Contains AWS Lambda Functions

## Setup

1. Install AWS CLI
2. Create an access key in AWS
3. Run `aws configure`
   - Set Default region name to: `eu-north-1` (Europe, Stockholm)
   - Set Default output format to: `json`

## Project Setup Commands

```sh
npm init -y
npm install --save-dev typescript @types/aws-lambda @types/node
npm install @aws-sdk/client-dynamodb serverless serverless-offline
npx tsc --init
```

## Install Dependencies

```sh
npm install
```

## Running Serverless Offline

To run the Serverless framework offline, use the following command:

```sh
npx serverless offline
```

This will start the Serverless Offline plugin, which emulates AWS Lambda and API Gateway on your local machine.

## Deploying to AWS Lambda

To deploy your functions to AWS Lambda, use the following command:

```sh
npx serverless deploy
```

This will package and deploy your functions to AWS Lambda, creating the necessary resources as defined in your `serverless.yml` file.

## Additional Commands

- To invoke a function locally:

  ```sh
  npx serverless invoke local --function <functionName>
  ```

- To remove the deployed service from AWS:

  ```sh
  npx serverless remove
  ```

## Environment Variables

Make sure to set up your environment variables in a `.env` file or directly in the `serverless.yml` file under the `provider` section.

## Directory Structure

```
.
├── src
│   ├── handler.ts
│   └── second.ts
├── dist
├── node_modules
├── .gitignore
├── package.json
├── serverless.yml
├── tsconfig.json
└── README.md
```

