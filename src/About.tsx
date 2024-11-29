import ianIsHammered from './assets/IanIsHammered Thumbnail.jpg';
import witAndGrit from './assets/W&G Thumbnail.jpg';
import blackAndBlue from './assets/B&B Thumbnail.jpg';

function About() {
  return (
    <div className="container text-center" style={{ paddingTop: '80px' }}>
      {/* About Header */}
      <h1 className="display-4 mb-4">About Us</h1>
      <p className="lead mb-5">We bring you unique podcasts with bold insights and unfiltered commentary.</p>
      
      {/* Podcast Descriptions */}
      <div className="row">
        {/* Ian Price is Hammered... On Sports! */}
        <div className="col-md-4 mb-4">
          <a
            href="https://open.spotify.com/show/4YHaaQy9Fz830CZdT2fTRZ"
            target="_blank"
            rel="noopener noreferrer"
            className="d-block h-100"
            style={{ textDecoration: 'none' }} // Remove underline on the link
          >
            <div className="card shadow-sm h-100">
              <img
                src={ianIsHammered}
                className="card-img-top"
                alt="Ian Price is Hammered on Sports"
                style={{
                  minHeight: '400px', // Ensure a minimum height of 400px for all images
                  objectFit: 'cover', // Ensures the image fills the space nicely
                  width: '100%',
                }}
              />
              <div
                className="card-body d-flex flex-column" // Use flex to position content inside card-body
                style={{ padding: '1rem' }}
              >
                <h5 className="card-title" style={{ fontSize: '1.3rem', textAlign: 'center', marginBottom: '0.5rem' }}>
                  Ian Price is Hammered... On Sports!
                </h5>
                <p className="card-text" style={{ fontSize: '1rem', textAlign: 'center', flexGrow: 1, display: 'flex', alignItems: 'center' }}>
                  Host Ian Price is "Hammered" on sports, delivering unfiltered banter, captivating stories, and the occasional betting insight.
                </p>
              </div>
            </div>
          </a>
        </div>
        
        {/* Black and Blue Bulletin */}
        <div className="col-md-4 mb-4">
          <a
            href="https://open.spotify.com/show/4YHaaQy9Fz830CZdT2fTRZ"
            target="_blank"
            rel="noopener noreferrer"
            className="d-block h-100"
            style={{ textDecoration: 'none' }} // Remove underline on the link
          >
            <div className="card shadow-sm h-100">
              <img
                src={blackAndBlue}
                className="card-img-top"
                alt="Black and Blue Bulletin"
                style={{
                  minHeight: '400px', // Ensure a minimum height of 400px for all images
                  objectFit: 'cover', // Ensures the image fills the space nicely
                  width: '100%',
                }}
              />
              <div
                className="card-body d-flex flex-column" // Use flex to position content inside card-body
                style={{ padding: '1rem' }}
              >
                <h5 className="card-title" style={{ fontSize: '1.3rem', textAlign: 'center', marginBottom: '0.5rem' }}>
                  Black and Blue Bulletin
                </h5>
                <p className="card-text" style={{ fontSize: '1rem', textAlign: 'center', flexGrow: 1, display: 'flex', alignItems: 'center' }}>
                  Dive into all things Carolina Panthers. Whether you're a die-hard Panthers fan or a casual fan, Black and Blue Bulletin covers the latest in Panthers' football with insights as bold as the team's colors.
                </p>
              </div>
            </div>
          </a>
        </div>

        {/* Wit and Grit */}
        <div className="col-md-4 mb-4">
          <a
            href="https://open.spotify.com/show/4YHaaQy9Fz830CZdT2fTRZ"
            target="_blank"
            rel="noopener noreferrer"
            className="d-block h-100"
            style={{ textDecoration: 'none' }} // Remove underline on the link
          >
            <div className="card shadow-sm h-100">
              <img
                src={witAndGrit}
                className="card-img-top"
                alt="Wit and Grit"
                style={{
                  minHeight: '400px', // Ensure a minimum height of 400px for all images
                  objectFit: 'cover', // Ensures the image fills the space nicely
                  width: '100%',
                }}
              />
              <div
                className="card-body d-flex flex-column" // Use flex to position content inside card-body
                style={{ padding: '1rem' }}
              >
                <h5 className="card-title" style={{ fontSize: '1.3rem', textAlign: 'center', marginBottom: '0.5rem' }}>
                  Wit and Grit
                </h5>
                <p className="card-text" style={{ fontSize: '1rem', textAlign: 'center', flexGrow: 1, display: 'flex', alignItems: 'center' }}>
                  Ian uses stats and trends for betting, while co-host Sean Duiser relies on his unshakable gut feelings. Together, they deliver a podcast where numbers meet intuition.
                </p>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}

export default About;
