import React from 'react';
import styled from 'styled-components';
import resume from '../../images/resume.pdf';

function Resume() {
    return (
        <ResumeContainer className="text-center">
            <div className="rezDlBtn">
                <a href={resume} download className="btn button primary-button text-uppercase " style={{marginTop: "1.5%", marginBottom: "1.5%"}}>Download Resume</a>
            </div>
            <div className="pdf-container" 
                style={{ 
                    position: 'relative', 
                    width: '100vh', 
                    height: '100vh', // Sets the height to full viewport height
                    border: '5px solid black',
                    marginBottom: "1%"
            }}>
                <iframe
                    title='resume' 
                    src="https://drive.google.com/file/d/1oJRicXzESZVo1hocO-xBMVtPzHD7zDpe/preview" 
                    width="100%" 
                    height="100%" 
                >
                </iframe>
            </div>
        </ResumeContainer>
    )    

}

export default Resume;

const ResumeContainer = styled.div`

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

.pdf-container {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 auto; 
  }
  

`;