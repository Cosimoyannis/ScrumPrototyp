import mutations from "./mutations";
import actions from "./actions";
import getters from "./getters";

export default {
  namespaced: true,
  state() {
    return {
      users: [
        {
          id: "u1",
          firstName: "Metehan",
          lastName: "Adanur",
          role: "Chief Developer",
          todos: [
            "developing the prototyp",
            "implement new features",
            "research",
          ],
          imgSrc: "https://cdn-icons-png.flaticon.com/512/6840/6840478.png",
        },
        {
          id: "u2",
          firstName: "Onur",
          lastName: "Ilhan",
          role: "Scrum Master",
          todos: ["managing the project"],
          imgSrc: "https://cdn-icons-png.flaticon.com/512/1933/1933998.png",
        },
        {
          id: "u3",
          firstName: "Uygar",
          lastName: "Ilhan",
          role: "Product Owner",
          todos: ["get the actual project status"],
          imgSrc: "https://cdn-icons-png.flaticon.com/512/6656/6656093.png",
        },
      ],
    };
  },
  mutations,
  actions,
  getters,
};
