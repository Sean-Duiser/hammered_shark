const SubstackPostEmbed: React.FC = () => {
  return (
    <div className="d-flex justify-content-center mt-5">
      <div
        style={{
          maxWidth: '100%',
          overflow: 'hidden',
          borderRadius: '12px',
          boxShadow: '0 0 12px rgba(0, 255, 255, 0.2)'
        }}
      >
        <iframe
          src="https://allinwithian.substack.com/embed"
          width="480"
          height="320"
          style={{
            border: '1px solid #EEE',
            background: 'white',
            width: '100%',
            maxWidth: '100%'
          }}
          frameBorder="0"
          scrolling="no"
        ></iframe>
      </div>
    </div>
  );
};

export default SubstackPostEmbed;
