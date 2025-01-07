# AWS Lambda

![Build Status](https://github.com/Ridvan-bot/aws-lambda/actions/workflows/deploy.yml/badge.svg)
![GitHub tag (latest SemVer)](https://img.shields.io/github/v/tag/Ridvan-bot/aws-lambda?label=version&sort=semver)
![Last Commit](https://img.shields.io/github/last-commit/Ridvan-bot/aws-lambda)
![GitHub issues](https://img.shields.io/github/issues/Ridvan-bot/aws-lambda)
![GitHub pull requests](https://img.shields.io/github/issues-pr/Ridvan-bot/aws-lambda)

Contains AWS Lambda Functions

## Setup

1. Install AWS CLI
2. Create an access key in AWS
3. Run `aws configure`
   - Set Default region name to: `eu-north-1` (Europe, Stockholm)
   - Set Default output format to: `json`


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

Make sure to set up your environment variables in a `.env` file or directly in the `serverless.yml` file.

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

