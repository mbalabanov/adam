// Classes for new Archive Items and their parts

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

export interface ArchiveItemClass {
    id: string;
    category: string;
    name: string;
    aliases: Array<string>;
    shortdescription: string;
    longdescription: string;
    dates: ArchiveItemDates[];
    tags: Array<string>;
    images: ArchiveItemImages[];
    videos: ArchiveItemVideos[];
    websiteURLs: ArchiveItemWebsiteURLs[];
    assets: ArchiveItemAssets[];
    artifacts: Array<string>;
    persons: Array<string>;
    events: Array<string>;
}