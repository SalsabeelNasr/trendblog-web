export class Post {
    id: number;
    caption: string;
    img_url: string;
    thumb_url: string;
    comments: {
        id: number;
        message: string;
        created_at: string;
        username: string;
    }[];
    rating: number;
}
