
export type ContactTranslationKey = 
  | 'contact.title'
  | 'contact.subtitle'
  | 'contact.form.name'
  | 'contact.form.email'
  | 'contact.form.subject'
  | 'contact.form.message'
  | 'contact.form.submit'
  | 'contact.form.sending'
  | 'contact.form.success'
  | 'contact.form.error'
  | 'contact.form.nameError'
  | 'contact.form.emailError'
  | 'contact.form.subjectError'
  | 'contact.form.messageError';

export interface ContactTranslations {
  title: string;
  subtitle: string;
  form: {
    name: string;
    email: string;
    subject: string;
    message: string;
    submit: string;
    sending: string;
    success: string;
    error: string;
    nameError: string;
    emailError: string;
    subjectError: string;
    messageError: string;
  };
}
