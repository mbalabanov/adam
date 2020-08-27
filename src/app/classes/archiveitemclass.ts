export interface ArchiveItemClass {
    id: string;
    category: string;
    name: string;
    aliases: Array<string>;
    shortdescription: string;
    longdescription: string;
    dates: Array<any>;
    tags: Array<string>;
    images: Array<any>;
    videos: Array<any>;
    websiteURLs: Array<any>;
    assets: Array<any>;
    artifacts: Array<string>;
    persons: Array<string>;
    events: Array<string>;
}

export interface ArchiveItemDates {
    label: string;
    date: string;
}

export interface ArchiveItemImages {
    id: string;
    url: string;
    name: string;
    description: string;
}

export interface ArchiveItemVideos {
    id: string;
    url: string;
    name: string;
    description: string;
}

export interface ArchiveItemWebsiteURLs {
    id: string;
    name: string;
    url: string;
}

export interface ArchiveItemAssets {
    id: string;
    name: string;
    url: string;
}