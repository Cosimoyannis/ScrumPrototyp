export default {
  addTodo(context, data) {
    const todo = {
      title: data.title,
      desc: data.desc,
      prio: data.prio,
      editors: data.editors,
      startDate: data.startDate,
      endDate: data.endDate,
    };

    context.commit("addTodo", todo);
  },
};
