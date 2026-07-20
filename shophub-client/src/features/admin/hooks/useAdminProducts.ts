import { useMutation, useQueryClient } from "@tanstack/react-query";
import { productService } from "../../../services/product.service";

import type { ProductFormData } from "../../../types/product";
import { toast } from "sonner";


export function useDeleteProduct() {

  const queryClient = useQueryClient();

  return useMutation({

    mutationFn: (id:number) =>
      productService.deleteProduct(id),


    onSuccess: () => {

      toast.success(
        "Product deleted successfully"
      );


      queryClient.invalidateQueries({
        queryKey:["products"],
      });

    },


    onError: () => {

      toast.error(
        "Failed to delete product"
      );

    }

  });

}



export function useCreateProduct(){

  const queryClient = useQueryClient();

  return useMutation({

    mutationFn:(data:ProductFormData)=>
      productService.createProduct(data),


    onSuccess:()=>{

      queryClient.invalidateQueries({
        queryKey:["products"]
      });

    }

  });

}



export function useUpdateProduct(){

  const queryClient = useQueryClient();


  return useMutation({

    mutationFn:({
      id,
      data
    }:{
      id:number;
      data:ProductFormData;
    })=>
      productService.updateProduct(id,data),


    onSuccess:()=>{

      queryClient.invalidateQueries({
        queryKey:["products"]
      });

    }

  });

}