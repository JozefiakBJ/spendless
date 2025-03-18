
import { ContactTranslations } from '@/i18n/types/contact';

export const contact: ContactTranslations = {
  title: 'Contactez-nous',
  subtitle: 'Vous avez des questions sur SPENDLESS ? Notre équipe est là pour vous aider. Contactez-nous via l\'un des canaux ci-dessous.',
  form: {
    name: 'Votre nom',
    email: 'Adresse e-mail',
    subject: 'Sujet',
    message: 'Message',
    submit: 'Envoyer le message',
    sending: 'Envoi en cours...',
    success: 'Votre message a été envoyé avec succès !',
    error: 'Une erreur s\'est produite lors de l\'envoi de votre message. Veuillez réessayer.',
    nameError: 'Le nom doit comporter au moins 2 caractères.',
    emailError: 'Veuillez entrer une adresse e-mail valide.',
    subjectError: 'Le sujet doit comporter au moins 5 caractères.',
    messageError: 'Le message doit comporter au moins 10 caractères.'
  }
};
