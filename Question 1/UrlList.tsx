import React from 'react';

interface Url {
    id: number;
    originalUrl: string;
    shortenedUrl: string;
}

interface UrlListProps {
    urls: Url[];
}

const UrlList: React.FC<UrlListProps> = ({ urls }) => {
    return (
        <div>
            <h2>Shortened URLs</h2>
            <ul>
                {urls.map(url => (
                    <li key={url.id}>
                        <a href={url.shortenedUrl} target="_blank" rel="noopener noreferrer">
                            {url.shortenedUrl}
                        </a> - {url.originalUrl}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default UrlList;