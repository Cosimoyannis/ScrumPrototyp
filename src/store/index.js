import { createStore } from "vuex";

import todos from "@/store/todos/index.js";
import notes from "@/store/notizen/index.js";
import users from "@/store/user/index.js";
const store = createStore({
  modules: {
    todoModule: todos,
    notizModule: notes,
    userModule: users,
  },
  state() {
    return {
      user: [
        {
          id: "1",
          firstName: "Metehan",
          lastName: "Adanur",
          role: "developer",
          todos: [],
        },
        {
          id: "2",
          firstName: "Yafes",
          lastName: "Ekim",
          role: "developer",
          todos: [],
        },
        {
          id: "3",
          firstName: "Long",
          lastName: "Ha",
          role: "developer",
          todos: [],
        },
        {
          id: "4",
          firstName: "John",
          lastName: "Bachhuber",
          role: "developer",
          todos: [],
        },
        {
          id: "5",
          firstName: "Onur",
          lastName: "Ilhan",
          role: "scrum-master",
          todos: [],
        },
        {
          id: "6",
          firstName: "Uygar",
          lastName: "Ilhan",
          role: "product-owner",
          todos: [],
        },
        {
          id: "7",
          firstName: "Samet",
          lastName: "Dogan",
          role: "developer",
          todos: [],
        },
        {
          id: "8",
          firstName: "Cosimo",
          lastName: "Teklenburg",
          role: "developer",
          todos: [],
        },
      ],
    };
  },
});

export default store;
