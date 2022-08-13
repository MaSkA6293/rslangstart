import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const wordsApi = createApi({
  reducerPath: 'wordsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://rslang-be.herokuapp.com',
  }),
  endpoints: (build) => ({
    getWord: build.query<void, void>({
      query: () => 'words',
    }),
  }),
});

export const { useGetWordQuery } = wordsApi;
