import { configureStore } from '@reduxjs/toolkit'
import utilsReducer from "./Utils/utilsSlice"
import productsReducer from "./Products/productsSlice"
import cartReducer from "./Cart/cartSlice"
import { rootApi } from '../api/apiSlice'

export const store = configureStore({
    reducer: {
        utils: utilsReducer,
        products: productsReducer,
        cart: cartReducer,
        [rootApi.reducerPath]: rootApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(rootApi.middleware),
})
