
export type FaqTranslationKey =
  | 'faq.title'
  | 'faq.stillHaveQuestions'
  | 'faq.supportTeam'
  | 'faq.contactSupport'
  | 'faq.questions.q1.question'
  | 'faq.questions.q1.answer'
  | 'faq.questions.q2.question'
  | 'faq.questions.q2.answer'
  | 'faq.questions.q3.question'
  | 'faq.questions.q3.answer'
  | 'faq.questions.q4.question'
  | 'faq.questions.q4.answer'
  | 'faq.questions.q5.question'
  | 'faq.questions.q5.answer'
  | 'faq.questions.q6.question'
  | 'faq.questions.q6.answer'
  | 'faq.questions.q7.question'
  | 'faq.questions.q7.answer'
  | 'faq.questions.q8.question'
  | 'faq.questions.q8.answer'
  | 'faq.questions.q9.question'
  | 'faq.questions.q9.answer'
  | 'faq.questions.q10.question'
  | 'faq.questions.q10.answer';

export interface FaqTranslations {
  title: string;
  stillHaveQuestions: string;
  supportTeam: string;
  contactSupport: string;
  questions: {
    q1: { question: string; answer: string };
    q2: { question: string; answer: string };
    q3: { question: string; answer: string };
    q4: { question: string; answer: string };
    q5: { question: string; answer: string };
    q6: { question: string; answer: string };
    q7: { question: string; answer: string };
    q8: { question: string; answer: string };
    q9: { question: string; answer: string };
    q10: { question: string; answer: string };
  };
}
