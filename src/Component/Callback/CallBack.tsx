import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Callback = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const hash = window.location.hash;
    let token = window.localStorage.getItem("token");

    if (!token && hash) {
      const hashParams = new URLSearchParams(hash.substring(1));
      token = hashParams.get('access_token');

      if (token) {
        window.location.hash = '';
        window.localStorage.setItem("token", token);
        navigate('/home'); 
      } else {
        navigate('/');
      }
    } else if (token) {
      navigate('/home');
    }
  }, [navigate]);

  return (
    <div>
      <h1>Обработка...</h1>
    </div>
  );
};

export default Callback;