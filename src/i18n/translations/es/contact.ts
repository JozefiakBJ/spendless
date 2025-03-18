
import { ContactTranslations } from '@/i18n/types/contact';

export const contact: ContactTranslations = {
  title: 'Contáctenos',
  subtitle: '¿Tiene preguntas sobre SPENDLESS? Nuestro equipo está aquí para ayudar. Comuníquese a través de cualquiera de los canales a continuación.',
  form: {
    name: 'Su nombre',
    email: 'Dirección de correo electrónico',
    subject: 'Asunto',
    message: 'Mensaje',
    submit: 'Enviar mensaje',
    sending: 'Enviando...',
    success: '¡Su mensaje ha sido enviado con éxito!',
    error: 'Hubo un error al enviar su mensaje. Por favor, inténtelo de nuevo.',
    nameError: 'El nombre debe tener al menos 2 caracteres.',
    emailError: 'Por favor ingrese una dirección de correo electrónico válida.',
    subjectError: 'El asunto debe tener al menos 5 caracteres.',
    messageError: 'El mensaje debe tener al menos 10 caracteres.'
  }
};
