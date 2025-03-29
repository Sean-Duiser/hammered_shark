interface EpisodeCardProps {
  title: string;
  description: string;
  thumbnail: string;
  spotifyUrl: string;
}

function EpisodeCard({ title, description, thumbnail, spotifyUrl }: EpisodeCardProps) {
  return (
    <div className="col-md-6 mb-4">
      <div className="card h-100 shadow">
        <img src={thumbnail} className="card-img-top" alt={title} />
        <div className="card-body d-flex flex-column">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
          <a
            href={spotifyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary mt-auto"
          >
            Listen on Spotify
          </a>
        </div>
      </div>
    </div>
  );
}

export default EpisodeCard;
