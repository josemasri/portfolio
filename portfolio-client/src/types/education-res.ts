export interface EducationRes {
    education: Education;
}

export interface Education {
    data: EducationData[];
}

export interface EducationData {
    id:         string;
    attributes: EducationAttributes;
}

export interface EducationAttributes {
    name:        string;
    description: string;
    images:      Images;
    url:         string;
}

export interface Images {
    data: ImagesData[];
}

export interface ImagesData {
    attributes: ImagesAttributes;
}

export interface ImagesAttributes {
    url: string;
}
