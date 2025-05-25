import { useEffect, useRef } from 'react';

const SubstackSignup: React.FC = () => {
  const embedRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scriptId = 'custom-substack-script';

    if (!document.getElementById(scriptId)) {
      const script = document.createElement('script');
      script.src = 'https://substackapi.com/widget.js';
      script.async = true;
      script.id = scriptId;
      document.body.appendChild(script);
    }

    (window as any).CustomSubstackWidget = {
      substackUrl: "allinwithian.substack.com",
      placeholder: "you@example.com",
      buttonText: "Subscribe",
      theme: "custom",
      colors: {
        primary: "#00ffff",
        input: "#111111",
        email: "#00ffff",
        text: "#ffffff"
      }
    };

    const interval = setInterval(() => {
      if ((window as any).SubstackWidgetMount) {
        (window as any).SubstackWidgetMount();
        clearInterval(interval);
      }
    }, 200);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="d-flex justify-content-center mt-5 w-100">
      <div className="shark-breach signup-header-overlay text-center text-light w-100 p-4 rounded" style={{ maxWidth: '800px' }}>
        <h2 className="mb-2" style={{ color: '#00ffff', fontFamily: 'Bebas Neue, Impact, sans-serif' }}>
          All-In With Ian 🦈
        </h2>
        <p className="mb-4 text-muted" style={{ fontSize: '1rem' }}>
          Weekly football bets, unfiltered takes, and the S.H.A.R.K. Scale grading system.
          Get it all—straight to your inbox.
        </p>

        <div id="custom-substack-embed" ref={embedRef} />
      </div>
    </div>
  );
};

export default SubstackSignup;
