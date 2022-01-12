export interface LabelsRes {
  label: Label;
}

export interface Label {
  data: LabelData;
}

export interface LabelData {
  attributes: Attributes;
}

export interface Attributes {
  skills: Skills;
  job: Job;
  portfolio: Job;
  contact: Contact;
}

export interface Contact {
  title: string;
  name: string;
  email: string;
  message: string;
  send: string;
}

export interface Job {
  title: string;
}

export interface Skills {
  title: string;
  loadMore: string;
  years: string;
}
