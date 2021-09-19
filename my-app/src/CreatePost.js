import React, { useState } from "react";
import "./CreatePost.css";

import YogaForm from "./YogaForm.js";
import DietForm from "./DietForm";
import StrengthForm from "./StrengthForm";
import CardioForm from "./CardioForm";
import SportForm from "./SportForm";

import { ReactComponent as Logo } from "./assets/logo.svg";
import { ReactComponent as Diet } from "./assets/restaurant_black_24dp.svg";
import { ReactComponent as Yoga } from "./assets/self_improvement_black_24dp.svg";
import { ReactComponent as Sports } from "./assets/sports_basketball_black_24dp.svg";
import { ReactComponent as Strength } from "./assets/fitness_center_black_24dp (1).svg";
import { ReactComponent as Cardio } from "./assets/directions_run_black_24dp.svg";

function CreatePost() {
  // const [isOpen, setIsOpen] = useState();
  const [template, setTemplate] = useState("");

  return (
    <div className="CreatePost">
      <Logo className="logo" />
      <div className="title">
        <h1>Inspire others with your experiences</h1>
        <p className="choose">
          Choose a category of posts and use our templates to share your fitness
          experience with others.
        </p>
        <h2 className="theme">What is the main theme of your experience?</h2>
        <div className="categorydiv">
          <div onClick={() => setTemplate("Diet")} className="categorybtn">
            <Diet />
            <p>Food and Nutrition</p>
          </div>
          <div onClick={() => setTemplate("Yoga")} className="categorybtn">
            <Yoga />
            <p>Yoga and Meditation</p>
          </div>
          <div onClick={() => setTemplate("Strength")} className="categorybtn">
            <Strength />
            <p>Strength Training</p>
          </div>
          <div onClick={() => setTemplate("Cardio")} className="categorybtn">
            <Cardio />
            <p>Cardio Training</p>
          </div>
          <div onClick={() => setTemplate("Sports")} className="categorybtn">
            <Sports />
            <p>Sports Training</p>
          </div>
        </div>
        <div className="forms">
          {template === "Diet" && <DietForm />}
          {template === "Yoga" && <YogaForm />}
          {template === "Cardio" && <CardioForm />}
          {template === "Sports" && <SportForm />}
          {template === "Strength" && <StrengthForm />}
        </div>
      </div>
    </div>
  );
}

export default CreatePost;
