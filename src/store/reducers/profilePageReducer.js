const defaultState = {
  currentUser: null,
  users: [
    {id: 1, name: "Екатерина"},
    {id: 2, name: "Максим"},
  ],
};
const UsersPageReducer = (state = defaultState, action) => {
  const stateCopy = Object.assign({}, state);
  switch (action.type) {
    case "DELETE_USER":
      stateCopy.users = stateCopy.users.filter(
        (user) => user.id !== action.payload.id
      );
      stateCopy.currentUser = null;
      localStorage.removeItem("user");
      return stateCopy;
    case "SET_CURRENT_USER":
      stateCopy.currentUser = action.payload.user;
      localStorage.setItem("user", JSON.stringify(action.payload.user));
      return stateCopy;

    default:
      return state;
  }
};

export default UsersPageReducer;
