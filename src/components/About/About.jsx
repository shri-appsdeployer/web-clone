import React from "react";
import "./About.scss";
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
              quas ad, quo placeat repudiandae provident explicabo odit. Lorem
              ipsum dolor sit, amet consectetur adipisicing elit. Quaerat minus
              aliquam voluptates. Velit saepe tempore facere nam debitis eos
              fugiat nisi sit corporis nostrum pariatur libero obcaecati
              veritatis ab excepturi at possimus quam nobis id necessitatibus,
              ea officiis. Enim, quo?
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
