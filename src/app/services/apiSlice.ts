import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { TodosType } from '../../types';

export const dummyApiSlice = createApi({
  reducerPath: 'dummyApiSlice',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://dummyjson.com/' }),
  tagTypes: ['todos'],
  endpoints: (builder) => ({
    getTodos: builder.query<TodosType, string>({
      query: () => 'todos',
      providesTags: ['todos'],
    }),

    addTodos: builder.mutation<TodosType, TodosType>({
      query: (newTodo) => ({
        url: 'todos/add',
        method: 'POST',
        body: newTodo,
      }),
      invalidatesTags: ['todos'],
    }),

    upateTodos: builder.mutation<TodosType, number>({
      query: (id, data) => ({
        method: 'PUT',
        url: `todos/${id}`,
        body: data,
      }),
    }),

    deleteTodos: builder.mutation<TodosType, number>({
      query: (id) => `todos/${id}`,
      invalidatesTags: ['todos'],
    }),
  }),
});

export const { useGetTodosQuery, useAddTodosMutation } = dummyApiSlice;

export default dummyApiSlice;
