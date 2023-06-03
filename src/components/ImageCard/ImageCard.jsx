import { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import Stars from '../Stars/Stars';
import './ImageCard.css';

const ImageCard = ({ images, handleRating }) => {
  const [image, setImage] = useState({});
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    setImage(images[id]);
  }, [images, id]);
  console.log(image);
  return (
    image && (
      <div className="page">
        <div className="image-card">
          {id != 0 ? (
            <div
              className="arrow-block"
              onClick={() => navigate(`/image/${parseInt(id) - 1}`)}
            >
              <h3 className="arrow">{'<'}</h3>
            </div>
          ) : (
            <div className="empty-arrow-block"></div>
          )}
          <div className="image-content">
            <h1>
              <p>
                {image.author} - {image.title}
              </p>
              <p>({image.dateOfPublishing})</p>
            </h1>
            <br />
            <Link
              className="details-link"
              to="details"
              state={{ image: image }}
            >
              <img
                src={image.address}
                placeholder="image..."
                width="500px"
                height="500px"
              />
            </Link>

            <Stars rating={image.rating || 0} id={id} onClick={handleRating} />
            <div>
              <h3>
                Średnia ocen:{' '}
                {image.rating && image.numberOfVotes
                  ? image.rating / image.numberOfVotes
                  : 0}
              </h3>
            </div>
          </div>
          {id != images.length - 1 ? (
            <div
              className="arrow-block"
              onClick={() => navigate(`/image/${parseInt(id) + 1}`)}
            >
              <h3 className="arrow">{'>'}</h3>
            </div>
          ) : (
            <div className="empty-arrow-block"></div>
          )}
        </div>
      </div>
    )
  );
};

export default ImageCard;
