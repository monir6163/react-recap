import { useLoaderData } from "react-router-dom";
import Details from "../components/Details";

const DogDetails = () => {
  const data = useLoaderData();
  return (
    <div className="flex px-4 py-4 flex-wrap justify-center">
      <Details data={data} />
    </div>
  );
};

export default DogDetails;
