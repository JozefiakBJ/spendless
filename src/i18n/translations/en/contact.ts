
import { ContactTranslations } from '@/i18n/types/contact';

export const contact: ContactTranslations = {
  title: 'Contact Us',
  subtitle: 'Have questions about SPENDLESS? Our team is here to help. Reach out through any of the channels below.',
  form: {
    name: 'Your Name',
    email: 'Email Address',
    subject: 'Subject',
    message: 'Message',
    submit: 'Send Message',
    sending: 'Sending...',
    success: 'Your message has been sent successfully!',
    error: 'There was an error sending your message. Please try again.',
    nameError: 'Name must be at least 2 characters.',
    emailError: 'Please enter a valid email address.',
    subjectError: 'Subject must be at least 5 characters.',
    messageError: 'Message must be at least 10 characters.'
  }
};
