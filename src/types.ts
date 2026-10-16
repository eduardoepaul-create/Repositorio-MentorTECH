export interface Testimonial {
  id: string;
  name: string;
  role: string;
  previousRole: string;
  achievement: string;
  metricHighlight: string;
  quote: string;
  videoDuration?: string;
  avatarInitials: string;
  tags: string[];
}

export interface QuizQuestion {
  id: number;
  question: string;
  subtitle: string;
  options: {
    text: string;
    description: string;
    score: number; // 1 = Operativo, 2 = Técnico Intermedio, 3 = Estratégico Ejecutivo
  }[];
}

export interface BookingData {
  date: string;
  timeSlot: string;
  fullName: string;
  email: string;
  currentRole: string;
  yearsOfExperience: string;
  biggestChallenge: string;
}
