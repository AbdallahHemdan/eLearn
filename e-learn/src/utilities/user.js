const getUserInfo = () => {
  // Dummy data and will get updated soon
  let userInfo = {
    id: '1561655',
    image:
      'https://avatars.githubusercontent.com/u/40190772?s=400&u=2a08ed3f414e7fca52a988b1eb1b09435a0e4d6e&v=4',
    username: 'Abdallah Hemdan',
    subtitle: 'Frontend Engineer',
    description: 'Part time ninja',
    type: 'instructor'
  };

  return userInfo;
};

const getUserId = () => {
  return localStorage.getItem('user_id');
};

const getUsername = () => {
  return localStorage.getItem('displayName');
};

export { getUserInfo, getUserId, getUsername };
