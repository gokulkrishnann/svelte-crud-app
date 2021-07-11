<script>
  import { todoCount } from "../store/todo";
  import { contactsStore } from "../store/contacts";
</script>

<div class="dashboard">
  <h3>Dashboard page</h3>
  <p>Simple dashboard for todos and contacts</p>

  <div class="container">
    <div class="card-container">
      <p>Number of todos</p>
      <h4>{$todoCount}</h4>
    </div>
    <div class="card-container">
      {#await contactsStore}
        <p>Fetching data...</p>
      {:then result}
        <p>Number of contacts</p>
        <h4>{result.contactsCount}</h4>
      {/await}
    </div>
  </div>
</div>

<style>
  .dashboard {
    text-align: center;
  }
  .container {
    justify-content: center;
    display: flex;
    gap: 20px;
    flex-direction: row;
    flex-wrap: wrap;
  }
  .card-container {
    display: flex;
    flex-direction: column;
    border-radius: 4px;
    border: 1px solid grey;
    justify-content: center;
    width: 30%;
  }
</style>
