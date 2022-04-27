import { tokenize } from 'string-punctuation-tokenizer';
import Config from './Config';

const isEmpty = (obj) => (
  Object.entries(obj).length === 0 && obj.constructor === Object
);

const analyzePoem = (text, operations, callback) => {
  const params = operations
    .map(operation => `operations=${operation}`)
    .join("&");
  fetch(Config.API_ROOT + `analysis?${params}`, {
    method: "POST",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
    },
    body: text
  })
  .then(response => response.json())
  .catch(error => {
    console.warn("Fetch failed for analysis");
    return {};
  })
  .then(data => {
    if (!isEmpty(data)) {
      callback(cleanEntities(text, data));
    };
  });
}

const cleanEntities = (text, data) => {
  let lines = text.split(/[\n]+/);
  let entities = {};
  let index = 0;
  let entity = data.entities[index];
  lines.forEach((line, lineIndex) => {
    let lineTokens = {};
    tokenize({text: line}).forEach((token, tokenIndex) => {
      if ((data.entities) && (index < data.entities.length) && (token === entity.term)) {
        // Trim all values in entity
        lineTokens[tokenIndex] = Object.fromEntries(
          Object.entries(entity).map(([k, v]) => [k, v.trim()])
        );
        entity = data.entities[++index];
      }
    });
    if (!isEmpty(lineTokens)) {
      entities[lineIndex] = lineTokens;
    }
  });
  return {...data, entities: entities, };
};

const capitalize = (string) => (
  string.charAt(0).toUpperCase() + string.slice(1)
);

export { isEmpty, analyzePoem, capitalize };
