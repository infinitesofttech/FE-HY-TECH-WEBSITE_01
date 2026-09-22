export type ServiceCategory =
  | 'online-services'
  | 'education-services'
  | 'job-services'
  | 'printing-services'
  | 'computer-courses'
  | 'other-services';

export interface Service {
  id: string;
  category: string;
  categoryId: ServiceCategory | string;
  slug: string;
  title: string;
  titleGujarati?: string;
  icon?: string;
  image?: string;
  shortDescription?: string;
  overview: string;

  newApplication: string[];
  correctionUpdate: string[];
  requiredDocuments: string[];
  eligibility: string[];
  process: string[];
  importantNotes: string[];

  officialWebsite?: string;
  active?: boolean;
  isActive?: boolean;
}

export interface CategoryInfo {
  id: string;
  slug: string;
  title: {
    en: string;
    gu: string;
  };
  icon: string;
  catImage?: string;
  count?: number;
  isActive: boolean;
}
