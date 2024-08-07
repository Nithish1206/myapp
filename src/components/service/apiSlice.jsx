import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "https://api.escuelajs.co/api/v1" }),
  tagTypes: ["products"],
  endpoints: (builder) => ({
    getAllProducts: builder.query({
      query: () => "/products",
      providesTags: ["products"],
    }),

    getProduct: builder.query({
      query: (id) => `/products/${id}`,
      providesTags: ["products"],
    }),

    auth: builder.mutation({
      query: (value) => ({
        url: "/auth/login",
        method: "POST",
        body: value,
      }),
      providesTags: ["products"],
    }),

    addProduct: builder.mutation({
      query: (value) => ({
        url: "/products",
        method: "POST",
        body: value,
      }),
      invalidatesTags: ["products"],
    }),

    editProduct: builder.mutation({
      query: (value, id) => ({
        url: `/products/${value.id}`,
        method: "PUT",
        body: value,
      }),
      invalidatesTags: ["products"],
    }),

    deleteProduct: builder.mutation({
      query: (id) => ({
        url: `/products/${id}`,
        method: "DELETE",
        body: id,
      }),
      invalidatesTags: ["products"],
    }),
  }),
});
export const {
  useGetAllProductsQuery,
  useGetProductQuery,
  useAddProductMutation,
  useEditProductMutation,
  useDeleteProductMutation,
  useAuthMutation,
} = apiSlice;
