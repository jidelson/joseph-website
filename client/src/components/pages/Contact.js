import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import styled from 'styled-components';
import { toast } from 'react-toastify';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



function Contact() {

    const initalValues = {fName: '', lName: '', email: '', subject: '', msg: ''}
    const [formValues, setFormValues] = useState(initalValues);
    const [formErrors, setFormErrors] = useState({});
    const [isFormValid, setIsFormValid] = useState(false);


    
    
  const notify = () => {
    toast.success('Email sent!');
  }
      
    
    function sendEmail(){
        // sends the email
        emailjs.send('service_rgh658x', 'template_jk0ogmk', {
            from_name: formValues.fName + " " + formValues.lName,
            from_email: formValues.email,
            subject: formValues.subject,
            message: formValues.msg,
        }, 'user_5siGv8EVrjS5Pxk1dMwDw')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
        setFormValues(initalValues);
    }

    const fieldDisplayNames = {
        fName: "First Name",
        lName: "Last Name",
        email: "Email Address",
        subject: "Subject",
        msg: "message",
    };
    
    const regex = {
        fName: /^[a-zA-Z]+$/,
        lName: /^[a-zA-Z]+$/,
        email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
        subject: /^.+$/,
        msg: /^.+$/ 
      }
      
    const validateField = (fieldName, value) => {
        const isValid = regex[fieldName].test(value);
        setFormValues((prevState) => ({...prevState, [fieldName]: value}));
        setFormErrors((prevState) => ({...prevState, [fieldName]: isValid ? "" : `Please enter a valid ${fieldDisplayNames[fieldName]}.`}));

    };
    
    const handleBlur = (e) => {
        const { name, value } = e.target;
        validateField(name, value);
        validateForm(name);
    };


    
    const validateForm = (fieldName) => {
        const errors = {};
        let isValid = true;
        Object.keys(formValues).forEach(key => {
          const fieldValue = formValues[key];
          const fieldValid = regex[key].test(fieldValue);
          errors[key] = fieldValid ? "" : `Please enter a valid ${fieldDisplayNames[key]}.`;
          if (fieldName === key) {
            setFormErrors((prevState) => ({...prevState, [fieldName]: errors[fieldName]}));
          }
          isValid = isValid && fieldValid;
        });
        setIsFormValid(isValid);
      };
      
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues((prevState) => ({...prevState, [name]: value}));
        if (value.length === 1) {
          setFormErrors((prevState) => ({...prevState, [name]: ''}));
        } else {
          validateForm(name);
        }
      };
      

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!isFormValid) {
            // If the form is not valid, display an error message or prevent form submission
            return;
        }
        sendEmail();
        notify();
    };

    

    return (
        <ContactContainer>
            <h1 className="intro text-center">Contact Me</h1>
            <h4 className="title-text text-center">Have a question or want to work together?</h4>
            <div className="container">
                <form onSubmit={handleSubmit}>
                    <div className="row pt-5 mx-auto">
                        <div className="col-8 form-group mx-auto">
                            <input 
                                type="text" 
                                className="form-control" 
                                placeholder="First Name" 
                                name="fName" 
                                onChange={handleChange} 
                                value={formValues.fName} 
                                onBlur={handleBlur} 
                            />
                            <p id='fNameError'>{formErrors.fName}</p>
                        </div>
                        <div className="col-8 form-group pt-2 mx-auto">
                            <input 
                                type="text" 
                                className="form-control" 
                                placeholder="Last Name" 
                                name="lName" 
                                onChange={handleChange} 
                                value={formValues.lName} 
                                onBlur={handleBlur} 
                            />
                            <p id='lNameError'>{formErrors.lName}</p>
                        </div>
                        <div className="col-8 form-group pt-2 mx-auto">
                            <input 
                                type="email" 
                                className="form-control" 
                                placeholder="Email Address" 
                                name="email" 
                                onChange={handleChange} 
                                value={formValues.email} 
                                onBlur={handleBlur} 
                            />
                            <p id='emailError'>{formErrors.email}</p>
                        </div>
                        <div className="col-8 form-group pt-2 mx-auto">
                            <input 
                                type="text" 
                                className="form-control" 
                                placeholder="Subject" 
                                name="subject" 
                                onChange={handleChange} 
                                value={formValues.subject} 
                                onBlur={handleBlur} 
                            />
                            <p id='subjectError'>{formErrors.subject}</p>
                        </div>
                        <div className="col-8 form-group pt-2 mx-auto">
                            <textarea 
                                className="form-control" 
                                cols="30" 
                                rows="8" 
                                placeholder="Your message" 
                                name="msg" 
                                onChange={handleChange} 
                                value={formValues.msg} 
                                onBlur={handleBlur}
                            ></textarea>
                            <p id='msgError'>{formErrors.msg}</p>
                        </div>
                        <div className="col-8 pt-3 pb-3 mx-auto text-center">
                            <input type="submit" className="btn button primary-button mr-4 text-uppercase" value="Send Message" disabled={!isFormValid}></input>
                        </div>
                    </div>
                </form>
                <ToastContainer />
            </div>
                <div className="bottomInfo text-center py-4">
                    <p> 
                        <a href="tel:+19254781747" className="phone-link">
                            <i className="fa fa-phone" aria-hidden="true"></i>&nbsp;
                        </a>
                        <span className="phoneInfo" style={{paddingLeft: "2%"}}>(925)478-1747</span>
                     </p>
                    <p>
                        <i className="fa fa-envelope-square" aria-hidden="true" onClick={() => {window.location.href = 'mailto:joeidelson@gmail.com';}}></i>&nbsp;
                        <span className="emailInfo" style={{paddingLeft: "2%"}}>joeidelson@gmail.com</span>
                    </p>
                </div>
            
        </ContactContainer>
    )
}

export default Contact;

const ContactContainer = styled.div`
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
    .intro{
        padding-top: 2%;
        font: normal bold 50px/72px var(--roboto);
        font-weight: 500;
    }
    .title-text{
        font: normal 30px/72px var(--roboto);
    }
    .fa.fa-phone{
        font-size: 4rem;   
    }
    .fa.fa-envelope-square{
        font-size: 4rem;
        cursor: pointer;
    }
    .fa.fa-envelope-square:hover{
        color: turquoise;
    }
    .phoneInfo{
        font-size:50px;
    }
    a.phone-link {
        color: black;
        text-decoration: none;
    }
      a.phone-link:hover {
        color: turquoise;
      }  
    .emailInfo{
        font-size: 30px;
    }
    #fNameError{
        color: red;
    }
    #lNameError{
        color: red;
    }
    #emailError{
        color: red;
    }
    #subjectError{
        color: red;
    }
    #msgError{
        color: red;
    }
`;







    // function sendEmail(e){
    //     e.preventDefault();

    //     // sends the email
    //     emailjs.sendForm('service_rgh658x', 'template_jk0ogmk', e.target, 'user_5siGv8EVrjS5Pxk1dMwDw')
    //       .then((result) => {
    //           console.log(result.text);
    //       }, (error) => {
    //           console.log(error.text);
    //       });
    //     e.target.reset();
    // }