import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const rootApi = createApi({
    reducerPath: "user",
    baseQuery: fetchBaseQuery({
        baseUrl: "https://course-api.com/",
    }),
    tagTypes: ["Products"],
    endpoints: (builder) => ({}),
});




