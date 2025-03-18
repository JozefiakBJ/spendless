
import { ContactTranslations } from '@/i18n/types/contact';

export const contact: ContactTranslations = {
  title: 'Kontaktiere uns',
  subtitle: 'Haben Sie Fragen zu SPENDLESS? Unser Team ist hier, um zu helfen. Kontaktieren Sie uns über einen der folgenden Kanäle.',
  form: {
    name: 'Ihr Name',
    email: 'E-Mail-Adresse',
    subject: 'Betreff',
    message: 'Nachricht',
    submit: 'Nachricht senden',
    sending: 'Wird gesendet...',
    success: 'Ihre Nachricht wurde erfolgreich gesendet!',
    error: 'Beim Senden Ihrer Nachricht ist ein Fehler aufgetreten. Bitte versuchen Sie es erneut.',
    nameError: 'Der Name muss mindestens 2 Zeichen lang sein.',
    emailError: 'Bitte geben Sie eine gültige E-Mail-Adresse ein.',
    subjectError: 'Der Betreff muss mindestens 5 Zeichen lang sein.',
    messageError: 'Die Nachricht muss mindestens 10 Zeichen lang sein.'
  }
};
