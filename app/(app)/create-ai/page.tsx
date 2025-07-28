'use client'
import axios from 'axios';
import React, { useState } from 'react';

const Page = () => {
  const [title, setTitle] = useState('');
  const [aiContent, setAiContent] = useState('');
  const [loading, setLoading] = useState(false);

  const handleGenerate = async () => {
    setLoading(true);
    const response = await axios.post('/api/create-ai',{title})
    const data = response.data.script;
    console.log(data.script)
    setTimeout(() => {
      setAiContent(`AI generated content for "${title}"` + ` ${data}`);
      setLoading(false);
    }, 1500);
  };

  return (
    <div className="max-w-xl mx-auto mt-10 p-6 bg-white rounded-lg shadow">
      <h1 className="text-2xl font-bold mb-4">AI Video Content Generator</h1>
      <label className="block mb-2 font-medium">Video Title</label>
      <input
        type="text"
        className="w-full px-3 py-2 border rounded mb-4 focus:outline-none focus:ring-2 focus:ring-primary"
        placeholder="Enter your video title"
        value={title}
        onChange={e => setTitle(e.target.value)}
      />
      <button
        className="bg-black/70 text-white px-4 py-2 rounded hover:bg-black/80 transition mb-4 w-full"
        onClick={handleGenerate}
        
      >
        {loading ? 'Generating...' : 'Generate'}
      </button>
      <label className="block mb-2 font-medium">AI Generated Content</label>
      <textarea
        className="w-full h-96 px-3 py-2 border rounded bg-gray-100"
        rows={6}
        value={aiContent}
        readOnly
        placeholder="AI generated content will appear here..."
      />
    </div>
  );
};

export default Page;
