import yaml from 'js-yaml';
import _ from 'lodash';

const parsers = {
  json: JSON.parse,
  yaml: yaml.load,
  yml: yaml.load,
};

export default (fileData, dataFormat) => {
  if (!_.has(parsers, dataFormat)) {
    throw new Error('Incorrect file extension!');
  }
  return parsers[dataFormat](fileData);
};
