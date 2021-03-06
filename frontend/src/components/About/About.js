import React from "react";
import "./style.css";
import ShareImage from "../../assets/charles-Lks7vei-eAg-unsplash.jpg";
import CatalogueImage from "../../assets/green-chameleon-s9CC2SKySJM-unsplash.jpg";
import PhilosopherImage from "../../assets/mike-gorrell-61cMb0WQAMA-unsplash.jpg";
import CommunityImage from "../../assets/perry-grone-lbLgFFlADrY-unsplash.jpg";

export default function About() {
  return (
    <section className="about">
      <h1>What is Philosoup?</h1>
      <div className="about-cards">
        <div>
          <p>
            {`We're focused on sharing thoughts and opinions about philosophers`}
          </p>
          <img src={ShareImage} alt="two people sharing thoughts" />
        </div>
        <div>
          <p>
            {`You can catalogue and review the philosophers you've read and
          studied`}
          </p>
          <img src={CatalogueImage} alt="person writing in a paper" />
        </div>
        <div>
          <p>{`Speak your mind about what you've learnd (or didn't)`}</p>
          <img src={PhilosopherImage} alt="philosopher bust in a forest" />
        </div>
        <div>
          <p>{`Help people choose their next trip in the soup of thinkers`}</p>
          <img src={CommunityImage} alt="people giving hands" />
        </div>
      </div>
    </section>
  );
}
