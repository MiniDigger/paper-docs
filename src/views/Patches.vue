<template>
    <div class="patches">
        <Loader />
        <PatchList :patches="patches"/>
    </div>
</template>

<script>
    import PatchList from '../components/PatchList.vue'
    import Loader from "../components/Loader";

    import GitHub from "github-api";
    import APP from "../main.js";

    export default {
        name: 'home',
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
            repo.getContents("master", "Spigot-API-Patches/").then(({data}) => {
                for (let i = 0; i < data.length; i++) {
                    let patch = data[i];
                    this.patches.push({title: patch.name, description: "Desc", key: patch.sha, url: patch.html_url})
                }
                APP.$emit('set-loader-visible', false);
                console.log("emitting event")
            });
        }
    }
</script>
