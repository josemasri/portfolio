export interface SkillsRes {
  skills: Skills;
}

export interface Skills {
  data: Datum[];
  meta: Meta;
}

export interface Datum {
  id: number;
  attributes: SkillAttributes;
}

export interface SkillAttributes {
  name: string;
  icon: Icon;
  years: number;
  gradient: string;
  textColor: string;
}

export interface Icon {
  data: IconData;
}

export interface IconData {
  attributes: DataAttributes;
}

export interface DataAttributes {
  name: string;
}

export interface Meta {
  pagination: Pagination;
}

export interface Pagination {
  pageCount: number;
}
