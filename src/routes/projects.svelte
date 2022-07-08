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
    <div id="flexbox">
        <div class="item">
            <h1>
                Braid Theory and Classification of Periodic Orbits of the
                Three-Body Problem (ISEF project)
            </h1>
            <img
                src="https://res.cloudinary.com/makeprojects/image/fetch/c_fill/https://firebasestorage.googleapis.com/v0/b/project-leo-mvp.appspot.com/o/attachments%252F04500d6f-55cd-4007-afa3-bbc4f7617a5a%252Fb10bed6f871%3Falt%3Dmedia%26token%3Ddc0286f2-93a3-4f43-8127-72be77e4a09d"
                alt="quad chart"
            />
            <p>
                <a
                    id="click"
                    href="https://projectboard.world/isef/project/math038---braid-theory-and-classification-of-periodic-orbits"
                    >Click here</a
                >to learn more
            </p>
        </div>
        <div class="item">
            <h1>Random Dog Image</h1>
            <img
                src="https://random.dog/8bbfb75e-5ffc-4c8a-a6cc-e499d914b9e1.jpg"
                alt="dog"
            />
            <p>Dog images for good mood!</p>
        </div>
    </div>
</main>

<style>
    p {
        color: #566246;
    }
    h1 {
        margin-top: 0.5em;
        color: #566246;
        font-size: 24px;
    }
    #flexbox {
        margin-top: 3em;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
    }
    .item {
        background-color: #f1f2eb;
        width: 45%;
    }
    img {
        width: 80%;
    }
    #click {
        color: #a4c2a5;
    }
    #click:hover {
        color: #566246;
    }
</style>