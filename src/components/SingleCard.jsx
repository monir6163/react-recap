import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
const SingleCard = ({ dog }) => {
  return (
    <div className="card glass">
      <figure>
        <img src={dog?.img_url} alt="car!" />
      </figure>
      <div className="card-body text-center text-wrap">
        <h2 className="card-title justify-center text-wrap">{dog?.name}</h2>
        <p>Price: ${dog?.price}</p>
        <div className="card-actions justify-center">
          <Link to={`/dogs/${dog?.id}`}>
            <button className="btn btn-primary">See Details</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SingleCard;
