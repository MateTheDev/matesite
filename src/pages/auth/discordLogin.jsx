import { useEffect } from 'react';

function DiscordLogin() {
  useEffect(() => {
    const url = "https://discord.com/oauth2/authorize?client_id=1365412353067450489&response_type=code&redirect_uri=https%3A%2F%2Fmatethedev.com%2Fauth%2Fdiscord%2Fcallback&scope=identify"
    window.location.href = url;
  });

  return (<p className='text-black'>Redirecting to login...</p>);
}

export default DiscordLogin;
