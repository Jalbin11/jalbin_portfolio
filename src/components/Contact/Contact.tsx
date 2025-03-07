import React, { useState } from 'react';
import {
  ContactSection,
  ContactForm,
  FormGroup,
  Input,
  TextArea,
  SubmitButton,
  Drawer,
  DrawerContent,
  DrawerButton
} from './Contact.styles';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Add form submission logic here
  };

  return (
    <ContactSection id="contact">
      <h2>Get In Touch</h2>
      <ContactForm onSubmit={handleSubmit}>
        <FormGroup>
          <Input 
            type="text"
            placeholder="Name"
            value={formData.name}
            onChange={e => setFormData({...formData, name: e.target.value})}
          />
        </FormGroup>
        <FormGroup>
          <Input 
            type="email"
            placeholder="Email"
            value={formData.email}
            onChange={e => setFormData({...formData, email: e.target.value})}
          />
        </FormGroup>
        <FormGroup>
          <TextArea 
            placeholder="Message"
            value={formData.message}
            onChange={e => setFormData({...formData, message: e.target.value})}
          />
        </FormGroup>
        <SubmitButton 
          type="submit"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Send Message
        </SubmitButton>
      </ContactForm>
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