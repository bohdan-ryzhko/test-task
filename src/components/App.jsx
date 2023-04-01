import { Header } from "./Header/Header";

import heroData from "../data/hero";
import { Hero } from "./Hero/Hero";

export const App = () => {
  return (
    <>
      <Header />
      <Hero heroData={heroData} />
    </>
  );
};
