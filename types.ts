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