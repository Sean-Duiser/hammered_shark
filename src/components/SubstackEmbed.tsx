import { useEffect } from 'react';

const SubstackPostEmbed: React.FC = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://substack.com/embedjs/embed.js';
    script.async = true;
    script.charset = 'utf-8';
    script.id = 'substack-post-script';

    // Prevent duplicate script
    if (!document.getElementById('substack-post-script')) {
      document.body.appendChild(script);
    }

    return () => {
      const existingScript = document.getElementById('substack-post-script');
      if (existingScript) {
        document.body.removeChild(existingScript);
      }
    };
  }, []);

  return (
    <div className="row justify-content-center mt-5">
      <div className="col-12 col-md-10 col-lg-8">
        <div className="substack-post-embed p-4 bg-light border rounded">
          <p lang="en">Welcome to <strong>All-In With Ian</strong> by Ian Price</p>
          <p>
            Featuring the Hammered Stack strategy—with each one graded the following week on the S.H.A.R.K. Scale.
          </p>
          <a
            data-post-link
            href="https://allinwithian.substack.com/p/welcome-to-all-in-with-ian"
            target="_blank"
            rel="noopener noreferrer"
          >
            Read on Substack
          </a>
        </div>
      </div>
    </div>
  );
};

export default SubstackPostEmbed;
