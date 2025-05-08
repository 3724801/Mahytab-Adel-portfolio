import type { CategoryId } from './data/categories';

export interface Tag {
  name: string;
  color: string;
}

export interface ProjectType {
  title: string;
  description: string;
  image: string;
  icon: string;
  iconColor: string;
  tags: Tag[];
  githubLink: string;
  category: CategoryId;
}