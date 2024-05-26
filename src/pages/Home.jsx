import { useLoaderData } from "react-router-dom";
import According from "../components/According";
import DogsCard from "../components/DogsCard";
import Hero from "../components/Hero";

const Home = () => {
  const dogs = useLoaderData();
  return (
    <>
      <Hero />
      <DogsCard dogs={dogs?.slice(0, 3)} />
      <According />
    </>
  );
};

export default Home;
