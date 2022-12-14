export interface product {
  _id: string;
  name: string;
  description: string;
  stock: number,
  comments: comment[];
  price: number;
  salePrice?: number;
  variant?: Variant;
  images: Image[];
  categories: string[];
}
export interface Variant {
  size: string[] | never[];
  color: string[] | never[];
}
interface Image {
  url: string;
  title?: string;
  author?: string;
}
export interface productDetail {
  _id: string;
  name: string; //
  price: number; //
  stock: number; //
  salePrice?: number; //
  description: string; //
  content: string; //
  variant?: Variant; //
  images: Image[]; //
  categories: string[]; //
  comments: comment[]; //
}
export interface commentAuthor {
  _id: string;
  name: string;
  avatar: string;
}
export interface comment {
  _id: string;
  content: string;
  rating?: number;
  user: string;
  date: string;
  idProduct: string;
  idBlog: string;
}
export interface productCardProps {
  product: product;
}

export interface productCategorySectionProps {
  productList: product[];
  categoryList: string[];
  sectionName: string;
}

export interface CommentState {
  comments: any[];
  submitting: boolean;
  value: string;
}

export interface Props {
  CategoryList: String[];
  currentCategory: number;
  updateCategory: (index: number) => void;
}
export interface blog {
  _id: string;
  title: string;
  like: String[];
  share: number;
  description: string;
  category: string;
  author: string;
  date: Date;
  image: {
    url: string;
    title?: string;
  };
  content: string;
}
export interface blogCard {
  title: string;
  like: string[];
  comments: any;
  share: number;
  description?: string;
  category?: string;
  image: {
    url: string;
  };
  _id: string;
  author: string;
  date: Date;
}