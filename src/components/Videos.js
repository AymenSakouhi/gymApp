import PropTypes from "prop-types";

const Videos = ({ embedId }) => {
  return (
    <div className="video-responsive">
      <iframe
        width="853"
        heigth="480"
        src={`https://www.youtube.com/embed/${embedId}`}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="Embedded youtube"
      />
    </div>
  );
};

Videos.defaultProps = {
  embedId: "r3h1Nf-wY6Y",
};

Videos.prototype = {
  embedId: PropTypes.string.isRequired,
};

export default Videos;
