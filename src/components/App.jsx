import { Header } from "./Header/Header";

import heroData from "../data/hero";
import { Hero } from "./Hero/Hero";

import { ListTeam } from "./ListTeam/ListTeam";
import { FeedbackForm } from "./FeedbackForm/FeedbackForm";
import { AuthProvider } from "./AuthProvider/AuthProvider";

export const App = () => {

  return (
    <>
      {/* <AuthProvider /> */}
      <Header />
      <Hero heroData={heroData} />
      <ListTeam />
      <FeedbackForm />
    </>
  );
};
