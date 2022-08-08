import React from 'react';
import banner from '../images/about-banner.jpg';
import profImg from '../images/user.jpg';
import { FaRegAddressCard } from 'react-icons/fa';
import { FaGithubSquare } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import wendy from '../images/wendy.jpg';
import alec from '../images/alec.jpg';
import evie from '../images/evie.jpg';




class About extends React.Component{

    render(){
        return (
            <div className='about-page'>
                <div className='about-banner'>
                    <img src={banner} alt="banner" />
                    <div className='about-text'>
                        <h1 className='about-title'>Meal'in Mission</h1>
                        <p className='about-des'>Meal'in was a group project made by 4 skilled developers who love food. It was built with a Node.js, Express and MongoDB backend and a React/Redux frontend for improving the quality of life.</p>
                        <br />
                        <p className='about-des'>This web app that allows users to easily discover various recipes. Users can use our mealplan tool to plan weekly meal based on the automatically generated nutrition value. Besides, it allows users to upload their exclusive recipe and rates others recipe. There are more features waiting for you to explore...</p>
                        <button className='team-button'><a href="#about">Our Team</a></button>
                    </div>
                </div>

                    <div className='background-color'>
                    <div className='team-profile'>
                        <h1 className='team-profile-title' id="about">OUR AMAZING TEAM</h1>
                    <div className="profile-gallery">
                        
                        <div><img src={wendy} alt="profile-img" className='about-profile-img' /></div>
                        <div className="p-desc">
                            <div>
                                <div className='job-title'>Team Lead</div>
                                <div className='profile-name'>Wendy Shi</div>
                                    <div className='personal-des'>Wendy is a full stack software engineer who's proficient in Javascript, Python, React.js, Redux.js, Ruby and Ruby on Rails. She's currently looking for  opportunities to work as a full-stack, front-end or back-end software engineer.</div>
                            </div>

                            <div className='social-media'>
                                    <a href="https://www.linkedin.com/in/wendy-shi/" target="_blank" rel="noopener noreferrer" className='social-icon'><FaLinkedin style={{color: "green", fontSize:"35px"}} /></a>
                                    <a href="https://github.com/shiwen1209" target="_blank" rel="noopener noreferrer" className='social-icon'><FaGithubSquare style={{ color: "green", fontSize: "35px" }} /></a>
                                <a href="http://" target="_blank" rel="noopener noreferrer" className='social-icon'><FaRegAddressCard style={{ color: "green", fontSize: "35px" }}/></a>
                            </div>
                        </div>
                    </div>
                    

                    <div className="profile-gallery">

                        <div><img src={profImg} alt="profile-img" className='about-profile-img' /></div>
                        <div className="p-desc">
                            <div>
                                <div className='job-title'>Backend Lead</div>
                                <div className='profile-name'>Charlie Xu</div>
                                    <div className='personal-des'>Charlie is a fast learner who's always eager to explore different technologies and challenge himself. He has talent and a keen interest in AI. He mastered JavaScript, Ruby, Express, React, Redux and MongoDB within four months of learning at Bootcamp.</div>
                            </div>

                            <div className='social-media'>
                                    <a href="https://www.linkedin.com/in/charlie-xu-8a1731150/" target="_blank" rel="noopener noreferrer"className='social-icon'><FaLinkedin style={{ color: "green", fontSize: "35px" }} /></a>
                                    <a href="https://github.com/ForgoneReality" target="_blank" rel="noopener noreferrer" className='social-icon'><FaGithubSquare style={{ color: "green", fontSize: "35px" }} /></a>
                                <a href="http://" target="_blank" rel="noopener noreferrer" className='social-icon'><FaRegAddressCard style={{ color: "green", fontSize: "35px" }} /></a>
                            </div>
                        </div>
                    </div>

                    <div className="profile-gallery">

                        <div><img src={alec} alt="profile-img" className='about-profile-img' /></div>
                        <div className="p-desc">
                            <div>
                                <div className='job-title'>UI/UX Lead</div>
                                    <div className='profile-name'>Alec Choy</div>
                                    <div className='personal-des'>Alec is a software engineer with an educational background in Business Economics from UC Riverside. He has always been interested in tech so he immediately dove into learning as much as he could. As a result of that effort, He's now a software engineer experienced in JavaScript, React, Redux, Ruby, Rails, HTML, CSS, MongoDB, Node, and Express.</div>
                            </div>

                            <div className='social-media'>
                                    <a href="https://www.linkedin.com/in/alec-choy-387aab13b/" target="_blank" rel="noopener noreferrer" className='social-icon'><FaLinkedin style={{ color: "green", fontSize: "35px" }} /></a>
                                    <a href="https://github.com/Alecchoy" target="_blank" rel="noopener noreferrer" className='social-icon'><FaGithubSquare style={{ color: "green", fontSize: "35px" }} /></a>
                                <a href="http://" target="_blank" rel="noopener noreferrer" className='social-icon'><FaRegAddressCard style={{ color: "green", fontSize: "35px" }} /></a>
                            </div>
                        </div>
                    </div>

                    <div className="profile-gallery">

                        <div><img src={evie} alt="profile-img" className='about-profile-img' /></div>
                        <div className="p-desc">
                            <div>
                                <div className='job-title'>Frontend Lead</div>
                                <div className='profile-name'>Evie Zeng</div>
                                    <div className='personal-des'>Evie as a full stack software developer, she has enjoyed using Ruby, JavaScript, React/Redux, Ruby on Rails, PostgreSQL, MongoDB, Node, CSS, and HTML in her projects. Currently, she self-learning Python. She always finding time to learn more!</div>
                            </div>

                            <div className='social-media'>
                                    <a href="https://www.linkedin.com/in/evie-zeng-863a3622a/" target="_blank" rel="noopener noreferrer" className='social-icon'><FaLinkedin style={{ color: "green", fontSize: "35px" }} /></a>
                                    <a href="https://github.com/evieeee123" target="_blank" rel="noopener noreferrer" className='social-icon'><FaGithubSquare style={{ color: "green", fontSize: "35px" }} /></a>
                                <a href="http://" target="_blank" rel="noopener noreferrer" className='social-icon'><FaRegAddressCard style={{ color: "green", fontSize: "35px" }} /></a>
                            </div>
                        </div>
                    </div>

                </div>

                </div>

            </div>
        )
    }
}

export default About;