import React from "react";
import "./Services.scss";
import dimensions from '../../images/3d-cube.png';
import drafting from '../../images/idea.png';
import kitchen from '../../images/kitchen.png';
import signboard from '../../images/signboard.png';
import sofa from '../../images/sofa.png';
import table from '../../images/table.png';



const Services = () => {
  return (
    <div className="services-wrapper">

    <div className="services">
      <h2 className="services-heading">Our Services</h2>
      <hr />
      <p className="services-para">Services Which We Offer And Expertise In Home And Commercial Interior Design Service & Solutions in India </p>
      <div className="services-grid">

        <div className="services-grid-item">
         <div className="services-img-wrap">
             <img src={dimensions} alt=""  />
         </div>
             <div>
                <h5>2D/ 3D Design Layout</h5>
                <p>We Do All Types Of 2D And 3D design Elegant Innovative Luxurious Computerised Design Interior And Exterior Design Which Is Already Vastu Approved Design</p>
             </div>
        </div>

        <div className="services-grid-item">
        <div className="services-img-wrap">
            <img src={drafting} alt="" />
        </div>
             <div>
                <h5>Civil Space Planning</h5>
                <p>We Do All Types Of Civil Engineering Planning For Home And Other Commercial Interior And Architectural Drawing, So That We Can Bring Creativity Along With Innovation In Your Space</p>
             </div>
        </div>

        <div className="services-grid-item">
        <div className="services-img-wrap">
              <img src={sofa} alt="" />
        </div>
             <div>
                <h5>Residential Interior</h5>
                <p>We Do All Types Of Interior Designing, Decoration And Furnishing Of Bed Room, Living Room, Dinning Room, Hall Room, Home Entertainment Room, Kids Room, Study Room, Guest Room So That Each Room Can Perfectly Brighten Up Your Environment And Enhance Your Mood</p>
             </div>
        </div>
        <div className="services-grid-item">
        <div className="services-img-wrap">

        <img src={kitchen} alt="" />
        </div>
             <div>
                <h5>Modular Kitchen</h5>
                <p>We Do All Types Of Modular Kitchen Designing And Decoration And Luxury Kitchen Designing So To Make Your Kitchen Your Favourite Place</p>
             </div>
        </div>

        <div className="services-grid-item">
        <div className="services-img-wrap">

        <img src={table} alt="" />
        </div>
             <div>
                <h5>Furniture & Fixture</h5>
                <p>We Make Custom Design Furniture And Deals With All Types Of Other Modular Furniture And Fixture, So That You Can Get Exactly What You Want</p>
             </div>
        </div>

        <div className="services-grid-item">
        <div className="services-img-wrap">

        <img src={signboard} alt="" />
        </div>
             <div>
                <h5>Restuarants & Cafeteria</h5>
                <p>All Types Of Interior Designing For Restuarant, Coffee Shops And Cafeteria, So That People Get A Reason To Spend More Time In Your Place</p>
             </div>
        </div>


      </div>
    </div>
    
</div>
  );
};

export default Services;
