import { Header } from "./Header/Header";

import heroData from "../data/hero";
import { Hero } from "./Hero/Hero";

import { ListTeam } from "./ListTeam/ListTeam";
import { FeedbackForm } from "./FeedbackForm/FeedbackForm";
import { UserMenu } from "./UserMenu/UserMenu";
import { useState } from "react";

export const App = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [onSignUp, setOnSignUp] = useState(false);
  const [user, setUser] = useState();

  return (
    <>
      <UserMenu
        user={user}
        setUser={setUser}
        onSignUp={onSignUp}
        setOnSignUp={setOnSignUp}
        toggleMenu={toggleMenu}
        setToggleMenu={setToggleMenu}
      />
      <Header
        user={user}
        onSignUp={onSignUp}
        setOnSignUp={setOnSignUp}
        setToggleMenu={setToggleMenu}
      />
      <Hero heroData={heroData} />
      <ListTeam />
      <FeedbackForm />
    </>
  );
};
