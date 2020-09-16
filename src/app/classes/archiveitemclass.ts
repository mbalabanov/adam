// Classes for new Archive Items and their parts

export interface ArchiveItemDates {
    label: string;
    date: string;
}

export interface ArchiveItemImages {
    url: string;
    name: string;
    description: string;
}

export interface ArchiveItemVideos {
    url: string;
    name: string;
    description: string;
}

export interface ArchiveItemWebsiteURLs {
    name: string;
    url: string;
}

export interface ArchiveItemAssets {
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