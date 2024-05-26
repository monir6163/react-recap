import { useLoaderData } from "react-router-dom";
import DogDetail from "../../components/dashboard/DogDetails";

const DetailsDashboard = () => {
  const data = useLoaderData();
  return (
    <div className="flex px-4 py-4 flex-wrap justify-center">
      <DogDetail data={data} />
    </div>
  );
};

export default DetailsDashboard;
