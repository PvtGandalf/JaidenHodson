// ##########################################
// #        Import External Components      #
// ##########################################
import { useState } from 'react';
import styled from '@emotion/styled/macro';
import { Container, Form, Button, Alert } from 'react-bootstrap';
import emailjs from '@emailjs/browser';

// ##########################################
// #    Mailjs Template and Service IDS     #
// ##########################################
const TEMPLATE_ID = process.env.EMAILJS_TEMPLATE_ID;
const SERVICE_ID = process.env.EMAILJS_SERVICE_ID;
const PUBLIC_KEY = process.env.EMAILJS_PUBLIC_KEY;

// ##########################################
// #       Component Specific Styling       #
// ##########################################
const StyledForm = styled(Form)`
  width: 80%;
`

const StyledFormGroup = styled(Form.Group)`
  text-align: left;
`

const StyledFormLabel = styled(Form.Label)`
  margin-left: 5px;
	color: white;
`

const StyledButton = styled(Button)`
  margin-top: 20px;
`

const FeedbackMessage = styled.p`
	color: white;
`

// ##########################################
// #           Contact Component            #
// ##########################################
export default function ContactForm() {
	
	const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [reason, setReason] = useState('');
  const [success, setSuccess] = useState(false);
  const [failure, setFailure] = useState(false);
  const [show, setShow] = useState(true);
  const [validated, setValidated] = useState(false);
	
// ##########################################
// #            Email Validation            #
// ##########################################
  function validateEmail(text) {
    if (/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(text)) {
        return (true);
    } else {
      return (false);
    }
  }
  
// ##########################################
// #             Phone Setting              #
// ##########################################
  function handlePhoneInput(e) {
    // Format the phone number
    const formattedPhoneNumber = formatPhoneNumber(e.target.value);
    
    // Set the formatted phone number as current phone number
    setPhone(formattedPhoneNumber);
  }
  
// ##########################################
// #          Phone Reformatting            #
// ##########################################
  function formatPhoneNumber(value) {
    // If their is no input return
    if (!value) return value;

    // Clean the input for any non-digit values.
    const phoneNumber = value.replace(/[^\d]/g, '');

    // Set length of input for ease of access
    const phoneNumberLength = phoneNumber.length;

    // If input length less than 4 return without formatting
    if (phoneNumberLength < 4) return phoneNumber;

    // If input length greater than 4 and less than 7 begin formatting and return
    if (phoneNumberLength < 7) {
      return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3)}`;
    }

    // If input length greater than 7 add last of formatting and return
    return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(
      3,
      6
    )}-${phoneNumber.slice(6, 10)}`;
  }
  
// ##########################################
// #        Form Submission Handling        #
// ##########################################
  function handleSubmit(event) {
      event.preventDefault();
      
      // Show validation hints after submission
      setValidated(true);
      
      // Check for required fields
      const form = event.currentTarget;
      
      // Stop submission if not all required fields filled out
      if (form.checkValidity() === false) {
        event.stopPropagation();
        return;
      }
      
      // Stop submission if email not valid
      if (!validateEmail(form.email.value)) {
        event.stopPropagation();
        return;
      }
      
      // Set state for form submission success & failure
      setSuccess(false);
      setFailure(false);
      
			console.log(name, email, phone, message);
			
      // Send email using form data
      /*emailjs.send(SERVICE_ID, TEMPLATE_ID, {
          firstName: name,
          lastName: "",
          interests: interestString,
          message: message,
          email: email,
          phone: phone
        }, PUBLIC_KEY).then(res => {
            console.log('Email successfully sent!');
            setSuccess(true);
        }).catch(err => {
            console.error('Email not sent. Error:', err);
            setFailure(true);
        });
				*/
  }
	
	return (
		<StyledForm noValidate validated={validated} onSubmit={handleSubmit}>
			
			{/* Name Input Field */}
			<StyledFormGroup className="mb-3" controlId="form.Name">
				<StyledFormLabel>Name</StyledFormLabel>
				<Form.Control required type="text" name="name" placeholder="Gandalf Greyhame" maxLength="30" onChange={(e) => setName(e.target.value)} value={name}/>
				<Form.Control.Feedback>Looks good!</Form.Control.Feedback>
				<Form.Control.Feedback type="invalid">Please provide a valid name.</Form.Control.Feedback>
			</StyledFormGroup>
			
			{/* Email Input Field */}
			<StyledFormGroup className="mb-3" controlId="form.Email">
				<StyledFormLabel>Email</StyledFormLabel>
				<Form.Control required type="email" name="email" placeholder="gandalfthegrey@gmail.com" maxLength="50" onChange={(e) => setEmail(e.target.value)} value={email}/>
				<Form.Control.Feedback>Looks good!</Form.Control.Feedback>
				<Form.Control.Feedback type="invalid">Please provide a valid email.</Form.Control.Feedback>
			</StyledFormGroup>
			
			{/* Phone Input Field */}
			<StyledFormGroup className="mb-3" controlId="form.Phone">
				<StyledFormLabel>Phone</StyledFormLabel>
				<Form.Control required type="tel" name="phone" placeholder="+1 (555) 555-5555" pattern=".{14,}" onChange={(e) => handlePhoneInput(e)} value={phone}/>
				<Form.Control.Feedback>Looks good!</Form.Control.Feedback>
				<Form.Control.Feedback type="invalid">Please provide a valid phone number.</Form.Control.Feedback>
			</StyledFormGroup>
			
			{/* Reason Checkbox */}
			<StyledFormGroup className="mb-3" controlId="form.Reason">
				<StyledFormLabel>Reason</StyledFormLabel>
				<Form.Select name="reason" required onChange={(e) => setReason(e.target.value)} value={reason}>
					<option value="Default" disabled>Select a reason for contact</option>
					<option value="Business">Business</option>
					<option value="Personal">Personal</option>
					<option value="Other">Other</option>
				</Form.Select>
				<Form.Control.Feedback>Looks good!</Form.Control.Feedback>
				<Form.Control.Feedback type="invalid">Please provide a reason for contacting.</Form.Control.Feedback>
			</StyledFormGroup>
			
			{/* Message Input Field */}
			<StyledFormGroup className="mb-3" controlId="form.Message">
				<StyledFormLabel>Message</StyledFormLabel>
				<Form.Control required type="text" name="message" as="textarea" rows={5} placeholder="Tell me more..." maxLength="300" onChange={(e) => setMessage(e.target.value)} value={message}/>
				<Form.Control.Feedback>Looks good!</Form.Control.Feedback>
				<Form.Control.Feedback type="invalid">Please provide a message.</Form.Control.Feedback>
			</StyledFormGroup>
			
			{/* Submit Form Button */}
			<StyledButton type="submit">
				Send Message
			</StyledButton>
			
			{/* Success Alert */}
			{success && show &&
				<Alert variant="success" onClose={() => setShow(false)} dismissible>
					<Alert.Heading>Email sent successfully!</Alert.Heading>
				</Alert>
			}
			
			{/* Failure Alert */}
			{failure && show &&
				<Alert variant="danger" onClose={() => setShow(false)} dismissible>
					<Alert.Heading>Email not sent!</Alert.Heading>
				</Alert>
			}
			
		</StyledForm>
  );
}