export default interface Data {
  id: string;
  file: string;
  name: string;
  type: string;
  environment: string;
  short_description: string;
  description: string;
  svg: string;
}

export interface TechnologySectionProps {
  title: string;
  type: string;
  data: Data[] | null;
}
