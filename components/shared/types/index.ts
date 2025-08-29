// Tipos para los componentes compartidos

export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export interface AppConfig {
  name: string;
  company: string;
  website: string;
  email: string;
  toolsUrl: string;
  copyrightMessage: string;
}

export interface ExternalLinks {
  website: string;
  tools: string;
  contact: string;
  CONTACT: string;
  about: string;
  services: string;
  blog: string;
  linkedin: string;
  LINKEDIN: string;
  instagram: string;
  INSTAGRAM: string;
  facebook: string;
  twitter: string;
  youtube: string;
}

export interface Routes {
  home: string;
  balasto: string;
  beam: string;
  steel: string;
  asSlab: string;
  armaduraFlexion: string;
}
