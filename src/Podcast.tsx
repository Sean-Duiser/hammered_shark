import { useEffect, useState } from 'react';
import EpisodeCard from './components/EpisodeCard';

interface Episode {
  title: string;
  description: string;
  thumbnail: string;
  pubDate: string;
  link: string;
}

const PODCAST_RSS_URL = 'https://anchor.fm/s/ee587674/podcast/rss';
const EPISODES_PER_PAGE = 4;

function Podcast() {
  const [episodes, setEpisodes] = useState<Episode[]>([]);
  const [visibleCount, setVisibleCount] = useState(EPISODES_PER_PAGE);

  useEffect(() => {
    const fetchFeed = async () => {
      try {
        const response = await fetch(PODCAST_RSS_URL);
        const text = await response.text();

        const parser = new DOMParser();
        const xml = parser.parseFromString(text, 'application/xml');
        const items = Array.from(xml.querySelectorAll('item'));

        const parsedEpisodes: Episode[] = items.map(item => {
          const title = item.querySelector('title')?.textContent || 'Untitled Episode';
          const description = item.querySelector('description')?.textContent || '';
          const pubDate = item.querySelector('pubDate')?.textContent || '';
          const link = item.querySelector('link')?.textContent || '#';
          const thumbnail =
            item.querySelector('itunes\\:image')?.getAttribute('href') ||
            item.querySelector('image')?.textContent ||
            '/images/fallback.jpg';

          return { title, description, pubDate, link, thumbnail };
        });

        setEpisodes(parsedEpisodes);
      } catch (error) {
        console.error('Error fetching RSS feed:', error);
        setEpisodes([]);
      }
    };

    fetchFeed();
  }, []);

  const handleLoadMore = () => {
    setVisibleCount(prev => prev + EPISODES_PER_PAGE);
  };

  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString(undefined, {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const stripHtml = (html: string) => {
    const doc = new DOMParser().parseFromString(html, 'text/html');
    return doc.body.textContent || '';
  };

  return (
    <div className="container text-center" style={{ paddingTop: '80px' }}>
      <h1 className="mb-4">Wit & Grit – Latest Episodes</h1>
      <p className="lead mb-4">Auto-updating from our podcast feed 🎙️</p>

      {/* Spotify Player */}
      <div className="mb-5">
        <iframe
          src="https://open.spotify.com/embed/show/4YHaaQy9Fz830CZdT2fTRZ"
          width="100%"
          height="232"
          frameBorder="0"
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
          title="Wit & Grit Spotify Player"
        ></iframe>
      </div>

      {/* Episode Cards */}
      <div className="row">
        {episodes.slice(0, visibleCount).map((ep, index) => (
          <EpisodeCard
            key={index}
            title={ep.title}
            description={`${stripHtml(ep.description)} (${formatDate(ep.pubDate)})`}
            thumbnail={ep.thumbnail}
            spotifyUrl={ep.link}
          />
        ))}
      </div>

      {/* Load More Button */}
      {visibleCount < episodes.length && (
        <div className="mt-4">
          <button className="btn btn-outline-primary" onClick={handleLoadMore}>
            Load More Episodes
          </button>
        </div>
      )}
    </div>
  );
}

export default Podcast;