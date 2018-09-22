const initStates = {
  home: true,
  myProjects: false,
  newProjects: false,
  chatrooms: false,
  leaderboard: false,
  openings: false,
};

export default (state = initStates, action) => {
  switch (action.type) {
    case 'SHOW_HOME':
    return {
      ...state,
      home: action.home,
      myProjects: false,
      newProjects: false,
      chatrooms: false,
      leaderboard: false,
      openings: false,
    };
    case 'SHOW_MY_PROJECTS':
    return {
      ...state,
      home: false,
      myProjects: action.myProjects,
      newProjects: false,
      chatrooms: false,
      leaderboard: false,
      openings: false,
    };
    case 'SHOW_NEW_PROJECTS':
    return {
      ...state,
      home: false,
      myProjects: false,
      newProjects: action.newProjects,
      chatrooms: false,
      leaderboard: false,
      openings: false,
    };
    case 'SHOW_CHATROOMS':
    return {
      ...state,
      home: false,
      myProjects: false,
      newProjects: false,
      chatrooms: action.chatrooms,
      leaderboard: false,
      openings: false,
    };
    case 'SHOW_LEADERBOARD':
    return {
      ...state,
      home: false,
      myProjects: false,
      newProjects: false,
      chatrooms: false,
      leaderboard: action.leaderboard,
      openings: false,
    };
    case 'SHOW_OPENINGS':
    return {
      ...state,
      home: false,
      myProjects: false,
      newProjects: false,
      chatrooms: false,
      leaderboard: false,
      openings: action.openings,
    };
    default:
      return state;
  }
};
