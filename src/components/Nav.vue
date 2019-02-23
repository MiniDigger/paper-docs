<template>
    <b-navbar toggleable="lg" type="dark" variant="info">
        <b-navbar-brand href="#">Paper Docs</b-navbar-brand>

        <b-navbar-toggle target="nav_collapse"/>

        <b-collapse is-nav id="nav_collapse">
            <b-navbar-nav>
                <b-nav-item>
                    <router-link to="/">Home</router-link>
                </b-nav-item>
                <b-nav-item>
                    <router-link to="/about">About</router-link>
                </b-nav-item>
                <b-nav-item>
                    <router-link to="/patches">Patches</router-link>
                </b-nav-item>
            </b-navbar-nav>
        </b-collapse>
    </b-navbar>
</template>

<script>
    export default {
        name: 'Nav'
    }
</script>