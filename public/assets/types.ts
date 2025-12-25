interface User {
  id: string;
  name: string;
  email: string;
  role: 'admin' | 'user' | 'guest';
}

interface Product {
  id: string;
  name: string;
  price: number;
  description?: string;
}

interface CartItem {
  product: Product;
  quantity: number;
}

interface Order {
  id: string;
  userId: string;
  items: CartItem[];
  total: number;
  status: 'pending' | 'shipped' | 'delivered';
}

type ApiResponse<T> = {
  data: T;
  message: string;
  success: boolean;
};

type PaginationParams = {
  page: number;
  limit: number;
};

type PaginatedResponse<T> = {
  data: T[];
  total: number;
  page: number;
  limit: number;
};