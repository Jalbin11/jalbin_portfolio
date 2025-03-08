import React from 'react';
import {
  ContactSection,
  FormGroup,
  Input,
  TextArea,
  SubmitButton,
  SuccessMessage
} from './Contact.styles';
import { useForm, ValidationError } from '@formspree/react';

const Contact: React.FC = () => {
  const [state, handleSubmit] = useForm("xzzepjeo");

  if (state.succeeded) {
    return (
      <ContactSection id="contact">
        <SuccessMessage
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          Message received, thanks for reaching out! We'll be in touch soon.
        </SuccessMessage>
      </ContactSection>
    );
  }

  return (
    <ContactSection id="contact">
      <h2>Get In Touch</h2>
      <form onSubmit={handleSubmit}>
        <FormGroup>
          <Input 
            id="email"
            type="email"
            name="email"
            placeholder="Email"
          />
          <ValidationError 
            prefix="Email" 
            field="email"
            errors={state.errors}
          />
        </FormGroup>
        <FormGroup>
          <TextArea 
            id="message"
            name="message"
            placeholder="Message"
          />
          <ValidationError 
            prefix="Message" 
            field="message"
            errors={state.errors}
          />
        </FormGroup>
        <SubmitButton 
          type="submit"
          disabled={state.submitting}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Send Message
        </SubmitButton>
      </form>
    </ContactSection>
  );
};

export default Contact;