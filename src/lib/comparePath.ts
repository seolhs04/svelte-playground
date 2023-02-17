export const isMatch = (propsPath, currentPath) => {
  const pathArr = propsPath.split('/');
  const currentPathArr = currentPath.split('/');
  for (let i = 0; i < pathArr.length; i++) {
    if (pathArr[i][0] === ':') {
      currentPathArr[i] = pathArr[i];
    }
  }
  return pathArr.join('') === currentPathArr.join('');
};

export const isNotFound = (pathArr, currentPath, propsPath) => {
  if (propsPath !== '*') return;
  let result = true;
  for (let i = 0; i < pathArr.length; i++) {
    if (isMatch(pathArr[i], currentPath)) {
      result = false;
      break;
    }
  }
  return result;
};
