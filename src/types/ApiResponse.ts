import { Product } from "@/model/User";

export interface ApiResponse {
  success: boolean;
  message: string;
  products?: Product[];

}