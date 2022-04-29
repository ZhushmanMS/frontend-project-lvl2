import yaml from 'js-yaml';

export default (fileData, dataFormat) => {
  switch (dataFormat) {
    case 'json':
      return JSON.parse(fileData);
    case 'yaml':
      return yaml.load(fileData);
    case 'yml':
      return yaml.load(fileData);
    default:
      throw new Error(`file extension ${dataFormat} invalid!`);
  }
};
