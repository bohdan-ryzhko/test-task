import { Header } from "./Header/Header";

import heroData from "../data/hero";
import { Hero } from "./Hero/Hero";

import { ListTeam } from "./ListTeam/ListTeam";
import { FeedbackForm } from "./FeedbackForm/FeedbackForm";

export const App = () => {
  return (
    <>
      <Header />
      <Hero heroData={heroData} />
      <ListTeam />
      <FeedbackForm />
    </>
  );
};
