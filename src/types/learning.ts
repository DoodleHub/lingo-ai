export type LanguageCode = "es" | "fr" | "ja" | "ko" | "de" | "zh";

export interface Language {
  code: LanguageCode;
  name: string;
  nativeName: string;
  flag: string;
  learners: string;
  popular: boolean;
  greeting: string;
}

export interface Unit {
  id: string;
  languageCode: LanguageCode;
  order: number;
  title: string;
  description: string;
}

export interface VocabularyItem {
  id: string;
  term: string;
  translation: string;
  example: string;
  exampleTranslation: string;
}

export interface Phrase {
  id: string;
  text: string;
  translation: string;
}

export type ActivityType = "multiple-choice" | "translate" | "listening" | "speaking";

export interface Activity {
  id: string;
  type: ActivityType;
  prompt: string;
  correctAnswer: string;
  options?: string[];
}

export interface LessonGoal {
  summary: string;
  objectives: string[];
}

// Context handed to the Vision Agent so it can run the audio lesson as this lesson's AI teacher.
export interface AITeacherPrompt {
  systemPrompt: string;
  openingLine: string;
  openingLineTranslation: string;
  focusAreas: string[];
  encouragementPhrases: string[];
}

export interface Lesson {
  id: string;
  unitId: string;
  languageCode: LanguageCode;
  order: number;
  title: string;
  goal: LessonGoal;
  vocabulary: VocabularyItem[];
  phrases: Phrase[];
  activities: Activity[];
  aiTeacher: AITeacherPrompt;
}
