export interface TestQuestion {
  id: number;
  text: string;
  category: string;
}

export interface TestAnswer {
  questionId: number;
  value: number;
}

export interface TestResult {
  type: string;
  title: string;
  description: string;
  scores: {
    stressPerception: number;
    emotionalState: number;
    emotionalRegulation: number;
    recoveryResilience: number;
    vulnerability: number;
  };
}

export interface User {
  email?: string;
  organizationCode?: string;
}

export interface Inquiry {
  name: string;
  company?: string;
  email: string;
  phone: string;
  inquiryType: string;
  subject: string;
  content: string;
}