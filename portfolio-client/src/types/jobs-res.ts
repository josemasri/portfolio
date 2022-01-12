export interface JobsRes {
  jobs: Jobs;
}

export interface Jobs {
  data: JobData[];
}

export interface JobData {
  id: string;
  attributes: DatumAttributes;
}

export interface DatumAttributes {
  company: string;
  image: Image;
  start: string;
  end: string;
  description: string;
}

export interface Image {
  data: ImageData;
}

export interface ImageData {
  attributes: DataAttributes;
}

export interface DataAttributes {
  url: string;
}
