
// Fetches our GET route from the Placeholder API.
export async function callBackendAPI(endpoint: string): Promise<any> {
  // const response = await fetch('https://jsonplaceholder.typicode.com/users');
  const response = await fetch(`https://jsonplaceholder.typicode.com/${endpoint}`);
  const body = await response.json();

  if (response.status !== 200) {
    throw Error(body.message)
  }
  return body;
};