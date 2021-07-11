<script>
  export let query, handleSubmit;
</script>

<div class="search">
  <form class="search-form" on:submit|preventDefault={handleSubmit}>
    <input
      bind:value={query}
      class="search-input"
      type="search"
      placeholder="Search for users"
    />
  </form>
</div>

<style>
  .search {
    text-align: center;
  }
  .search-input {
    width: 100%;
    max-width: 550px;
    border-radius: 4px;
    border: 1px solid #ccc;
    padding: 10px 20px;
    font-size: 20px;
    margin-bottom: 50px;
  }
</style>
