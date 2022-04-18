export type ParamsPost = {
  url: string;
  body?: any; // pensar em usar tipos que podem ser usados no body
  headers?: {
    [key: string]: string;
  };
};

export type ParamsGet = {
  url: string;
  headers?: {
    [key: string]: string;
  };
};
