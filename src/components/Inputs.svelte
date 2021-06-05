<script>
  import axios from "axios";
  import { fly } from "svelte/transition";
  /* State */
  let url = "";
  let shortUrl = "";
  let submitted = false;
  let copied = false;

  const handleClick = () => {
    // makes sure there are no empty inputs
    if (url === "") return;
    submitted = !submitted;

    // checks to see if the url includes http:// or https://
    const check = url.split("").splice(0, 8).join("");
    if (check === "http://" || check === "https://") {
      // sends post request to server with long url
      // server sends back a the short url in the response
      axios.post("https://stly.us/api/create", { url: url }).then((res) => {
        shortUrl = res.data.url;
        submitted = !submitted;
      });
    } else {
      alert("Please include http:// or https:// in your url.");
      return;
    }
  };

  const handleCopy = () => {
    const temp = document.createElement("input");
    document.querySelector("body").appendChild(temp);
    temp.value = shortUrl;

    temp.select();
    temp.setSelectionRange(0, 99999);

    document.execCommand("copy");
    temp.remove();
    copied = true;
  };
</script>

<!-- HTML -->
{#if !submitted}
  <!-- # submit inputs # -->
  <div in:fly={{ y: 50, duration: 500 }} class="actions">
    <input type="text" bind:value={url} placeholder="Enter URL to shorten" />
    <button on:click={handleClick} class="submit-button">Submit</button>
  </div>
{:else}
  <!-- # copy inputs # -->
  <div in:fly={{ y: 50, duration: 500 }} class="actions">
    <button on:click={handleCopy} class={copied ? "copied" : "copy-button"}
      >{copied ? "Copied" : "Copy"}</button
    >
    <div id="short-url" class="new-url">{shortUrl}</div>
  </div>
{/if}

<!-- CSS -->
<style>
  .actions {
    width: 100%;
    display: flex;
    max-width: 600px;
    overflow: hidden;
  }

  input {
    width: 100%;
    height: 3rem;
    padding-left: 1rem;
    border-radius: 0.7rem;
    border: 1px solid #d5caff;
    background: none;
    outline: none;
    color: #d5caff;
    transition: 0.3s;
    margin-right: 0.5rem;
  }
  input::placeholder {
    color: #d5caff;
  }
  input:focus {
    border: 1.2px solid #ffffff;
    color: white;
  }
  input:hover {
    border: 1.2px solid #ffffff;
    color: white;
  }
  button {
    cursor: pointer;
    transition: 0.3s;
  }
  button:hover {
    opacity: 0.8;
  }
  .submit-button {
    background: #ff6ba8;
    color: white;
    border-radius: 0.7rem;
    border: 2px solid #ff6ba8;
    padding: 0.5rem 1rem;
    height: 3rem;
  }
  .new-url {
    width: 100%;
    height: 3rem;
    padding-left: 1rem;
    border-radius: 1rem;
    border: 1px solid #d5caff;
    background: none;
    outline: none;
    color: #d5caff;
    transition: 0.3s;
    margin-left: 0.5rem;
    display: flex;
    align-items: center;
    font-size: 14px;
  }
  .copy-button {
    background: #38af34;
    color: white;
    border-radius: 1rem;
    border: 2px solid #38af34;
    padding: 0.5rem 1rem;
    height: 3rem;
    transition: 0.3s;
  }
  .copied {
    background: none;
    color: white;
    border-radius: 1rem;
    border: 2px solid #38af34;
    transition: 0.3s;
    padding: 0.5rem 1rem;
    height: 3rem;
  }
</style>
