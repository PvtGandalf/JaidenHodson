// ##########################################
// #        Import External Components      #
// ##########################################
import { useState } from 'react';
import styled from '@emotion/styled/macro';
import { Container, Form, Button, Alert } from 'react-bootstrap';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// ##########################################
// #    Mailjs Template and Service IDS     #
// ##########################################
const TEMPLATE_ID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
const SERVICE_ID = process.env.REACT_APP_EMAILJS_SERVICE_ID;
const PUBLIC_KEY = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;

// ##########################################
// #       Component Specific Styling       #
// ##########################################
const StyledForm = styled(Form)`
  width: 45%;
	margin: 40px;
	background: #00000035;
  padding: 30px;
  border-radius: 40px;
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

const StyledToast = styled(ToastContainer)`
  &&&.Toastify__toast-container {}
  .Toastify__toast {
		background-color: #111a21;
		border: solid #0d151a 2px;
	}
  .Toastify__toast-body {}
  .Toastify__progress-bar {}
`;

// ##########################################
// #           Contact Component            #
// ##########################################
export default function ContactForm() {
	
	const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [reason, setReason] = useState('Business');
  const [validated, setValidated] = useState(false);
	
	const notifySuccess = () => toast.success('Message sent successfully!', {
		position: "top-right",
		autoClose: 5000,
		hideProgressBar: false,
		closeOnClick: true,
		pauseOnHover: true,
		draggable: true,
		progress: undefined,
		theme: "dark"
	});
		
	const notifyFailure = () => toast.error('Error sending message!', {
		position: "top-right",
		autoClose: 5000,
		hideProgressBar: false,
		closeOnClick: true,
		pauseOnHover: true,
		draggable: true,
		progress: undefined,
		theme: "dark"
	});
	
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
		
		// Send email using form data
		emailjs.send(SERVICE_ID, TEMPLATE_ID, {
				name: name,
				interests: reason,
				message: message,
				email: email,
				phone: phone
			}, PUBLIC_KEY).then(res => {
					notifySuccess();
			}).catch(err => {
					notifyFailure();
			});
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
			
			{/* Message Status Toast */}
			<StyledToast
				position="top-right"
				autoClose={5000}
				hideProgressBar={false}
				newestOnTop={false}
				closeOnClick
				rtl={false}
				pauseOnFocusLoss
				draggable
				pauseOnHover
			/>
			
		</StyledForm>
  );
}