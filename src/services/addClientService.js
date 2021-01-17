import { URI } from "./config";

const registerClientService = async (newClient) => {

  const payload = JSON.stringify(newClient);

  const response = await fetch(URI('clients/register'), {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: payload,
  });

  return response.ok;

};

export {
  registerClientService,
};
