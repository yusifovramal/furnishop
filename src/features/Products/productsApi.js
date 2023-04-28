import { rootApi } from "../../api/apiSlice"

export const workoutApi = rootApi.injectEndpoints({
    endpoints: (builder) => ({
        getProducts: builder.query({
            query: () => "/react-store-products",
            providesTags: ["Products"],
        }),
        getSingleProduct: builder.query({
            query: (id) => `/react-store-single-product?id=${id}`,
            providesTags: ["Products"],
        }),
       
    })
})

export const { useGetProductsQuery,useGetSingleProductQuery} = workoutApi
