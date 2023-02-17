import {currentPath} from '@/store/path';

export const navigation = (path: string) => {
  currentPath.set(path);
  window.history.pushState('', '', path);
};
