<script>
  import { onMount } from "svelte";
  import Search from "./Search.svelte";
  import { contactsStore } from "../store/contacts";
  let usersList = [];
  let searchQuery = "";
  onMount(async () => {
    let list = await contactsStore;
    usersList = list.contactsList;
  });
  const handleSubmit = async () => {
    searchQuery = searchQuery.trim();
    if (searchQuery === "") {
      let list = await contactsStore;
      usersList = list.contactsList;
      return;
    }
    usersList = usersList.filter((user) => {
      return Object.values(user)
        .join(" ")
        .toLowerCase()
        .includes(searchQuery.toLowerCase());
    });
  };
</script>

<section>
  <div class="app-container">
    <Search bind:query={searchQuery} {handleSubmit} />
    <h5>Total Number of users:{usersList.length}</h5>
    <div class="users">
      {#each usersList as user (user.id)}
        <div class="user-card">
          <p class="user-name">{user.name}</p>
          <p>{user.email}</p>
        </div>
      {/each}
    </div>
  </div>
</section>

<style>
  @import url("https://fonts.googleapis.com/css?family=Nunito&display=swap");
  * {
    font-family: "Nunito", sans-serif;
  }
  .app-container {
    padding: 40px;
  }

  .users {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 20px;
    justify-content: center;
  }

  h5 {
    text-align: center;
    padding-bottom: 10px;
  }

  .user-name {
    font-weight: bold;
  }
  .user-card {
    border: 1px solid gray;
    padding: 10px;
    margin-bottom: 10px;
    justify-content: center;
    display: flex;
    flex-direction: column;
    width: 20%;
    text-align: center;
  }
</style>
