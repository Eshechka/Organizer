let defaultState = {
  //   currentUser: { id: 2, name: "Максим" },
  currentUser: localStorage.getItem("user"),
  users: [
    { id: 1, name: "Екатерина" },
    { id: 2, name: "Максим" },
  ],
};
let UsersPageReducer = (state = defaultState, action) => {
  let stateCopy = {
    ...state,
  };
  switch (action.type) {
    case "DELETE_USER":
      stateCopy.users = stateCopy.users.filter(
        (user) => user.id !== action.payload.id
      );
      return stateCopy;

    default:
      return state;
  }
};

export default UsersPageReducer;
