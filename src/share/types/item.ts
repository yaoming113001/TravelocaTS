export interface Item extends DateOrder {
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

export interface DateOrder {
  date: Date;
}

export interface Comment {
  id: string;
  title: string;
  rating: number;
}

