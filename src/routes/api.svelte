<script context="module">
	import { browser, dev } from '$app/env';

	// we don't need any JS on this page, though we'll load
	// it in dev so that we get hot module replacement...
	export const hydrate = dev;

	// ...but if the client-side router is already loaded
	// (i.e. we came here from elsewhere in the app), use it
	export const router = browser;

	// since there's no dynamic data here, we can prerender
	// it so that it gets served as a static asset in prod
	export const prerender = true;
</script>

<script lang="ts">
    let randomDog = fetchDog();
    async function fetchDog() {
        const res = await fetch("https://dog.ceo/api/breeds/image/random");
        const json = await res.json();
        return json;
    }
</script>

<p>
    <button id="btn" on:click={() => randomDog = fetchDog()}>See random dog</button>
</p>

<section>
    {#await randomDog}
        <p>Loading...</p>
    {:then dog}
        <img id='dog' src={dog.message} alt='dog'/>
    {/await} 
</section>


<style>
    #dog {
        margin-top: 0em;
        height: 65vh;
    }
    button {
        height: 8%;
        font-size: 16px;
        background-color: #a4c2a5;
        color: #ffffff;
        border-color: #ffffff;
    }
    button:hover {
        background-color: #566246;
        border-color: #ffffff;
    }
    p {
        color: #566246;
    }
</style>