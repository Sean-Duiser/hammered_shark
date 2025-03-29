import { useEffect, useState } from 'react';
import Parser from 'rss-parser';
import EpisodeCard from './components/EpisodeCard';

interface Episode {
  title: string;
  link: string;
  pubDate: string;
  contentSnippet: string;
  enclosure?: {
    url: string;
  };
  itunes?: {
    image: string;
  };
}

const parser = new Parser({
  customFields: {
    item: ['itunes:image']
  }
});

const PODCAST_RSS_URL = 'https://anchor.fm/s/ee587674/podcast/rss';
const EPISODES_PER_PAGE = 4;

function Podcast() {
  const [episodes, setEpisodes] = useState<Episode[]>([]);
  const [visibleCount, setVisibleCount] = useState(EPISODES_PER_PAGE);

  useEffect(() => {
    const fetchFeed = async () => {
      try {
        const feed = await parser.parseURL(PODCAST_RSS_URL);
        setEpisodes(feed.items as Episode[]);
      } catch (err) {
        console.error('Failed to fetch RSS feed:', err);
      }
    };

    fetchFeed();
  }, []);

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + EPISODES_PER_PAGE);
  };

  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString(undefined, {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="container text-center" style={{ paddingTop: '80px' }}>
      <h1 className="mb-4">Wit & Grit – Latest Episodes</h1>
      <p className="lead mb-4">Auto-updating feed of podcast episodes, fresh from the mic 🎙️</p>

      {/* Embedded Spotify Player */}
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
            description={`${ep.contentSnippet} (${formatDate(ep.pubDate)})`}
            thumbnail={ep.itunes?.image || '/images/fallback.jpg'}
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
