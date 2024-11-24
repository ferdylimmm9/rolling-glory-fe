export type PaginationData<T> = {
  meta: {
    totalItems: number;
    currentPage: number;
    itemPerPage: number;
    totalPages: number;
  };
  links: {
    self: string;
    next: string;
    last: string;
  };
  data: T[];
};

export type ResultType<T> = {
  data: T;
};