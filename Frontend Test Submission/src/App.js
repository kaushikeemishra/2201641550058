import React, { useState } from 'react';
import logger from './logger';

function App() {
  const [url, setUrl] = useState('');
  const [shortUrls, setShortUrls] = useState([]);

  const handleShorten = () => {
    const shortId = Math.random().toString(36).substr(2, 6);
    const validFor = 30; // default
    const expiry = Date.now() + validFor * 60 * 1000;

    const newShortUrl = {
      original: url,
      short: https://sho.rt/${shortId},
      expiresAt: new Date(expiry).toLocaleString()
    };

    setShortUrls([...shortUrls, newShortUrl]);
    logger.log("New short URL created:", newShortUrl);
    setUrl('');
  };

  return (
    <div style={{ padding: 30 }}>
      <h2>React URL Shortener</h2>
      <input
        type="text"
        placeholder="Enter URL"
        value={url}
        onChange={e => setUrl(e.target.value)}
        style={{ width: '300px', marginRight: '10px' }}
      />
      <button onClick={handleShorten}>Shorten</button>

      <h3>Shortened URLs:</h3>
      <ul>
        {shortUrls.map((item, idx) => (
          <li key={idx}>
            <strong>{item.short}</strong> → {item.original} (Expires at: {item.expiresAt})
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
