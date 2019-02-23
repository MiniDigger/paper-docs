<template>
    <div class="patches">
        <PatchList :patches="patches"/>
    </div>
</template>

<script>
    import PatchList from '@/components/PatchList.vue'

    var GitHub = require('github-api');

    export default {
        name: 'home',
        components: {
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
                for(let i = 0; i < data.length; i++) {
                    let patch = data[i];
                    this.patches.push({title: patch.name, description: "Desc", key: patch.sha, url: patch.html_url})
                }
            });
        }
    }
</script>
