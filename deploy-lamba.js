const { LambdaClient, UpdateFunctionCodeCommand } = require("@aws-sdk/client-lambda");
const fs = require('fs');
const path = require('path');
const archiver = require('archiver');
const { execSync } = require('child_process');

const client = new LambdaClient({ region: 'eu-north-1' });

console.log('Compiling TypeScript code...');
execSync('tsc', { stdio: 'inherit' });

// create a file to stream archive data to.
const output = fs.createWriteStream(path.join(__dirname, 'function.zip'));
const archive = archiver('zip', { zlib: { level: 9 } });

archive.pipe(output);
archive.directory(path.join(__dirname, 'dist'), false);
archive.finalize();

// Upload the ZIP file to Lambda
output.on('close', async function () {
  console.log(`ZIP-file has been created: ${archive.pointer()} bytes`);

  const functionName = 'hello';
  const zipFilePath = path.join(__dirname, 'function.zip');

  const params = {
    FunctionName: functionName,
    ZipFile: fs.readFileSync(zipFilePath),
    Publish: true,
  };

  try {
    const command = new UpdateFunctionCodeCommand(params);
    const data = await client.send(command);
    console.log('Lambda-function updated:', data);
  } catch (err) {
    console.log('Error during update function code:', err);
  }
});
