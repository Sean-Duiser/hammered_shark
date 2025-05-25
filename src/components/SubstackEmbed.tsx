import { useEffect } from 'react';

const SubstackEmbed: React.FC = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://substack.com/embedjs/embed.js';
    script.async = true;
    script.charset = 'utf-8';

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="substack-post-embed mt-5 p-4 bg-light border rounded">
      <p lang="en">Welcome to <strong>All-In With Ian</strong> by Ian Price</p>
      <p>Featuring the Hammered Stack strategy—with each one graded the following week on the S.H.A.R.K. Scale.</p>
      <a 
        data-post-link 
        href="https://allinwithian.substack.com/p/welcome-to-all-in-with-ian"
        target="_blank"
        rel="noopener noreferrer"
      >
        Read on Substack
      </a>
    </div>
  );
};

export default SubstackEmbed;
