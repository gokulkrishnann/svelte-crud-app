<script>
  import { todoStore } from "../store/todo";
  const todoList = todoStore;

  let data = {
    title: "",
    category: "",
    content: "",
    id: null,
  };
  let editFlag = false;
  let editTodo = (note) => {
    editFlag = true;
    data = note;
  };
  let resetTodo = () => {
    data = {
      title: "",
      category: "",
      content: "",
      id: null,
    };
    editFlag = false;
  };
</script>

<section>
  <div class="app-container">
    <div class="row mt-5">
      <div class="card">
        <div>
          <div class="card-body">
            <h5 class="card-title mb-4">
              {editFlag ? "Edit-Todo" : "Add-Todo"}
            </h5>
            <form>
              <div class="form-group">
                <label for="title">Title</label>
                <input
                  bind:value={data.title}
                  type="text"
                  class="form-control"
                  id="text"
                  placeholder="Todo Title"
                />
              </div>
              <div class="form-group">
                <label for="category">Category</label>
                <select
                  class="form-control"
                  id="category"
                  bind:value={data.category}
                >
                  <option value="" selected disabled>Select a category</option>
                  <option value="self learning">Self learning</option>
                  <option value="work">Work</option>
                  <option value="Home">Home</option>
                </select>
              </div>
              <div class="form-group">
                <label for="content">Content</label>
                <textarea
                  bind:value={data.content}
                  class="form-control"
                  id="content"
                  rows="3"
                  placeholder="Note Content"
                />
                {#if editFlag === false}
                  <div class="form-group">
                    <button
                      type="submit"
                      on:click|preventDefault={() => {
                        todoList.addTodo(data);
                        resetTodo();
                      }}
                      class="btn btn-primary"
                    >
                      Add Todo
                    </button>
                    <button
                      type="submit"
                      on:click|preventDefault={() => resetTodo()}
                      class="btn btn-primary"
                    >
                      Reset Todo
                    </button>
                  </div>
                {:else}
                  <button
                    type="submit"
                    on:click|preventDefault={() => {
                      todoList.updateTodo(data);
                      resetTodo();
                    }}
                    class="btn btn-info"
                  >
                    Save Todo
                  </button>
                {/if}
              </div>
            </form>
          </div>
        </div>
      </div>
      <div class="col-md-6">
        {#each $todoList as todo (todo.id)}
          <div class="todo-card">
            <h5 class="card-title">{todo.title}</h5>
            <div class="button-container">
              <button class="btn btn-info" on:click={editTodo(todo)}>
                Edit
              </button>
              <button
                class="btn btn-danger"
                on:click={() => {
                  todoList.deleteTodo(todo);
                  resetTodo();
                }}
              >
                Delete
              </button>
            </div>
          </div>
        {/each}
      </div>
    </div>
  </div>
</section>

<style>
  @import url("https://fonts.googleapis.com/css?family=Nunito&display=swap");
  * {
    font-family: "Nunito", sans-serif;
  }
  .app-container {
    padding: 40px 0 40px 0;
    justify-content: center;
    display: flex;
    flex-direction: column;
  }
  button {
    margin-top: 10px;
  }
  .row {
    display: flex;
    justify-content: space-around;
    gap: 10px;
  }

  .button-container {
    display: flex;
    gap: 10px;
    justify-content: center;
  }
  .card-title {
    text-align: center;
    font-weight: bold;
  }
  .todo-card {
    border: 1px solid gray;
    padding: 10px;
    margin-bottom: 10px;
    justify-content: center;
    display: flex;
    flex-direction: column;
    width: 40%;
  }
  .card {
    border: 1px solid gray;
    border-radius: 4px;
    padding: 40px;
    margin-bottom: 10px;
    justify-content: center;
    display: flex;
    flex-direction: column;
  }
</style>
