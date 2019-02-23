<template>
    <b-container class="patchlist" fluid>
        <b-row>
            <Patch v-for="patch in patches" :key="patch.key" :title="patch.title" :description="patch.description"/>
        </b-row>
    </b-container>
</template>

<script>
    import Patch from "./Patch";

    export default {
        name: 'PatchList',
        components: {Patch},
        props: {
            patches: {}
        }
    }
</script>