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

      {/* Embedded Spotify Player */}
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

      {/* Episode Listing */}
      <div className="row">
        {episodes.map((ep, index) => (
          <div className="col-md-6 mb-4" key={index}>
            <div className="card h-100 shadow">
              <img src={ep.thumbnail} className="card-img-top" alt={ep.title} />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">{ep.title}</h5>
                <p className="card-text">{ep.description}</p>
                <a
                  href={ep.spotifyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary mt-auto"
                >
                  Listen on Spotify
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Podcast;
