import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";

export const useFetchHook = (category) => {
  const [gifs, setGifs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getImages = async () => {
    const newImages = await getGifs(category);
    setGifs(newImages);
    setIsLoading(false);
  };

  useEffect(() => {
    // getGifs(category).then((newImages) => setGifs(newImages));

    getImages();
    // if the array is empty, it only will be called at the beginning
  }, []);
  return {
    gifs,
    isLoading,
  };
};
