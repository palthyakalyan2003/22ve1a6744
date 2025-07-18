import React, { useState } from 'react';
import ShortenUrlForm from './components/ShortenUrlForm';
import UrlList from './components/UrlList';

const App: React.FC = () => {
    const [urls, setUrls] = useState<string[]>([]);

    const addUrl = (url: string) => {
        setUrls([...urls, url]);
    };

    return (
        <div>
            <h1>URL Shortener</h1>
            <ShortenUrlForm addUrl={addUrl} />
            <UrlList urls={urls} />
        </div>
    );
};

export default App;