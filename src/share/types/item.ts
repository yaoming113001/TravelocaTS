export interface Item {
  id: string;
  title: string;
  content: string;
  comment: Comment[];
  price: number;
  image: string;
  phone: string;
  email: string;
  rating: number
}

export interface Comment {
  id: string;
  title: string;
  rating: number;
}