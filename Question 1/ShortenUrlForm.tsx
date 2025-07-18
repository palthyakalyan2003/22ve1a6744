import React, { useState } from 'react';

const ShortenUrlForm: React.FC<{ onAddUrl: (url: string) => void }> = ({ onAddUrl }) => {
    const [url, setUrl] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!url) {
            setError('Please enter a URL');
            return;
        }
        setError('');
        onAddUrl(url);
        setUrl('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                placeholder="Enter URL to shorten"
            />
            <button type="submit">Shorten URL</button>
            {error && <p style={{ color: 'red' }}>{error}</p>}
        </form>
    );
};

export default ShortenUrlForm;