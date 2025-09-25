export interface Profile {
  id: number;
  name: string;
  title: string;
  location: string;
  email: string;
  phone: string;
  linktree: string;
}

export interface Project {
  id: number;
  title: string;
  description: string;
  link: string;
  year: number;
  tags: string;
}

export interface Experience {
  id: number;
  company: string;
  role: string;
  period: string;
  details: string;
}

export interface Education {
  id: number;
  institution: string;
  degree: string;
  gpa: string;
  period: string;
  notes: string;
}

export interface Certification {
  id: number;
  name: string;
  issuer: string;
  year: number;
  link: string;
}
