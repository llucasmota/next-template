export interface ICheckoutService {
  createCart(data: any): Promise<any>;
  getCart(): Promise<any>;
  updateCart(data: any): Promise<any>;
  removeCart(id: string): Promise<void>;
}
