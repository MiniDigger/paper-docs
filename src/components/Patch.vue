<template>
    <b-col cols="2">
        <b-card :title="title" >
            <b-card-text>{{description}}</b-card-text>
        </b-card>
    </b-col>
</template>

<script>
    export default {
        name: 'Patch',
        props: {
            title: String,
            description: String
        }
    }
</script>