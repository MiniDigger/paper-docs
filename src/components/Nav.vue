<template>
    <b-navbar toggleable="lg" type="dark" variant="info" sticky>
        <b-navbar-brand href="#">Paper Docs</b-navbar-brand>

        <b-navbar-toggle target="nav_collapse"/>

        <b-collapse is-nav id="nav_collapse">
            <b-navbar-nav>
                <b-nav-item to="/">Home</b-nav-item>
                <b-nav-item to="/about">About</b-nav-item>
                <b-nav-item to="/patches">Patches</b-nav-item>
                <b-nav-item to="/test">Test</b-nav-item>
            </b-navbar-nav>

            <b-navbar-nav class="ml-auto">
                <RateLimitDisplay class="mr-2"/>

                <b-nav-item href="https://github.com/MiniDigger/paper-docs" target="_blank" right>Fork me on Github!
                </b-nav-item>
            </b-navbar-nav>
        </b-collapse>
    </b-navbar>
</template>

<script>
    import RateLimitDisplay from "@/components/RateLimitDisplay";

    export default {
        name: 'Nav',
        components: {
            RateLimitDisplay
        }
    }
</script>