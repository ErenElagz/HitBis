const logger = store => next => action => {
  console.log('Actoin:', action);
  const result = next(action);
  console.log('next state', store.getState());
  return result;
};

export default logger;
