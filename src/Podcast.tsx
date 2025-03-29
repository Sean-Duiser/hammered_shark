import EpisodeCard from './components/EpisodeCard';
import episodesData from './episodes.json';

interface Episode {
  title: string;
  description: string;
  thumbnail: string;
  spotifyUrl: string;
}

const episodes = episodesData as Episode[];

function Podcast() {
  return (
    <div className="container text-center" style={{ paddingTop: '80px' }}>
      <h1 className="mb-4">Listen to Wit & Grit</h1>
      <p className="lead mb-4">Stream our episodes right here or listen on Spotify!</p>

      <div className="mb-5">
        <iframe
          src="https://open.spotify.com/embed/show/4YHaaQy9Fz830CZdT2fTRZ"
          width="100%"
          height="232"
          frameBorder="0"
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
          title="Wit & Grit Podcast"
        ></iframe>
      </div>

      <div className="row">
        {episodes.map((ep, index) => (
          <EpisodeCard
            key={index}
            title={ep.title}
            description={ep.description}
            thumbnail={ep.thumbnail}
            spotifyUrl={ep.spotifyUrl}
          />
        ))}
      </div>
    </div>
  );
}

export default Podcast;
