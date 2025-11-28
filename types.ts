export interface ButtonProps {
  label: string;
  variant?: 'primary' | 'outline' | 'ghost';
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  isLoading?: boolean;
  className?: string;
}

export interface SocialLink {
  name: string;
  href: string;
  icon: React.FC<{ className?: string }>;
}

export interface ContactFormData {
  email: string;
  subject: string;
  message: string;
}

export interface StoryStage {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  imageUrl: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  title: string;
  imageUrl: string;
}

export interface ErrorConfig {
  code: number;
  title: string;
  message: string;
}

export type ErrorType = 400 | 401 | 403 | 404 | 500 | 503;
