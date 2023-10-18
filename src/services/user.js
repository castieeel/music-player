import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://skypro-music-api.skyeng.tech",
  }),
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (body) => ({
        url: "/user/login/",
        method: "POST",
        body,
      }),
    }),
    signup: builder.mutation({
      query: (body) => ({
        url: "/user/signup/",
        method: "POST",
        body,
      }),
    }),
    getToken: builder.mutation({
      query: (body) => ({
        url: "/user/token/",
        method: "POST",
        body,
      }),
    }),
    tokenRefresh: builder.mutation({
      query: (body) => ({
        url: "/user/token/refresh/",
        method: "POST",
        body,
      }),
    }),
  }),
});

export const {
  useLoginMutation,
  useSignupMutation,
  useGetTokenMutation,
  useTokenRefreshMutation,
} = userApi;
