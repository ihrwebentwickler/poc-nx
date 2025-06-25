import { createStore, withProps } from '@ngneat/elf';

export interface PersonState {
  name: string;
}

export const personStore = createStore(
  { name: 'person' },
  withProps<PersonState>({ name: '' })
);

export function setName(name: string): void {
  personStore.update((state) => ({ name }));
}

export const person$ = personStore.pipe((state) => state);
