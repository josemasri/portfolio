export interface ProjectsRes {
    projects: Projects;
}

export interface Projects {
    data: ProjectData[];
}

export interface ProjectData {
    id:         string;
    attributes: PurpleAttributes;
}

export interface PurpleAttributes {
    name:        string;
    description: string;
    images:      Images;
    url:         string;
}

export interface Images {
    data: ImagesDatum[];
}

export interface ImagesDatum {
    attributes: FluffyAttributes;
}

export interface FluffyAttributes {
    url: string;
}
