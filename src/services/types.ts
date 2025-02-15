export interface MenuItem {
    name: string;
  }

  export interface Menu {
    foods: MenuItem[];
    drinks: MenuItem[];
  }

  export interface Restaurant {
    id: string;
    name: string;
    description: string;
    city: string;
    address: string;
    pictureId: string;
    categories: { name: string }[];
    menus: Menu;
    rating: number;
    customerReviews: {
      name: string;
      review: string;
      date: string;
    }[];
    discount?: number;
  }

  export interface CartItem {
    name: string;
    price?: number;
    quantity?: number;
    pictureId?: string;
    discount?: number;
  }
