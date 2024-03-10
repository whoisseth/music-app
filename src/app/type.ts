/** @format */

type Album = {
  id: string;
  name: string;
  url: string;
};

type Image = {
  quality: string;
  url: string;
};

type DownloadUrl = {
  quality: string;
  url: string;
};

type Song = {
  id: string;
  name: string;
  album: Album;
  year: string;
  releaseDate: string | null;
  duration: string;
  label: string;
  primaryArtists: string;
  primaryArtistsId: string;
  featuredArtists: string;
  featuredArtistsId: string;
  explicitContent: number;
  playCount: string;
  language: string;
  hasLyrics: string;
  url: string;
  copyright: string;
  image: Image[];
  downloadUrl: DownloadUrl[];
};

export type ApiResponse = {
  status: string;
  message: string | null;
  data: {
    total: number;
    start: number;
    results: Song[];
  };
};
