export interface Url {
    id: string;
    originalUrl: string;
    shortenedUrl: string;
}

export interface UrlListProps {
    urls: Url[];
}