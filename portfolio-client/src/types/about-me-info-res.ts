export interface AboutMeInfoRes {
    aboutMeInfo: AboutMeInfo;
}

export interface AboutMeInfo {
    data: AboutMeInfoData;
}

export interface AboutMeInfoData {
    attributes: AboutMeInfoAttributes;
}

export interface AboutMeInfoAttributes {
    name:        string;
    jobTitle:    string;
    description: string;
    picture:     Picture;
}

export interface Picture {
    data: PictureData;
}

export interface PictureData {
    attributes: FluffyAttributes;
}

export interface FluffyAttributes {
    url: string;
}
