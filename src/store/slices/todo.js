import { createSlice } from "@reduxjs/toolkit";

export const filters = {
  ALL: "ALL",
  DONE: "DONE",
  ACTIVE: "ACTIVE",
};

const initialState = {
  allIds: [],
  byIds: {},
  filterBy: filters.ALL,
};

let nextTodoId = 0;

export const todoSlice = createSlice({
  name: "todo",
  initialState,

  // Поле 'reducers' позволяет нам разметить все необходимые редьюсеры и сгенерировать необходимые связанные экшены
  reducers: {
    addTodo: (state, action) => {
      const id = ++nextTodoId;

      // Redux Toolkit позволяет нам писать логику мутации состояния в reducers.
      // Под капотом он не мутирует состояние напрямую, а использует библиотеку Immer, которая
      // обнаруживает изменения в «черновом состоянии» и создает новое неизменное состояние на основе этих изменений.
      state.allIds.push(id);

      state.byIds[id] = {
        content: action.payload,
        completed: false,
      };
    },

    removeTodo: (state, { payload }) => {
      const id = payload.id;

      // Удалить todo из allIds массива
      const allIds = state.allIds.filter((todoId) => todoId !== id);
      state.allIds = allIds;

      // Удалить todo из byIds объекта
      delete state.byIds[id];
    },

    filterBy(state, action) {
      state.filterBy = action.payload;
    },

    toggleCompleteness: (state, { payload }) => {
      const { id } = payload;

      const targetTodo = state.byIds[id];

      targetTodo.completed = !targetTodo.completed;
    },
  },
});

export const { addTodo, removeTodo, toggleCompleteness, filterBy } =
  todoSlice.actions;

export default todoSlice.reducer;
