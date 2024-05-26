import { useLoaderData } from "react-router-dom";
import EditDog from "../../components/dashboard/EditDog";

const EditDogs = () => {
  const data = useLoaderData();

  return (
    <div className="flex justify-center">
      <EditDog data={data} />
    </div>
  );
};

export default EditDogs;
