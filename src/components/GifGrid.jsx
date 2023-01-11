import { useFetchHook } from "../hooks/useFetchHook";
import { GifItem } from "./GifItem";

export const GifGrid = ({ category }) => {
  const { gifs, isLoading } = useFetchHook(category);

  return (
    <>
      <h3>{category}</h3>

      {isLoading && <p>Loading...</p>}

      <div className="card-grid">
        {gifs.map((image) => (
          <GifItem key={image.id} {...image} />
        ))}
      </div>
    </>
  );
};

// export default GifGrid;
