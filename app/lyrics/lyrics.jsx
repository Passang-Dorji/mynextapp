// components/Lyrics.js
import React, { useState } from 'react';

const Lyrics = () => {
  const [artist, setArtist] = useState('');
  const [title, setTitle] = useState('');
  const [lyrics, setLyrics] = useState('');

  const fetchLyrics = async () => {
    try {
      const response = await fetch(`https://api.lyrics.ovh/v1/${artist}/${title}`);
      const data = await response.json();
      setLyrics(data.lyrics);
    } catch (error) {
      console.error('Error fetching lyrics:', error);
    }
  };

  return (
    <div className='bg-orange-400 h-screen w-screen'>
      <h2 className='text-center text-2xl mt-4'>Lyrics Finder</h2>
      <input className='text-black mx-4 mt-4 bg-lime-400 rounded-full'
        type="text"
        placeholder="Artist"
        value={artist}
        onChange={(e) => setArtist(e.target.value)}
      />
      <input className='text-black mt-4 bg-lime-400 rounded-full'
        type="text"
        placeholder="Song Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button className='bg-sky-700	rounded-full ml-4 border-2 px-2 animate-pulse'
       onClick={fetchLyrics}>Get Lyrics</button>
      <div className="text-center text-black antialiased">
        <h3>Lyrics</h3>
        <pre>{lyrics}</pre>
      </div>
    </div>
  );
};

export default Lyrics;
