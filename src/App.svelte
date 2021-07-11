<script>
  import { Router, Route, Link } from "svelte-routing";
  import Dashboard from "./components/Dashboard.svelte";
  import Todos from "./components/Todo.svelte";
  import Contacts from "./components/Contacts.svelte";
  export let url = "";
</script>

<Router {url}>
  <header>
    <nav class="header">
      <Link to="/">Home</Link>
      <Link to="/todos">Todos</Link>
      <Link to="/contacts">Contacts</Link>
    </nav>
  </header>
  <main>
    <Route path="/">
      <Dashboard />
    </Route>
    <Route path="/todos">
      <Todos />
    </Route>
    <Route path="/contacts">
      <Contacts />
    </Route>
  </main>
</Router>

<style>
  .header {
    display: flex;
    justify-content: space-evenly;
    align-items: stretch;
    padding-bottom: 10px;
    border-bottom: 1px solid gray;
  }
</style>
