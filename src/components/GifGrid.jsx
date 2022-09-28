import { GifItem } from "./GifItem";
import { /* useState */ useEffect } from "react";
import { useFetchGifs } from "../hooks/useFetchGifs";
import { getGifs } from "../helpers/getGifs";

export const GifGrid = ({ category }) => {
  /*     const [counter,setCounter] = useState(10); */

  const { images, isLoading } = useFetchGifs(category);

  useEffect(() => {
    getGifs(category);
  }, []);

  return (
    <>
      <h3>{category}</h3>
      {isLoading && <h2>Gifs...</h2>}

      <div className="card-grid">
        {images.map((image) => (
          <GifItem key={image.id} {...image} />
        ))}
      </div>
    </>
  );
};
