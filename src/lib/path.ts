
export const isMatch = (propsPath:string, currentPath:string) => {
  const pathArr = propsPath.split('/');
  const currentPathArr = currentPath.split('/');
  for (let i = 0; i < pathArr.length; i++) {
    if (pathArr[i][0] === ':') {
      currentPathArr[i] = pathArr[i];
    }
  }
  return pathArr.join('') === currentPathArr.join('');
};

export const isNotFound = (pathArr:Array<string>, currentPath:string, propsPath:string) => {
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

export const getPathListByElement = (childrenList: Array<Element>) => {
  const list = childrenList.reduce((a, c) => {
    if (c.id !== '*') a.push(c.id);
    return a;
  }, []);
  return list;
};
