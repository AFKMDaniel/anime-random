export interface IAnime {
  data: {
    mal_id: number,
    images: {
      jpg: {
        image_url: string;
        small_image_url: string;
        large_image_url: string;
      };
      webp: {
        image_url: string;
        small_image_url: string;
        large_image_url: string;
      };
    };
    title: string;
    title_japanese: string;
    type: string;
    source: string;
    episodes: number;
    status: string;
    duration: string;
    rating: string;
    synopsis: string;
    studios: {
      name: string;
    }[];
    genres: {
      name: string;
    }[];
  };
}
