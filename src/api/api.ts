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
    return response.data.access_token;
  } catch (error) {
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


    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch data from Spotify API');
  }
};

export const playTrack = async (trackUri:string, userAccessToken:string) => {
  try {
    const playerUrl = 'https://api.spotify.com/v1/me/player/play';

    const response = await axios.put(playerUrl, {
      uris: [trackUri]
    }, {
      headers: {
        Authorization: `Bearer ${userAccessToken}`,
        'Content-Type': 'application/json',
      },
    });

    return response.data;
  } catch (error) {
    throw new Error('Failed to play track on Spotify API');
  }
};