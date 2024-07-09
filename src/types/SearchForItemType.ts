interface SpotifyObject {
  href: string;
  limit: number;
  next: string;
  offset: number;
  previous: string;
  total: number;
  items: Array<Item>;
}

interface Item {
  album?: Album;
  artists?: Array<Artist>;
  available_markets?: Array<string>;
  disc_number?: number;
  duration_ms?: number;
  explicit?: boolean;
  external_ids?: ExternalIds;
  external_urls: ExternalUrls;
  href: string;
  id: string;
  is_playable?: boolean;
  linked_from?: object;
  restrictions?: Restrictions;
  name: string;
  popularity?: number;
  preview_url?: string;
  track_number?: number;
  type: string;
  uri: string;
  is_local?: boolean;
  followers?: Followers;
  genres?: Array<string>;
  images?: Array<Image>;
  description?: string;
  html_description?: string;
  total_episodes?: number;
  audio_preview_url?: string;
  language?: string;
  languages?: Array<string>;
  release_date?: string;
  release_date_precision?: string;
  resume_point?: ResumePoint;
  edition?: string;
  narrators?: Array<Narrator>;
  media_type?: string;
  total_chapters?: number;
}

interface Album {
  album_type: string;
  total_tracks: number;
  available_markets: Array<string>;
  external_urls: ExternalUrls;
  href: string;
  id: string;
  images: Array<Image>;
  name: string;
  release_date: string;
  release_date_precision: string;
  restrictions?: Restrictions;
  type: string;
  uri: string;
  artists: Array<Artist>;
}

interface Artist {
  external_urls: ExternalUrls;
  followers?: Followers;
  genres?: Array<string>;
  href: string;
  id: string;
  images?: Array<Image>;
  name: string;
  popularity?: number;
  type: string;
  uri: string;
}

interface ExternalIds {
  isrc: string;
  ean: string;
  upc: string;
}

interface ExternalUrls {
  spotify: string;
}

interface Restrictions {
  reason: string;
}

interface Followers {
  href: string;
  total: number;
}

interface Image {
  url: string;
  height: number;
  width: number;
}

interface ResumePoint {
  fully_played: boolean;
  resume_position_ms: number;
}

interface Narrator {
  name: string;
}

export interface SpotifyData {
  tracks: SpotifyObject;
  artists: SpotifyObject;
  albums: SpotifyObject;
  playlists: SpotifyObject;
  shows: SpotifyObject;
  episodes: SpotifyObject;
  audiobooks: SpotifyObject;
}

export type AsyncSearchIteminitialState = {
  searchList:SpotifyData | null,
  search:string,
  loading:boolean
}