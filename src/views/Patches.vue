<template>
    <div class="patches">
        <Loader/>
        <PatchList :patches="patches"/>
    </div>
</template>

<script>
    import PatchList from '@/components/PatchList.vue'
    import Loader from "@/components/Loader";
    import APP from "@/main.js";

    import GitHub from "github-api";

    const patches = {
        name: 'patches',
        components: {
            Loader,
            PatchList
        },
        data() {
            return {
                patches: []
            }
        },
        mounted: function () {
            const gh = new GitHub();
            let repo = gh.getRepo("PaperMC", "Paper");
            repo.getContents("master", "Spigot-API-Patches/").then(resp => {
                for (let i = 0; i < resp.data.length; i++) {
                    let patch = resp.data[i];
                    this.patches.push({title: patch.name, description: "Desc", key: patch.sha, url: patch.html_url})
                }

                let limit = resp.headers["x-ratelimit-limit"];
                let remaining = resp.headers["x-ratelimit-remaining"];
                let reset = resp.headers["x-ratelimit-reset"];

                APP.$emit('update-ratelimit', {limit: limit, remaining: remaining, reset: reset});
                APP.$emit('set-loader-visible', false);
            });
        }
    };
    export default patches;
</script>
