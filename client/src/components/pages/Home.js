import React from 'react';
import styled from 'styled-components';

import cartoon from '../../images/cartoon.png';
//import logo from '../../images/logo.png';
import logo from '../../images/logo2023.png';

import html from '../../images/html.png';
import css from '../../images/css.png';
import javascript from '../../images/javascript.png';
import react from '../../images/react.png';
import python from '../../images/python.png';
import redux from '../../images/redux.png';
import node from '../../images/node.png';
import express from '../../images/express.png';
import git from '../../images/git.png';
import heroku from '../../images/heroku.jpg';
import postgresql from '../../images/postgresql.png';
import aws from '../../images/aws.png';
import java from '../../images/java.png';
import linux from '../../images/linux.png';
import mysql from '../../images/mysql.png';
import github from '../../images/github.png';
import spring from '../../images/spring.png';
import angular from '../../images/angular.png';
import kibana from '../../images/kibana.jpg';
import cassandra from '../../images/cassandra.jpg';
import flask from '../../images/flask.jpg';
import postman from '../../images/postman.jpg';
import gitlab from '../../images/gitlab.jpg';
import maven from '../../images/maven.jpg';

import dollar from '../../images/dollar.jpg';
import flashcards from '../../images/flashcards.jpg';

import { Link } from 'react-router-dom';


function Home() {
    return (

        <HomeContainer className="main-home">
            <div className="home-top py-4" style={{display: "flex", alignItems: "center"}}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-12">
                            <h1 className="name text-uppercase" style={{marginTop: "18%"}}>Joe Idelson</h1>
                            <h4 className="jobTitle text-uppercase">Full Stack Web Developer</h4>
                            <div className="site-buttons">
                                <div className="d-flex flex-row">
                                    <Link className="btn button primary-button text-uppercase" to="/contact">Message Me</Link>
                                    <Link className="btn button primary-button text-uppercase" to="/resume" style={{marginLeft: "5%"}}>My Resume</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12" style={{ width: '40%', marginLeft: '10%'}}>
                            <img src={cartoon} alt="cartoon-img" className="cartoon-image img-fluid" />
                        </div>
                    </div>
                </div>
            </div>

            <div className="container-fluid">
                <div className="aboutRow row">
                    <div className="col-lg-4 col-md-12">
                        <div>
                            <img src={logo} alt="logo" className="about-image img-fluid" style={{marginBottom: '20%'}}/>
                        </div>
                    </div>

                    <div className="about-intro col-lg-8 col-md-12">
                        <h2 className="text-uppercase pt-5">
                            Let me introduce myself
                        </h2>
                        <div className="paragraph py-4">
                            <p className="para">
                                Hi there! I'm Joe Idelson, a full stack web developer.
                                I am originally from the San Francisco Bay Area, and now reside in the Dallas-Fort Worth Metroplex. Prior to learning coding, I recieved my Bachelor's in 
                                Applied Science for Animation and Visual Effects.
                                I am hard working and passionate about my work and always looking for ways to improve myself and my skills. I enjoy solving new problems and finding solutions
                                for any challenge I am faced with.    
                            </p>
                            <p className="para">
                                I completed the Lambda School program (now called Bloom Institute of Technology), a nine month intensive boot-camp style school, where I was taught the most 
                                contemporary techniques and skills for web development.
                                After attending Lambda, I got additional training through a company called Revature.
                            </p>
                            <p className='para'>
                                Currently, I am employed at Infosys where I have improved my skills as well as learned new ones, while working in different roles
                                such as a database administrator and developer.
                                When I am not working, I enjoy spending time with family, working on digital art projects, cooking with a smoker, and learning new skills.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-12 text-center skills-title">
                        <h1 className="title-text">Some technologies I have experience with</h1> 
                    </div>
                </div>
            
                <div className="container-fluid skills-list">
                    <div className="row">
                        <div className="skillsOne col-lg-3 col-md-6 col-sm-12">
                            <div className="skills">
                                <div className="skills-img text-center-py-4">
                                    <img src={html} alt="HTML" className="rounded mx-auto d-block img-fluid" />
                                </div>
                                <div className="card-body text-center">
                                    <h4 className="card-title font-roboto">HTML</h4>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12">
                            <div className="skills">
                                <div className="skills-img text-center-py-4">
                                    <img src={css} alt="CSS" className="rounded mx-auto d-block img-fluid" />
                                </div>
                                <div className="card-body text-center">
                                    <h4 className="card-title font-roboto">CSS</h4>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12">
                            <div className="skills">
                                <div className="skills-img text-center-py-4">
                                    <img src={javascript} alt="Javascript" className="rounded mx-auto d-block img-fluid" />
                                </div>
                                <div className="card-body text-center">
                                    <h5 className="card-title font-roboto">JavaScript</h5>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12">
                            <div className="skills">
                                <div className="skills-img text-center-py-4">
                                    <img src={react} alt="React" className="img-fluid rounded mx-auto d-block" />
                                </div>
                                <div className="card-body text-center">
                                    <h5 className="card-title font-roboto">React</h5>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12">
                            <div className="skills">
                                <div className="skills-img text-center-py-4">
                                    <img src={python} alt="Python" className="rounded mx-auto d-block img-fluid" />
                                </div>
                                <div className="card-body text-center">
                                    <h4 className="card-title font-roboto">Python</h4>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12">
                            <div className="skills">
                                <div className="skills-img text-center-py-4">
                                    <img src={redux} alt="Redux" className="rounded mx-auto d-block img-fluid" />
                                </div>
                                <div className="card-body text-center">
                                    <h4 className="card-title font-roboto">Redux</h4>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12">
                            <div className="skills">
                                <div className="skills-img text-center-py-4">
                                    <img src={node} alt="Node" className="rounded mx-auto d-block img-fluid" />
                                </div>
                                <div className="card-body text-center">
                                    <h4 className="card-title font-roboto">Node</h4>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12">
                            <div className="skills">
                                <div className="skills-img text-center-py-4">
                                    <img src={express} alt="Express" className="rounded mx-auto d-block img-fluid" />
                                </div>
                                <div className="card-body text-center">
                                    <h4 className="card-title font-roboto">Express</h4>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12">
                            <div className="skills">
                                <div className="skills-img text-center-py-4">
                                    <img src={git} alt="Git" className="rounded mx-auto d-block img-fluid" />
                                </div>
                                <div className="card-body text-center">
                                    <h4 className="card-title font-roboto">Git</h4>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12">
                            <div className="skills">
                                <div className="skills-img text-center-py-4">
                                    <img src={heroku} alt="Heroku" className="rounded mx-auto d-block img-fluid" />
                                </div>
                                <div className="card-body text-center">
                                    <h4 className="card-title font-roboto">Heroku</h4>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12">
                            <div className="skills">
                                <div className="skills-img text-center-py-4">
                                    <img src={postgresql} alt="Postgres" className="rounded mx-auto d-block img-fluid" />
                                </div>
                                <div className="card-body text-center">
                                    <h4 className="card-title font-roboto">PostgreSQL</h4>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12">
                            <div className="skills">
                                <div className="skills-img text-center-py-4">
                                    <img src={aws} alt="AWS" className="rounded mx-auto d-block img-fluid" />
                                </div>
                                <div className="card-body text-center">
                                    <h4 className="card-title font-roboto">aws</h4>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12">
                            <div className="skills">
                                <div className="skills-img text-center-py-4">
                                    <img src={java} alt="Java" className="rounded mx-auto d-block img-fluid" />
                                </div>
                                <div className="card-body text-center">
                                    <h4 className="card-title font-roboto">Java</h4>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12">
                            <div className="skills">
                                <div className="skills-img text-center-py-4">
                                    <img src={linux} alt="Linux" className="rounded mx-auto d-block img-fluid" />
                                </div>
                                <div className="card-body text-center">
                                    <h4 className="card-title font-roboto">Linux</h4>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12">
                            <div className="skills">
                                <div className="skills-img text-center-py-4">
                                    <img src={mysql} alt="MySQL" className="rounded mx-auto d-block img-fluid" />
                                </div>
                                <div className="card-body text-center">
                                    <h4 className="card-title font-roboto">MySQL</h4>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12">
                            <div className="skills">
                                <div className="skills-img text-center-py-4">
                                    <img src={github} alt="GitHub" className="rounded mx-auto d-block img-fluid" />
                                </div>
                                <div className="card-body text-center">
                                    <h4 className="card-title font-roboto">GitHub</h4>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12">
                            <div className="skills">
                                <div className="skills-img text-center-py-4">
                                    <img src={spring} alt="Spring" className="rounded mx-auto d-block img-fluid" />
                                </div>
                                <div className="card-body text-center">
                                    <h4 className="card-title font-roboto">Spring</h4>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12">
                            <div className="skills">
                                <div className="skills-img text-center-py-4">
                                    <img src={angular} alt="Angular" className="rounded mx-auto d-block img-fluid" />
                                </div>
                                <div className="card-body text-center">
                                    <h4 className="card-title font-roboto">Angular</h4>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12">
                            <div className="skills">
                                <div className="skills-img text-center-py-4">
                                    <img src={kibana} alt="Kibana" className="rounded mx-auto d-block img-fluid" />
                                </div>
                                <div className="card-body text-center">
                                    <h4 className="card-title font-roboto">Kibana</h4>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12">
                            <div className="skills">
                                <div className="skills-img text-center-py-4">
                                    <img src={cassandra} alt="Cassandra" className="rounded mx-auto d-block img-fluid" />
                                </div>
                                <div className="card-body text-center">
                                    <h4 className="card-title font-roboto">Cassandra</h4>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12">
                            <div className="skills">
                                <div className="skills-img text-center-py-4">
                                    <img src={flask} alt="Flask" className="rounded mx-auto d-block img-fluid" />
                                </div>
                                <div className="card-body text-center">
                                    <h4 className="card-title font-roboto">Flask</h4>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12">
                            <div className="skills">
                                <div className="skills-img text-center-py-4">
                                    <img src={postman} alt="Postman" className="rounded mx-auto d-block img-fluid" />
                                </div>
                                <div className="card-body text-center">
                                    <h4 className="card-title font-roboto">Postman</h4>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12">
                            <div className="skills">
                                <div className="skills-img text-center-py-4">
                                    <img src={gitlab} alt="GitLab" className="rounded mx-auto d-block img-fluid" />
                                </div>
                                <div className="card-body text-center">
                                    <h4 className="card-title font-roboto">GitLab</h4>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12">
                            <div className="skills">
                                <div className="skills-img text-center-py-4">
                                    <img src={maven} alt="Maven" className="rounded mx-auto d-block img-fluid" />
                                </div>
                                <div className="card-body text-center">
                                    <h4 className="card-title font-roboto">Maven</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-12 text-center skills-title" style={{marginTop: '9%'}}>
                        <h1 className="text-uppercase title-text">Projects</h1> 
                    </div>
                </div>
            
                <div className="container-fluid">
                    <div className="row grid justify-content-center" style={{marginBottom: "5%"}}>
                        <div className="col-lg-4 col-md-12 col-sm-12">
                            <div className="our-project text-center">
                                <div className="img py-4">
                                    <img className="proj-img" src={flashcards} alt="Flashcard App" style={{maxWidth: "30%"}} />
                                </div>
                                <div className="title py-4 text-center">
                                        <h4 className="text-uppercase">Flashcard App</h4>
                                        <span className="text-secondary">Full Stack Developer</span>
                                </div>
                                <div className="text-center"> 
                                    <a 
                                        href="https://github.com/jidelson/RevatureProj2" 
                                        className="btn button primary-button mr-4 text-uppercase" 
                                        role="button"
                                    >
                                        View
                                    </a>  
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-12 col-sm-12">
                            <div className="our-project text-center">
                                <div className="img py-4">
                                    <img className="proj-img" src={dollar} alt="Employee Reimbursement System" style={{maxWidth: "30%"}} />
                                </div>
                                <div className="title py-4 text-center">
                                        <h4 className="text-uppercase">Employee Reimbursement System</h4>
                                        <span className="text-secondary">Full Stack Developer</span>
                                </div>
                                <div className="text-center"> 
                                    <a 
                                        href="https://github.com/jidelson/RevatureProj1" 
                                        className="btn button primary-button mr-4 text-uppercase" 
                                        role="button"
                                    >
                                        View
                                    </a>  
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </HomeContainer>

    )
}
export default Home;

const HomeContainer = styled.div`

p.para{
    color: var(--text-color);
    font: normal 500 16px/25px var(--roboto);
}

.intro{
    padding-top: 15%;
    font: normal bold 50px/72px var(--roboto);
    font-weight: 500;
}

.name{
    font: normal bold 50px/72px var(--roboto);
    font-size: 5.5rem;
}

.title-text{
    font: normal bold 50px/72px var(--roboto);
}
.jobTitle{
    font: normal bold 50px/72px var(--roboto);
    font-size: 1.5rem;
}

.button{
    padding: 1.5rem 2.2rem;
    font: normal 500 18px/20px var(--roboto);
    position: relative;
    border: 3px solid transparent;
    border-radius: 50px;
    font-weight: bold;
}

.button.primary-button{
    background: var(--gradient-color);
    background-clip: padding-box;
    color: whitesmoke;
    transition: background .6s ease;
    box-shadow: var(--box-shadow);
    border-radius: 50px;
    border: 3px solid transparent;
}

.button.primary-button:hover{
    background: var(--gradient-color-second);
    background-clip: padding-box;
    color: black;
    border: 3px solid black;
    box-shadow: 0 0 10px rgb(65, 228, 152), 0 0 20px rgb(65, 228, 152), 0 0 30px rgb(65, 228, 152), 0 0 40px rgb(65, 228, 152);
}

.button.primary-button::after, .button-secondary-button::after{
    position: absolute;
    top: -2px; left: -2px;
    bottom: -2px; right: -2px;
    background: var(--gradient-color);
    content: '';
    z-index: -1;
    border-radius: 50px;
}

.skills-title h1{
    font-size: 35px;
}

.skills{
    background: rgba(248, 252, 253, 0.973);
    padding: 2rem 0;
    width: 16rem;
    margin: .5rem .5rem;
    transition: box-shadow .7s ease;
}

.skills:hover{
    box-shadow: var(--box-shadow);
}


.button-group button{
    background: transparent;
    border: none;
    font: normal 500 16px/130px var(--roboto);
    text-transform: uppercase;
}

.button-group button + button{
    padding-left: 3rem;
}

.grid .our-project > .title h4{
    font: normal 700 25px/12px var(--roboto);

}

.button-proj{
    padding: 1rem 1.5rem;
    font: normal 500 16px/20px var(--roboto);
    position: relative;
    border: 2px solid #854fee;
    border-radius: 4px;
    
}

.button-proj.primary-button{
    background: var(--gradient-color);
    background-clip: padding-box;
    color: whitesmoke;
    transition: background .6s ease;
    box-shadow: var(--box-shadow);
}

.button-proj.primary-button:hover{
    background:whitesmoke;
    background-clip: padding-box;
    color: black;
}

.project-title{
    font: normal bold 50px/72px var(--roboto);
    font-size: 35px;
}

.proj-img{
    width: 50%;
}

.grid .our-project .img:hover{
    filter: brightness(1.1) drop-shadow(1px 8px 14px #b1afaf);
}

`;

 