import {writable} from 'svelte/store';

export const currentPath = writable(window.location.pathname);

export const pathArr = writable([]);

export const params = writable({});
