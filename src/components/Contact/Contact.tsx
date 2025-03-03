import React, { useState } from 'react';
import {
  ContactSection,
  ContactForm,
  FormGroup,
  Input,
  TextArea,
  SubmitButton
} from './Contact.styles';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

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
    </ContactSection>
  );
};

export default Contact;