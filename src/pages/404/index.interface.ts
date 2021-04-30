export interface ILocation {
  message: string;
  hash: string;
  key: string;
  pathname: string;
  search: string;
  state?: {
    message: string;
  };
}
