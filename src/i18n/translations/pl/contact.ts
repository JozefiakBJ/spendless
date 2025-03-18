
import { ContactTranslations } from '@/i18n/types/contact';

export const contact: ContactTranslations = {
  title: 'Skontaktuj się z nami',
  subtitle: 'Masz pytania dotyczące SPENDLESS? Nasz zespół jest tutaj, aby pomóc. Skontaktuj się z nami przez dowolny z poniższych kanałów.',
  form: {
    name: 'Twoje imię',
    email: 'Adres e-mail',
    subject: 'Temat',
    message: 'Wiadomość',
    submit: 'Wyślij wiadomość',
    sending: 'Wysyłanie...',
    success: 'Twoja wiadomość została wysłana pomyślnie!',
    error: 'Wystąpił błąd podczas wysyłania wiadomości. Spróbuj ponownie.',
    nameError: 'Imię musi mieć co najmniej 2 znaki.',
    emailError: 'Proszę podać prawidłowy adres e-mail.',
    subjectError: 'Temat musi mieć co najmniej 5 znaków.',
    messageError: 'Wiadomość musi mieć co najmniej 10 znaków.'
  }
};
