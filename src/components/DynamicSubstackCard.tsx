import { useEffect, useState } from 'react';

interface SubstackPost {
  title: string;
  link: string;
  pubDate: string;
  description: string;
}

const DynamicSubstackCard: React.FC = () => {
  const [latestPost, setLatestPost] = useState<SubstackPost | null>(null);

  useEffect(() => {
    const fetchFeed = async () => {
      try {
        const response = await fetch(
          'https://api.rss2json.com/v1/api.json?rss_url=https://allinwithian.substack.com/feed'
        );
        const data = await response.json();

        if (data.items && data.items.length > 0) {
          const post = data.items[0];
          setLatestPost({
            title: post.title,
            link: post.link,
            pubDate: post.pubDate,
            description: post.description, // Substack summary HTML
          });
        }
      } catch (error) {
        console.error('Failed to fetch Substack post:', error);
      }
    };

    fetchFeed();
  }, []);

  if (!latestPost) return null;

  return (
    <div className="text-light p-4 text-center mt-4">
      <h2 style={{ fontFamily: 'Bebas Neue, Impact, sans-serif', color: '#00ffff' }}>
        {latestPost.title}
      </h2>
      <div
        className="mb-3 text-muted"
        style={{ fontSize: '1rem' }}
        dangerouslySetInnerHTML={{ __html: latestPost.description }}
      />
      <a
        href={latestPost.link}
        target="_blank"
        rel="noopener noreferrer"
        className="btn btn-primary mt-2"
      >
        Read the Full Post
      </a>
    </div>
  );
};

export default DynamicSubstackCard;
