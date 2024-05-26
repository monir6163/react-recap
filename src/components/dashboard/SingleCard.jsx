import { BiPencil, BiTrash } from "react-icons/bi";
import { BsEye } from "react-icons/bs";
import { Link } from "react-router-dom";
import useDogs from "../../hooks/useDogs";

/* eslint-disable react/prop-types */
const SingleCard = ({ dog, handleFilter }) => {
  const { deleteDogs } = useDogs();

  const handleDelete = async (id) => {
    const isConfirmed = window.confirm("Are you sure you want to Delete?");
    if (isConfirmed) {
      await deleteDogs(id, handleFilter);
    }
  };

  return (
    <div className="card glass">
      <figure>
        <img src={dog?.img_url} alt="car!" />
      </figure>
      <div className="card-body text-center text-wrap">
        <h2 className="card-title justify-center text-wrap">{dog?.name}</h2>
        <p>Price: ${dog?.price}</p>
        <div className="card-actions justify-center">
          <Link to={`edit/${dog?.id}`}>
            <button className="btn btn-warning">
              <BiPencil size={20} />
            </button>
          </Link>

          <button
            className="btn btn-error"
            onClick={() => handleDelete(dog?.id)}
          >
            <BiTrash size={20} />
          </button>

          <Link to={`${dog?.id}`}>
            <button className="btn btn-primary">
              <BsEye size={20} />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SingleCard;
