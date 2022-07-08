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

<main>
    <h1>
        About Me
        <img
            id="frog"
            src="https://pic.funnygifsbox.com/uploads/2020/08/funnygifsbox.com-2020-08-07-15-13-53-19.gif"
            alt="frog piture"
        />
    </h1>
    <div id="block1">
        <p>I was born on January 5, 2004.</p>
        <p>
            At school I was always interested in math. Starting from the 5th
            grade I actively participated in various olympiads and conferences
            and won prizes in several of them! I consider the most important
            award in the international competition
            <a id="isef" href="https://www.societyforscience.org/isef/">ISEF</a
            >where I presented my work in the category of mathematics.
        </p>
        <p>
            In 9th grade, I started getting interested in IT. I became attracted
            by the number of fascinating spheres and the opportunity to apply
            mathematics in practice. At the end of 11th grade, I made the
            decision to enter a modern IT university, Innopolis.
        </p>
        <p>
            I am currently in my 3rd trimester of my 1st year. During studying I
            met new interesting people, developed soft skills and learned a lot
            of useful information. My learning is just continuing, which means
            that there are a lot of exciting experiences ahead of me!
        </p>
    </div>
    <img
        id="my-photo"
        src="https://sun9-80.userapi.com/c1772/u54320665/99654761/x_67d43d4d.jpg"
        alt="me"
    />
</main>

<style>
    h1 {
        color: #a4c2a5;
        text-align: left;
        font-size: 60px;
        margin-left: 2em;
        margin-bottom: 0.3em;
        margin-top: 0.8em;
    }
    p {
        margin-left: 3em;
        text-align: justify;
        color: #566246;
    }
    #block1 {
        float: left;
        width: 60%;
    }
    #my-photo {
        margin-left: 1.5em;
        width: 480px;
    }
    #isef {
        color: #a4c2a5;
    }
    #isef:hover {
        color: #566246;
    }
    #frog {
        margin-left: 0.3em;
        width: 80px;
    }
</style>