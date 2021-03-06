const { execSync } = require('child_process');
const { chmodSync } = require('fs');

exports.pre = () => {
  try {
    execSync('which pipenv')
  } catch {
    console.error(`Unable to find "pipenv". Install from https://pipenv.kennethreitz.org`)
    process.exit(1);
  }
};

exports.post = () => {
  execSync('pipenv install', { stdio: 'inherit' });
  chmodSync('main.py', '700');

  console.log();
  console.log("==================================================================================");
  console.log(" Your cdk8s Python project was created successfully.");
  console.log();
  console.log(" Useful commands:");
  console.log(" - pipenv install: creates a virtual environment and installs deps");
  console.log(" - pipenv run ./main.py: synthesizes a k8s manifest in 'dist/' (ready for 'kubectl apply -f')");
};

