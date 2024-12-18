import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const CustomerQuery = createApi({
  reducerPath: "CustomerQuery",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com",
  }),
  endpoints: (builder) => ({
    getPost: builder.query({
      query: (id) => `/posts/${id}`,
      providesTags: ["GET_POST"],
    }),
    addPost: builder.mutation({
      query: (body) => ({
        url: `/posts`,
        method: "POST",
        body,
      }),
      invalidatesTags: ["GET_POST"],
    }),
  }),
});

export const { useGetPostQuery, useLazyGetPostQuery, useAddPostMutation } =
  CustomerQuery;

export default CustomerQuery;
