import React from 'react';
import styled from 'styled-components';

import dollar from '../../images/dollar.jpg';
import flashcards from '../../images/flashcards.jpg';

function Portfolio() {
    return (
        <PortfolioContainer className="container">
            <div className="project-title pb-5" style={{marginTop: "5%"}}>
                <h1 className="text-uppercase title-h1 text-center">Projects</h1>
            </div>
            <div className="text-center">
                <h5>Check out my <a href="https://www.github.com/jidelson">GitHub</a> to see my most recent work!</h5>
            </div>

            <div className='projectRow row grid justify-content-center' style={{marginBottom: "5%"}}>
                <div className="col-lg-4 col-md-6 col-sm-12  py-4">
                    <div className='our-project text-center'>
                        <div className='img'>
                            <img src={flashcards} alt="Flashcard App"  style={{maxWidth: "50%"}}  />
                        </div>
                        <div className="title py-4 text-center">
                            <h4 className="text-uppercase">Flashcard App</h4>
                            <p className="text-secondary">Full Stack Developer</p>
                        </div>
                        <div className="text-center"> 
                                <a href="https://github.com/jidelson/RevatureProj2" className="btn button primary-button mr-4 text-uppercase" role="button">View</a>  
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12  py-4">
                    <div className='our-project text-center'>
                        <div className='img'>
                            <img src={dollar} alt="Employee Reimbursement System"  style={{maxWidth: "50%"}}  />
                        </div>
                        <div className="title py-4 text-center">
                            <h4 className="text-uppercase">Employee Reimbursement</h4>
                            <h4 className="text-uppercase">System</h4>
                            <p className="text-secondary">Full Stack Developer</p>
                        </div>
                        <div className="text-center"> 
                                <a href="https://github.com/jidelson/RevatureProj1" className="btn button primary-button mr-4 text-uppercase" role="button">View</a>  
                        </div>
                    </div>
                </div>
                
            </div>

           
        </PortfolioContainer>
    )
}

export default Portfolio;

const PortfolioContainer = styled.div`
.grid .our-project > .title h4{
    font: normal 700 25px/12px var(--roboto);
}

.grid .our-project .img:hover{
    filter: brightness(1.1) drop-shadow(1px 8px 14px #b1afaf);
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
`;