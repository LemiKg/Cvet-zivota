export const fetcher = async (endpoint, options = {}) => {
  const baseUrl = (process.env.NEXT_PUBLIC_ENVIRONMENT = "development"
    ? "http://localhost:1337"
    : "");
  let response;
  if (!options) {
    response = await fetch(`${baseUrl}/${endpoint}`);
  } else {
    response = await fetch(`${baseUrl}/${endpoint}`, options);
  }
  const data = await response.json();
  return data;
};
