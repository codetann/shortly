<script>
  import Inputs from "./Inputs.svelte";
</script>

<!-- HTML -->
<div class="action-container">
  <div class="action-info">
    <h1>Short links just became easy!</h1>
    <p>
      A simple URL shortener made with Node.js and Svelte.js. Just enter a URL
      you would like shortened and hit submit!
    </p>
  </div>

  <Inputs />
</div>

<!-- CSS -->
<style>
  .action-container {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  .action-info {
    width: 100%;
    max-width: 600px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    text-align: center;
    margin-bottom: 4rem;
  }
  .action-container h1 {
    color: #ffffff;
    font-size: 32px;
    margin-bottom: 1rem;
    letter-spacing: 0.5px;
  }
  .action-container p {
    margin-top: 2rem;
    color: #d5caff;
    font-weight: 300;
    font-size: 14px;
  }

  @media only screen and (min-width: 700px) {
    .action-container h1 {
      color: #ffffff;
      font-size: 38px;
      margin-bottom: 0.5rem;
    }

    .action-container {
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }
  }
</style>
