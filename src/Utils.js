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
    if (!isEmpty(data)) callback(data);
  });
}

export { isEmpty, analyzePoem };