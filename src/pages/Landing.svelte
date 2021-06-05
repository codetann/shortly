<script>
  import { onMount } from "svelte";
  // components
  import Nav from "../components/Nav.svelte";
  import ActionContainer from "../components/ActionContainer.svelte";

  onMount(() => {
    window.scrollTo(0, 1);
  });
</script>

<!-- markup (zero or more items) goes here -->
<main>
  <Nav />

  <!-- body -->
  <section>
    <ActionContainer />
  </section>
</main>

<style>
  main {
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0 1rem 1rem 1rem;
  }

  section {
    height: 100%;
    width: 100%;
    background-image: linear-gradient(to right, #7269f2, #a27efe);
    border-radius: 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 2rem;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  }

  @media only screen and (min-width: 700px) {
    main {
      width: 100%;
      height: 100vh;
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 0 3rem 3rem 3rem;
    }
  }
</style>
