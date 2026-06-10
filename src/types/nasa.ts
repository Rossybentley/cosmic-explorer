export interface APOD {
  title: string;
  explanation: string;
  url: string;
  date: string;
}

export interface NASAImageLink {
  href: string;
  rel: string;
  render?: string;
}

export interface NASAImageData {
  nasa_id: string;
  title: string;
  description: string;
  date_created: string;
  media_type: "image" | "video" | "audio";
  center: string;
  keywords?: string[];
}

export interface NASAImageItem {
  href: string;
  data: NASAImageData[];
  links?: NASAImageLink[];
}
