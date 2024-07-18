export interface RestaurantBranch {
  id: number;
  name: string;
  logo: string;
  restaurant_name: string;
  latitude: string;
  longitude: string;
  address: string;
  contact_email: string;
  contact_number: string;
  open_time: string;
  close_time: string;
  restaurant_open: boolean;
}

export interface BranchDetail {
  id: number;
  name: string;
  address: string;
  is_delivery: boolean;
  is_dinein: boolean;
  is_freedelivery: boolean;
  order_taking: boolean;
  is_takeaway: boolean;
  tax_include: boolean;
  tax_percent: string;
  logo: string;
  latitude: string;
  longitude: string;
  town_id: number;
  minimum_order_value: number;
  mobile_number: string | null;
  mobile_number2: string | null;
  mobile_number3: string | null;
  phone_number: string | null;
  phone_number2: string | null;
  phone_number3: string | null;
  contact_number: string;
  contact_email: string;
  delivery_fee: string;
  order_discount_percent: number;
  currency: string;
  restaurant_open: boolean;
  open_time: string;
  close_time: string;
  is_order_by_town: boolean;
  lstCategory: MenuCategory;
}

export interface MenuCategory {
  id: number;
  name: string;
  branchName: string;
  image: string;
  image_url: string;
  menuList: BranchMenu[];
}

export interface BranchMenu {
  id: number;
  name: string;
  price: string;
  take_away_price: string;
  delivery_price: string;
  image: string;
  image_url: string;
  ingredient: string | null;
  description: string;
  isFav: boolean;
  rating: Rating;
  menu_variations: Menu_variation[];
  choice_group: Choice_groups[];
}

interface Rating {
  ratedBy: number;
  userRating: number;
  rating: number;
}

export interface Menu_variation {
  id: number;
  name: string;
  price: string;
  take_away_price: string;
  delivery_price: string;
  sorting: number;
  menu_id: number;
  choice_groups: Choice_groups[];
}

export interface Choice_groups {
  id: number;
  name: string;
  min_choices: number;
  max_choices: number;
  sorting: number;
  branch_id: number;
  is_deleted: number;
  pivot: {
    menu_variation_id: number;
    choice_group_id: number;
  };
  choices: Choices[];
}

export interface Choices {
  id: number;
  name: string;
  choice_group_id: number;
  price: string;
  take_away_price: string;
  delivery_price: string;
  sorting: number;
}
