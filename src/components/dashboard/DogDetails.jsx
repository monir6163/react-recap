import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
const DogDetail = ({ data }) => {
  return (
    <div className="card lg:card-side bg-base-100 shadow-xl border border-slate-400 p-2">
      <figure>
        <img src={data?.img_url} alt="Album" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{data?.name}</h2>
        <div className="flex flex-wrap">
          <p>Price: ${data?.price}</p>
          <p>Stock: ${data?.stock}</p>
        </div>
        <p>{data?.description}</p>
        <div className="card-actions justify-end">
          <Link to="/dashboard/all-dogs">
            <button className="btn btn-primary">Back</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DogDetail;
