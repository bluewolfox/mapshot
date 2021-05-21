export declare namespace M_Map {
  interface keyword {
    keyword: string;
  }

  interface lists {
    address_name: string
    category_group_code: string
    category_group_name: string
    category_name: string
    distance: string
    id: string
    phone: string
    place_name: string
    place_url: string
    road_address_name: string
    x: string
    y: string
  }
  interface pagenation {
    current: number
    first: number
    hasNextPage: Boolean
    hasPrevPage: Boolean
    last: number
    perPage: number
    totalCount: number
  }

  interface pagefunction {
    gotoFirst: () => void;
    gotoLast: () => void;
    gotoPage: (a: any) => void;
    nextPage: () => void;
    prevPage: () => void;
  }
}