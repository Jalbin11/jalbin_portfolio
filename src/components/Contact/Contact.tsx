import React, { useState } from 'react';
import {
  ContactSection,
  FormGroup,
  Input,
  TextArea,
  SubmitButton,
  Drawer,
  DrawerContent,
  DrawerButton,
  SuccessMessage
} from './Contact.styles';
import { useForm, ValidationError } from '@formspree/react';

const Contact: React.FC = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
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
      <DrawerButton onClick={() => setIsDrawerOpen(!isDrawerOpen)}>
        Contact Info
      </DrawerButton>
      <Drawer $isOpen={isDrawerOpen}>
        <DrawerContent>
          <p>Email: JTA1303@gmail.com</p>
          <p>Phone: (214) 883-5917</p>
          <p>
            <a href="https://www.linkedin.com/in/jacob-albin/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          </p>
          <p>
            <a href="https://github.com/Jalbin11/jalbin_portfolio" target="_blank" rel="noopener noreferrer">GitHub</a>
          </p>
          <p>
            <a href="https://www.instagram.com/jacob.albin_/" target="_blank" rel="noopener noreferrer">Instagram</a>
          </p>
        </DrawerContent>
      </Drawer>
    </ContactSection>
  );
};

export default Contact;