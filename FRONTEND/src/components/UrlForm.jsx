import React from 'react';
import { createShortUrl } from '../api/shortUrl.api.js';

const UrlForm = () => {
  const [url, setUrl] = React.useState("https://www.google.com");
  const [shortUrl, setShortUrl] = React.useState("");
  const [error, setError] = React.useState("");
  const [loading, setLoading] = React.useState(false);
  const [copied, setCopied] = React.useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError("");
    setShortUrl("");
    setCopied(false);
    setLoading(true);
    try {
      const shortUrl = await createShortUrl(url);
      setShortUrl(shortUrl);
      setLoading(false);
    } catch (err) {
      setLoading(false);
      setError(err.response?.data?.message || "Something went wrong. Please try again.");
      console.error(err);
    }
  };

  const handleCopy = async () => {
    if (shortUrl) {
      try {
        await navigator.clipboard.writeText(shortUrl);
        setCopied(true);
        setTimeout(() => setCopied(false), 1500);
      } catch (e) {
        setError("Failed to copy");
      }
    }
  };

  return (
    <div className="w-[400px] h-[500px] mx-auto mt-10 p-8 bg-white rounded-xl shadow-lg border border-gray-200 flex flex-col justify-start">
      <div className="mb-8 text-center">
        <h1 className="text-4xl font-extrabold text-blue-700 tracking-tight mb-2" style={{ letterSpacing: '0.05em' }}>
          Little <span className="text-blue-500">Links</span>
        </h1>
        <p className="text-lg text-gray-500 font-medium">Your personal URL shortener</p>
      </div>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          type="url"
          placeholder="Paste your long URL here"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          required
          className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 text-lg"
        />
        <button
          type="submit"
          className="bg-blue-600 text-white font-semibold py-2 rounded-md hover:bg-blue-700 transition text-lg"
          disabled={loading}
        >
          {loading ? "Shortening..." : "Shorten URL"}
        </button>
      </form>
      <div className={`transition-all duration-300 ${shortUrl ? 'mt-8 opacity-100' : 'mt-8 opacity-0 pointer-events-none select-none'}`} style={{ minHeight: '80px' }}>
        {shortUrl && (
          <div className="flex flex-col items-center gap-2 animate-fade-in w-full">
            <span className="font-medium text-gray-700">Short URL:</span>
            <div className="flex items-center gap-2 w-full justify-center">
              <div className="flex w-full">
                <a
                  href={shortUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border border-blue-400 bg-blue-50 text-blue-700 break-all text-lg px-4 py-2 rounded-l-md font-medium flex-1 text-left hover:bg-blue-100 transition"
                  style={{ minHeight: '44px', display: 'flex', alignItems: 'center', width: '0', flexGrow: 1 }}
                >
                  {shortUrl}
                </a>
                <button
                  onClick={handleCopy}
                  className={`px-4 py-2 rounded-r-md font-semibold transition-colors duration-200 text-white ${copied ? 'bg-green-600' : 'bg-blue-500 hover:bg-blue-700'}`}
                  style={{ minWidth: '90px', minHeight: '44px' }}
                >
                  {copied ? 'Copied!' : 'Copy'}
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
      {error && (
        <div className="mt-4 text-center text-red-600">{error}</div>
      )}
    </div>
  );
}

export default UrlForm;