let common = [
    './src/features/**/*.feature',
    '--require-module ts-node/register', //typescript cucumber
    '--require ./src/stepDefinitions/**/*.ts',
    '--format progress-bar',
    `--format-options '{"snippetInterface": "synchronous"}'`
  ].join(' ');

module.exports = {
    default: common
}