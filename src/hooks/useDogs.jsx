import { useContext } from "react";
import { DogsContext } from "../provider/DogProvider";

const useDogs = () => {
  const dogs = useContext(DogsContext);

  return dogs;
};

export default useDogs;
