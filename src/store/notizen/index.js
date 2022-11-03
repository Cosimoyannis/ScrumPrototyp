import mutations from "./mutations";
import actions from "./actions";
import getters from "./getters";

export default {
  namespaced: true,
  state() {
    return {
      notizen: [
        {
          topic: "Dummy Note",
          note: "Das ist eine Test Notiz",
          author: "Metehan",
        },
      ],
    };
  },
  mutations,
  actions,
  getters,
};
