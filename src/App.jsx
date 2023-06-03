import { useState, useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Error404 from './components/Error404/Error404';
import imagesImported from './data/images.json';
import ImageCard from './components/ImageCard/ImageCard';
import ImageDetailsCard from './components/ImageDetailsCard/ImageDetailsCard';

export function Home({ id }) {
  const navigate = useNavigate();
  useEffect(() => {
    navigate(`image/${id}`);
  }, []);
  return <div></div>;
}

export function Image({ id }) {
  const navigate = useNavigate();
  useEffect(() => {
    navigate(`${id}`);
  }, []);
  return <div></div>;
}

function App() {
  const [index, setIndex] = useState(0);
  const [images, setImages] = useState(imagesImported);

  const handleRating = (id, rating) => {
    setImages(
      images.map((image, key) => {
        if (key == id) {
          let newImage = {
            ...image,
            rating: rating,
          };
          if (image.numberOfVotes === undefined) {
            newImage = { ...newImage, numberOfVotes: 1 };
          } else {
            newImage = { ...newImage, numberOfVotes: image.numberOfVotes + 1 };
          }
          return newImage;
        }
        return image;
      })
    );
  };
  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * (images.length - 0) + 0);
    setIndex(randomIndex);
  }, []);
  return (
    <>
      <div>
        <Routes>
          <Route path="/" element={<Home id={index} />} />
          <Route path="image" element={<Image id={index} />} />
          <Route
            path="image/:id"
            element={<ImageCard images={images} handleRating={handleRating} />}
          />
          <Route path="image/:id/details" element={<ImageDetailsCard />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
