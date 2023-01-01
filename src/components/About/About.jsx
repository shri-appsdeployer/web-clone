import React from "react";
import "./About.scss";
import Aboutmore from "./Aboutmore";
import about from "../../images/Data.png";

const About = () => {
  return (
    <div className="about-wrapper">

      <div className="about">
        <h2 className="about-heading">About</h2>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure
          voluptas neque nulla ratione fugiat cum?
        </p>

        <div className="info-wrap">
          <div className="info-img-wrap">
            <img src={about} alt="" />
          </div>

          <div className="info-content-wrap">
            <h4>Our Little Company</h4>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione
              eos consequuntur perspiciatis vero aut officiis culpa esse
              aliquam, beatae ullam ad distinctio sit unde, vel quas dolores
              voluptatum assumenda qui sed? Perferendis, laudantium quisquam?
              Nulla impedit aliquid, omnis reiciendis totam delectus suscipit
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, officia? 
            </p>
          </div>
        </div>
      </div>
      <Aboutmore/>
    </div>
  );
};

export default About;
