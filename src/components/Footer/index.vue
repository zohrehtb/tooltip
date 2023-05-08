<template>
    <v-footer
        dark
        padless
    >
        <v-card
            class="flex"
            flat
            tile
            color="deep-purple"
        >
            <v-card-title class="black">
                <strong class="subheading">
                    <!-- eslint-disable @intlify/vue-i18n/no-raw-text -->
                    {{ 'Visit my Social media pages' }}
                </strong>

                <v-spacer />

                <v-btn
                    v-for="icon in icons"
                    :key="icon"
                    class="mx-4"
                    dark
                    icon
                    :href="icon.link"
                >
                    <v-icon size="24px">
                        {{ icon.name }}
                    </v-icon>
                </v-btn>
            </v-card-title>

            <v-card-text class="py-2 white--text text-center">
                {{ new Date().getFullYear() }}
            </v-card-text>
        </v-card>
    </v-footer>
</template>

<script>
    export default {
        name: 'FooterComponent',

        data: () => ({
            icons: [
                {
                    link: 'https://www.linkedin.com/in/zohreh-tabatabaie/',
                    name: 'mdi-linkedin',
                },
                {
                    link: 'https://github.com/zohrehtb',
                    name: 'mdi-github',
                },
            ],
        }),
    };
</script>
