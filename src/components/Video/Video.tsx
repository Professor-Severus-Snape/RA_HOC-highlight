import TVideo from '../../models/TVideo';
import './video.css';

const Video = ({ url, views }: TVideo) => {
  return (
    <div className="item item-video">
      <iframe src={url} allow="autoplay; encrypted-media" allowFullScreen />
      <p className="views">Просмотров: {views}</p>
    </div>
  );
};

export default Video;
