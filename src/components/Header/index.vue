<!-- eslint-disable @intlify/vue-i18n/no-raw-text -->
<template>
    <div>
        <v-app-bar
            color="deep-purple"
            dense
            elevation="5"
            flat
        >
            <v-app-bar-nav-icon
                @click.stop="drawer = !drawer"
            />
            <v-toolbar-title>
                {{ 'Page title' }}
            </v-toolbar-title>
        </v-app-bar>

        <v-navigation-drawer
            v-model="drawer"
            absolute
            bottom
            temporary
        >
            <v-list
                nav
                dense
            >
                <v-list-item-group
                    v-model="group"
                    active-class="deep-purple--text text--accent-4"
                >
                    <v-list-item>
                        <v-list-item-title>
                            {{ 'Home' }}
                        </v-list-item-title>
                    </v-list-item>
                </v-list-item-group>
            </v-list>
        </v-navigation-drawer>
    </div>
</template>

<script>
    export default {
        name: 'HeaderComponent',

        data: () => ({
            drawer: false,
            group : null,
        }),

        watch: {
            /**
             * Grop
             */
            group() {
                this.drawer = false;
            },
        },
    };
</script>
