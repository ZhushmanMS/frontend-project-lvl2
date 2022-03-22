import yaml from 'js-yaml';

const parsers = {
  json: JSON.parse,
  yaml: yaml.load,
  yml: yaml.load,
};

export default (fileData, dataFormat) => parsers[dataFormat](fileData);