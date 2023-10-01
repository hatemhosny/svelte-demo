<script>
  let title = "Svelte";
  let counter = 0;
  function increment() {
    counter += 1;
  }
</script>

<style>
  .container,
  .container button {
    text-align: center;
    font: 1em sans-serif;
  }
  .logo {
    width: 150px;
  }
</style>

<div class="container">
  <h1>Hello, {title}!</h1>
  <img class="logo" alt="logo" src="http://127.0.0.1:8080/livecodes/assets/templates/svelte.svg" />
  <p>You clicked {counter} times.</p>
  <button on:click="{increment}">Click me</button>
</div>
