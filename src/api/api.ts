import axios from 'axios';

const clientId = "63015aa7452f4c01a9637364a8cf9104";
const clientSecret = "4fbfddc023c74766be80a1337bf36ed9";

const getAccessToken = async () => {
  const authUrl = 'https://accounts.spotify.com/api/token';
  const params = new URLSearchParams();
  params.append('grant_type', 'client_credentials');

  const response = await axios.post(authUrl, params, {
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'Authorization': 'Basic ' + btoa(clientId + ':' + clientSecret),
    },
  });

  return response.data.access_token;
};

export const searchForItem = async (search: string) => {
  try {
    const accessToken = await getAccessToken();
    const searchUrl = `https://api.spotify.com/v1/search?q=${encodeURIComponent(search)}&type=track`;

    const response = await axios.get(searchUrl, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    return response.data;
  } catch (error) {
    console.error("Error fetching data from Spotify API", error);
    throw error;
  }
};