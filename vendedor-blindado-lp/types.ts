export interface Lesson {
  id: number;
  title: string;
  description: string;
  duration?: string;
}

export interface Module {
  id: number;
  title: string;
  subtitle: string;
  lessons: Lesson[];
}