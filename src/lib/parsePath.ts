const ROUTE_PARAMETER_REGEXP = /:(\w+)/g;
const URL_REGEXP = '([^\\/]+)';

export const parsePath = (path) => {
  const params = [];
  const parsedPath = path
    .replace(ROUTE_PARAMETER_REGEXP, (paramName) => {
      params.push(paramName);
      return URL_REGEXP;
    })
    .replace(/\//g, '\\/');

  return {parsedPath, params};
};

export const getUrlParams = (path, currentPath) => {
  const params = {};
  const matches = currentPath.match(new RegExp(`^${path.parsedPath}$`));

  matches.shift();
  matches.forEach((paramValue, index) => {
    const paramName = path.params[index].substr(1);
    params[paramName] = paramValue;
  });
  return params;
};

export const createParamsObj = (path, currentPath)=>{
  try {
    const parsedPath = parsePath(path);
    const paramsObj = getUrlParams(parsedPath, currentPath);
    return paramsObj
  } catch (e) {
    return {}
  }
}