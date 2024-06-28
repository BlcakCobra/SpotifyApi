import React from 'react';
import style from "./Register.module.css"
import backImage from "./../../assets/Images/HolmurLighthouse.jpg"
const clientId = '63015aa7452f4c01a9637364a8cf9104';
const redirectUri = 'http://localhost:5173/callback';

const scopes = [
  'user-read-private',
  'user-read-email',
  'playlist-read-private',
  'playlist-modify-private'
];

export default function Register() {
  const handleLogin = () => {
    const authUrl = `https://accounts.spotify.com/authorize?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join('%20')}&response_type=token&show_dialog=true`;
    window.location.href = authUrl;
  };

  return (
    <div className={style.Register} style={{ backgroundImage: `url(${backImage})`}}>
      <h1>Register</h1>
      <button onClick={handleLogin}>Login with Spotify</button>
    </div>
  );
}