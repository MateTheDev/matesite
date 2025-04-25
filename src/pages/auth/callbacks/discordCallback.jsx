import axios from 'axios';
import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router';

function DiscordCallback() {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const parameters = new URLSearchParams(location.search);
    const code = parameters.get('code');

    if (!code) {
      console.error('No authorization code found.');
      return;
    }

    console.log('Code received:', code);

    const params = new URLSearchParams({
      client_id: import.meta.env.VITE_DISCORD_CLIENT_ID,
      client_secret: import.meta.env.VITE_DISCORD_CLIENT_SECRET,
      grant_type: 'authorization_code',
      code: code,
      redirect_uri: import.meta.env.VITE_DISCORD_REDIRECT_URI,
    });

    const headers = {
      'Content-Type': 'application/x-www-form-urlencoded',
    };

    const fetchData = async () => {
        try {
            const response = await axios.post('https://discord.com/api/oauth2/token', params, { headers });

            console.log('Token Response:', response.data);

            const userResponse = await axios.get('https://discord.com/api/users/@me', {
                headers: {
                    Authorization: `Bearer ${response.data.access_token}`
                }
            })
  
          console.log('User Response:', userResponse.data);

        } catch (error) {
            console.error('Error fetching data:', error.response ? error.response.data : error);
        }
    };

    fetchData();

    
  }, [location, navigate]);

  return <p className='text-black'>Processing...</p>;
}

export default DiscordCallback;
