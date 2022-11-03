export default {
  addNote(context, data) {
    const notiz = {
      id: Math.floor(Math.random() * 1000000),
      topic: data.topic,
      note: data.note,
      author: data.author,
    };
    console.log(notiz);
    context.commit("addNotes", notiz);
  },
};
