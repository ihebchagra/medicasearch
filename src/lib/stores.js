import { writable } from 'svelte/store';
/**
 * A writable store that holds a string value.
 * @type {import('svelte/store').Writable<any[]>}
 */
export const MedicasearchSearchResults = writable([]);
/** @type {import('svelte/store').Writable<string>}*/
export const MedicasearchSearchValue = writable('');
/** @type {import('svelte/store').Writable<any>}*/
export const MedicasearchMinisearch = writable(undefined);
