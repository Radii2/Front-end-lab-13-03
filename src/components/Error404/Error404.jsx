import { useLocation } from 'react-router-dom';

const Error404 = () => {
  let location = useLocation();
  console.log(location);
  return (
    <div>
      <h1>Resource not found at {location.pathname}</h1>
    </div>
  );
};

export default Error404;
