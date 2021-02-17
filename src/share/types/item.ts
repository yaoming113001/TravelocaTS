export interface Item {
  address: string,
  city: number,
  content: string,
  email: string,
  id: number,
  image: string,
  is_active: number,
  phoneNumber: number,
  price: number,
  title: string,
  type: number,
  vote: number,
}

export interface Comment {
  id: string;
  title: string;
  rating: number;
}