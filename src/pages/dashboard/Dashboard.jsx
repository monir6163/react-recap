import useAuth from "../../hooks/useAuth";

const Dashboard = () => {
  const { user } = useAuth();
  return (
    <div className="card text-wrap card-side bg-base-100 rounded-lg shadow-2xl border">
      <figure>
        <img
          src={user?.photoURL || ""}
          alt="Movie"
          className="rounded-full ml-2"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{user?.displayName}</h2>
        <p>Email: {user?.email}</p>
        <p>UID: {user?.uid}</p>
      </div>
    </div>
  );
};

export default Dashboard;
