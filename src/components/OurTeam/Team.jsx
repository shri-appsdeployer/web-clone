import React from 'react';
import './Team.scss';
import team1 from '../../images/team1.jpg';
import team2 from '../../images/team2.jpg';
import team3 from '../../images/team3.jpg';
import team4 from '../../images/team4.jpg';

const Team = () => {
  return (
    <div className='team-wrapper'>
        <div className="team">
            <h2>Our Team</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque, quasi! Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, similique.</p>

            <div className="team-grid">

                <div className="grid-item">
                    <div className="team-img-wrap">
                        <img src={team1} alt="" />
                    </div>  
                    <div className='team-info'>
                        <h6>Micky Deo william</h6>
                        <p>Founder</p>
                        <div className="team-social">
                            <a href="/"><button><i class="fa-brands fa-facebook"></i></button></a>
                            <a href="/"><button><i class="fa-brands fa-instagram"></i></button></a>
                            <a href="/"><button><i class="fa-regular fa-envelope"></i></button></a>
                            <a href="/"><button><i class="fa-brands fa-linkedin"></i></button></a>
                        </div>
                    </div>
                </div>

                <div className="grid-item">
                    <div className="team-img-wrap">
                        <img src={team2} alt="" />
                    </div>  
                    <div className='team-info'>
                        <h6>Micky Deo</h6>
                        <p>Founder</p>
                        <div className="team-social">
                        <a href="/"><button><i class="fa-brands fa-facebook"></i></button></a>
                            <a href="/"><button><i class="fa-brands fa-instagram"></i></button></a>
                            <a href="/"><button><i class="fa-regular fa-envelope"></i></button></a>
                            <a href="/"><button><i class="fa-brands fa-linkedin"></i></button></a>
                        </div>
                    </div>
                </div>

                <div className="grid-item">
                    <div className="team-img-wrap">
                        <img src={team3} alt="" />
                    </div>  
                    <div className='team-info'>
                        <h6>Micky Deo</h6>
                        <p>Founder</p>
                        <div className="team-social">
                        <a href="/"><button><i class="fa-brands fa-facebook"></i></button></a>
                            <a href="/"><button><i class="fa-brands fa-instagram"></i></button></a>
                            <a href="/"><button><i class="fa-regular fa-envelope"></i></button></a>
                            <a href="/"><button><i class="fa-brands fa-linkedin"></i></button></a>
                        </div>
                    </div>
                </div>

                <div className="grid-item">
                    <div className="team-img-wrap">
                        <img src={team4} alt="" />
                    </div>  
                    <div className='team-info'>
                        <h6>Micky Deo</h6>
                        <p>Founder</p>
                        <div className="team-social">
                        <a href="/"><button><i class="fa-brands fa-facebook"></i></button></a>
                            <a href="/"><button><i class="fa-brands fa-instagram"></i></button></a>
                            <a href="/"><button><i class="fa-regular fa-envelope"></i></button></a>
                            <a href="/"><button><i class="fa-brands fa-linkedin"></i></button></a>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    </div>
  )
}

export default Team;