import axios from 'axios';

const clientId = "63015aa7452f4c01a9637364a8cf9104";
const clientSecret = "4fbfddc023c74766be80a1337bf36ed9";

const getAccessToken = async () => {
  const authUrl = 'https://accounts.spotify.com/api/token';
  const params = new URLSearchParams();
  params.append('grant_type', 'client_credentials');

  try {
    const response = await axios.post(authUrl, params, {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Authorization': 'Basic ' + btoa(clientId + ':' + clientSecret),
      },
    });
    console.log('Access Token:', response.data.access_token); 
    return response.data.access_token;
  } catch (error) {
    console.error('Error fetching access token from Spotify API', error);
    throw new Error('Failed to fetch access token');
  }
};

export const searchForItem = async (search: string) => {
  try {
    const accessToken = await getAccessToken();
    const searchUrl = `https://api.spotify.com/v1/search?q=${encodeURIComponent(search)}&type=track,artist,album`;

    const response = await axios.get(searchUrl, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    console.log('API Response Data:', response.data); 

    return response.data;
  } catch (error) {
    console.error("Error fetching data from Spotify API", error);
    throw new Error('Failed to fetch data from Spotify API');
  }
};