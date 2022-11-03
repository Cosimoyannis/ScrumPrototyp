import mutations from "./mutations";
import actions from "./actions";
import getters from "./getters";

export default {
  namespaced: true,
  state() {
    return {
      todos: [
        {
          statDate: '2022-01-10',
          endDate: '2022-03-10',
          isFinished: false,
          description: "Das ist ein neues Todo und muss bis zu untenstehenden Datum beendet werden",
          editor: ["metehan", "yafes"],
          title: "Dummy Title",
          priority: "A",
        },
      ],
    };
  },
  mutations,
  actions,
  getters,
};
