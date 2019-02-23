<template>
    <div class="d-flex justify-content-center p-3">
        <b-spinner class="loader" v-if="loading"/>
    </div>
</template>

<script>
    import APP from "../main.js";

    export default {
        name: 'Loader',
        data() {
            return {
                loading: true
            }
        },
        mounted() {
            APP.$on('set-loader-visible', (visible) => {
                console.log("hey? " + visible);
                this.loading = visible;
            })
        }
    }
</script>

<style scoped lang="scss">
    .loader {
        width: 30rem;
        height: 30rem;
        border-width: 1em;
    }
</style>