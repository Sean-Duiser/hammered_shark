import ianIsHammered from './assets/IanIsHammered Thumbnail.jpg';
import witAndGrit from './assets/W&G Thumbnail.jpg';
import blackAndBlue from './assets/B&B Thumbnail.jpg';

function About() {
  return (
    <div className="container text-center" style={{ paddingTop: '15%' }}>
      {/* About Header */}
      <h1 className="display-4 mb-4">About Us</h1>
      <p className="lead mb-5">We bring you unique podcasts with bold insights and unfiltered commentary.</p>

      {/* Podcast Descriptions */}
      <div className="row">
        {/* Ian Price is Hammered... On Sports! */}
        <div className="col-md-4 mb-4">
          <div className="card d-flex flex-column h-100">
            <img src={ianIsHammered} className="card-img-top" alt="Ian Price is Hammered on Sports" />
            <div className="card-body d-flex flex-column">
              <h5 className="card-title">Ian Price is Hammered... On Sports!</h5>
              <p className="card-text">Host Ian Price is "Hammered" on sports, delivering unfiltered banter, captivating stories, and the occasional betting insight.</p>
            </div>
          </div>
        </div>

        {/* Black and Blue Bulletin */}
        <div className="col-md-4 mb-4">
          <div className="card d-flex flex-column h-100">
            <img src={blackAndBlue} className="card-img-top" alt="Black and Blue Bulletin" />
            <div className="card-body d-flex flex-column">
              <h5 className="card-title">Black and Blue Bulletin</h5>
              <p className="card-text">Dive into all things Carolina Panthers. Whether you're a die-hard Panthers fan or a casual fan, Black and Blue Bulletin covers the latest in Panthers' football with insights as bold as the team's colors.</p>
            </div>
          </div>
        </div>

        {/* Wit and Grit */}
        <div className="col-md-4 mb-4">
          <div className="card d-flex flex-column h-100">
            <img src={witAndGrit} className="card-img-top" alt="Wit and Grit" />
            <div className="card-body d-flex flex-column">
              <h5 className="card-title">Wit and Grit</h5>
              <p className="card-text">Ian uses stats and trends for betting, while co-host Sean Duiser relies on his unshakable gut feelings. Together, they deliver a podcast where numbers meet intuition.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="mt-5">
        <p className="lead">Stay connected and tune in to our podcasts!</p>
        <a href="https://www.facebook.com/HammeredShark" target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-lg">
          Visit Our Social!
        </a>
      </div>
    </div>
  );
}

export default About;
