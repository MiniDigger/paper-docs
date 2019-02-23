<template>
    <div class="test">
        <Loader />
        <b-button @click="toggleVisible">Toggle!</b-button>
    </div>
</template>

<script>
    import Loader from "../components/Loader";
    import APP from "../main.js";

    export default {
        name: 'test',
        components: {
            Loader,
        },
        data() {
            return {
                on: true
            }
        },
        methods: {
            toggleVisible() {
                this.on = !this.on;
                APP.$emit("set-loader-visible", this.on);
            }
        }
    }
</script>
