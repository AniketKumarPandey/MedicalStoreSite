export interface Product {
  id: string;
  name: string;
  category: string;
  available: boolean;
  image?: string;
}

export interface User {
  isOwner: boolean;
}