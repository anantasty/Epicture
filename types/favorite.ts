export default interface Favorite {
  id: string;
  title: string;
  description: string;
  cover: string;
  cover_width: number;
  cover_height: number;
  width: number;
  height: number;
  account_url: string;
  account_id: number;
  privacy: string;
  views: number;
  link: string;
  ups: number;
  downs: number;
  points: number;
  score: number;
  is_album: boolean;
  vote: string;
  favorite: boolean;
  nsfw: boolean;
  section: string | null;
  comment_count: number;
  favorite_count: number;
  topic: string;
  topic_id: string;
  images_count: number;
  datetime: number;
  in_gallery: boolean;
  in_most_viral: boolean;
  tags: Record<string, unknown>;
  images: Record<string, unknown>;
  has_sound: boolean;
  animated: boolean;
  type: string;
  size: number;
}
