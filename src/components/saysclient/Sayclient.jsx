import React from 'react';
import './Sayclient.scss';
import team1 from '../../images/team1.jpg';
import team2 from '../../images/team2.jpg';
import team3 from '../../images/team3.jpg';

const Sayclient = () => {
  return (
    <div className="client-wrapper" >
        <div className="client">
            <h2>What our client says</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident dolor deserunt molestiae, ullam voluptatum est doloribus nostrum illo. Esse, placeat!</p>

            <div className="clients-grid">

                    <div className="grid-client-item">
                        <div className="client-qoute">
                              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero sapiente rerum in impedit incidunt voluptates accusantium hic ex. Quibusdam, id?</p>
                        </div>
                        <div className="client-info">
                          <img src={team1} alt="" />
                          <div>
                            <h6>John Bond</h6>
                            <p>Lorem ipsum dolor sit amet.</p>
                          </div>
                        </div>
                    </div>

                    <div className="grid-client-item">
                        <div className="client-qoute">
                              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero sapiente rerum in impedit incidunt voluptates accusantium hic ex. Quibusdam, id?</p>
                        </div>
                        <div className="client-info">
                          <img src={team2} alt="" />
                          <div>
                            <h6>John Bond</h6>
                            <p>Lorem ipsum dolor sit amet.</p>
                          </div>
                        </div>
                    </div>

                    <div className="grid-client-item">
                        <div className="client-qoute">
                              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero sapiente rerum in impedit incidunt voluptates accusantium hic ex. Quibusdam, id?</p>
                        </div>
                        <div className="client-info">
                          <img src={team3} alt="" />
                          <div>
                            <h6>John Bond</h6>
                            <p>Lorem ipsum dolor sit amet.</p>
                          </div>
                        </div>
                    </div>

            </div>
        </div>
    </div>
  )
}

export default Sayclient;