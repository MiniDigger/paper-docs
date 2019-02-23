<template>
    <b-nav-item-dropdown right>
        <template slot="button-content">Ratelimit
            <b-badge :variant="color">{{remaining}}</b-badge>
        </template>
        <b-dropdown-item>Limit
            <b-badge variant="light">{{limit}}</b-badge>
        </b-dropdown-item>
        <b-dropdown-item>Remaining
            <b-badge :variant="color">{{remaining}}</b-badge>
        </b-dropdown-item>
        <b-dropdown-item>Reset
            <b-badge variant="light">{{formattedTime}}</b-badge>
        </b-dropdown-item>
    </b-nav-item-dropdown>
</template>

<script>
    import APP from "@/main.js";

    export default {
        name: 'RateLimitDisplay',
        data() {
            return {
                limit: -1,
                remaining: -1,
                reset: -1
            }
        },
        mounted() {
            APP.$on('update-ratelimit', (data) => {
                this.limit = data.limit;
                this.remaining = data.remaining;
                this.reset = data.reset;
            });
        },
        computed: {
            formattedTime() {
                return new Date(this.reset * 1000).toLocaleString()
            },
            color() {
                let limit = this.limit / this.remaining;
                if (limit > 0.5) {
                    return "success";
                } else if (limit > 0.1) {
                    return "warning";
                } else {
                    return "danger";
                }
            }
        }
    }
</script>