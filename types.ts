export type ViewState = 'home' | 'project-detail';

export interface Project {
  id: string;
  title: string;
  role: string;
  summary: string;
  thumbnailPlaceholder: string;
  imageUrl?: string; // Path to image in public folder
  details?: ProjectDetails;
}

export interface ProjectDetails {
  engine: string;
  teamSize: string;
  duration: string;
  overview: string;
  contributions: {
    category: string;
    items: string[];
  }[];
  problemSolving?: {
    problem: string;
    solution: string;
  };
  takeaways: string[];
  galleryPlaceholders: string[];
  galleryImages?: string[]; // Paths to images/gifs in public folder
}

export interface NavProps {
  currentView: ViewState;
  onNavigate: (view: ViewState, payload?: string) => void;
}