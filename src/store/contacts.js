import { writable } from "svelte/store";

const fetchUsers = async () => {
  const response = await fetch("http://jsonplaceholder.typicode.com/users");
  const data = await response.json();
  console.log("fetch users");
  return data;
};
export async function contactsManager() {
  let list = await fetchUsers();
  const { subscribe } = writable(list);
  return {
    subscribe,
    contactsList: list,
    contactsCount: list.length,
  };
}

export const contactsStore = contactsManager();
export const contactsCount = writable(contactsStore);
