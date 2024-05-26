/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { createContext, useState } from "react";
import { toast } from "react-toastify";

export const DogsContext = createContext(null);

const DogsProvider = ({ children }) => {
  const [loader, setLoader] = useState(false);
  const createDogs = async (data) => {
    setLoader(true);
    try {
      fetch("http://localhost:3000/dogs", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((res) => res.json())
        .then((d) => {
          toast.success("Dogs add success");
          setLoader(false);
        });
    } catch (error) {
      toast.error(error);
      setLoader(false);
    }
  };

  const updateDogs = async (data, id) => {
    setLoader(true);
    try {
      await fetch(`http://localhost:3000/dogs/${id}`, {
        method: "PATCH",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((res) => res.json())
        .then((d) => {
          toast.success("Dogs update success");
          setLoader(false);
        });
    } catch (error) {
      toast.error(error);
      setLoader(false);
    }
  };

  const deleteDogs = async (id, handleFilter) => {
    try {
      fetch(`http://localhost:3000/dogs/${id}`, {
        method: "DELETE",
        headers: {
          "Content-type": "application/json",
        },
      })
        .then((res) => res.json())
        .then((d) => {
          handleFilter(id);
          toast.success("Dogs delete success");
        });
    } catch (error) {
      toast.error(error);
    }
  };

  const dogsData = { createDogs, updateDogs, deleteDogs, loader };
  return (
    <DogsContext.Provider value={dogsData}>{children}</DogsContext.Provider>
  );
};

export default DogsProvider;
