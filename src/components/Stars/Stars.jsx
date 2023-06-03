import { FaStar } from 'react-icons/fa';
import './Stars.css';

const Stars = ({ rating, onClick, id }) => {
  return (
    <div>
      {Array.from({ length: 5 }, (_, i) => {
        i + 1;
      }).map((n, index) => {
        return (
          <FaStar
            className="stars"
            key={index}
            color={index < rating ? 'yellow' : 'grey'}
            onClick={() => onClick(id, index + 1)}
          />
        );
      })}
    </div>
  );
};

export default Stars;
