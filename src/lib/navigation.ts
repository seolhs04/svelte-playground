import {pagePath} from '@/store/path';

export const navigation = (path: string) => {
  pagePath.set(path);
  window.history.pushState('', '', path);
};
