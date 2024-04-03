import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

export const apiSlice = createApi({
    reducerPath: `Api`,
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:3001/api',
    }),
    endpoints: (builder) => ({
        createUser: builder.query<any, any>({
            query: (payload) => ({
                url: `user/create`,
                method:'POST',
                body: payload
            }),
        }),
        loginUser: builder.query<any, any>({
            query: (payload) => ({
                url: `user/login`,
                method:'POST',
                body: payload
            }),
        }),
        getBookList: builder.query<any, any>({
            query: (payload) => ({
                url: `book/list`,
            }),
        }),
        addBook: builder.query<any, any>({
            query: (payload) => ({
                url: `book/add`,
                method:'POST',
                body: payload
            }),
        }),
        deleteBook: builder.query<any, any>({
            query: (payload) => ({
                url: `book/delete`,
                method:'DELETE',
                body: payload
            }),
        })
    })
})

export const {
    useGetBookListQuery,
    useLazyCreateUserQuery,
    useLazyLoginUserQuery,
    useLazyAddBookQuery,
    useLazyDeleteBookQuery,
} = apiSlice
