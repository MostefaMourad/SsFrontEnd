<template>
    <v-container
    fluid
    >
    <v-row>
        <v-col
        md="4"
        align-self="start"
        align="center"
        >
        <v-btn icon x-large @click="$router.push('/')">
            <v-icon>
                mdi-arrow-left
            </v-icon>
        </v-btn>
        </v-col>
        <v-col
        md="4"
        align-self="center"
        align="center"
        >
        <v-avatar
        width="150"
        height="150"
        >
            <img
                src="https://cdn.vuetifyjs.com/images/john.jpg"
                alt="John"
            >
        </v-avatar>
        </v-col>
    </v-row>
    </v-container>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>

</style>