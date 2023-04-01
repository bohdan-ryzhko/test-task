import { Header } from "./Header/Header";

import heroData from "../data/hero";
import { Hero } from "./Hero/Hero";

import { ListTeam } from "./ListTeam/ListTeam";

export const App = () => {
  return (
    <>
      <Header />
      <Hero heroData={heroData} />
      <ListTeam />
    </>
  );
};
