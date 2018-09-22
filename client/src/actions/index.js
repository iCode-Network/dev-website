export const showHome = () => dispatch => {
  dispatch ({
    type: 'SHOW_HOME',
    home: true,
  })
};

export const showMyProjects = () => dispatch => {
  dispatch ({
    type: 'SHOW_MY_PROJECTS',
    myProjects: true,
  })
};

export const showNewProjects = () => dispatch => {
  dispatch ({
    type: 'SHOW_NEW_PROJECTS',
    newProjects: true,
  })
};

export const showChatrooms = () => dispatch => {
  dispatch ({
    type: 'SHOW_CHATROOMS',
    chatrooms: true,
  })
};

export const showLeaderboard = () => dispatch => {
  dispatch ({
    type: 'SHOW_LEADERBOARD',
    leaderboard: true,
  })
};

export const showOpenings = () => dispatch => {
  dispatch ({
    type: 'SHOW_OPENINGS',
    openings: true,
  })
};
