const yamlLint = require('yaml-lint');

yamlLint.lint('../.circleci/config.yml')
    .then(() => {
        console.log('Valid YAML file.');
    })
    .catch((error) => {
        console.error('Invalid YAML file.', error);
    });