import {writable} from 'svelte/store';

export const pagePath = writable(window.location.pathname);