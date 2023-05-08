<template>
    <section
        v-if="items"
        class="c-advantage"
    >
        <b-container>
            <header>
                <h4
                    v-if="title"
                    class="c-advantage__title"
                >
                    {{ title }}
                </h4>
                <p
                    v-if="description"
                    class="c-advantage__description"
                >
                    {{ description }}
                </p>
            </header>
            <b-row>
                <b-col
                    v-for="item in items"
                    :key="item.id"
                    md="3"
                    xs="6"
                    class="c-advantage__item"
                >
                    <div
                        :id="`tooltip-parent-${item.id}`"
                        class="c-advantage__item__inner tooltip-parent"
                    >
                        <div class="c-advantage__item__image">
                            <img
                                :src="item.link"
                                :alt="item.title"
                            >
                        </div>

                        <div
                            v-if="item.title"
                            class="c-advantage__item__title"
                        >
                            {{ item.title }}
                        </div>
                        <div class="tooltip__grid">
                            <span @click.prevent="showTooltip(item.id)" />

                            <v-btn
                                class="mx-4"
                                dark
                                icon
                                color="black"
                            >
                                <v-icon size="16px">
                                    <!-- eslint-disable @intlify/vue-i18n/no-raw-text -->
                                    {{ 'mdi-exclamation' }}
                                </v-icon>
                            </v-btn>

                            <div
                                :id="`tooltip-${item.id}`"
                                class="tooltip"
                            >
                                {{ item.description }}
                            </div>
                        </div>
                    </div>
                </b-col>
            </b-row>
        </b-container>
    </section>
</template>

<script>
    // Mixins

    export default {
        name: 'AdvantageComponent',

        props: {
            /**
             * title
             */
            title: String,

            /**
             * description
             */
            description: String,

            /**
             * list of items for tooltips
             */
            items: Array,
        },

        /**
         * @inheritdoc
         */
        data() {
            return {
                selectedTooltipId: null,
            };
        },

        /**
         * @inheritdoc
         */
        mounted() {
            document.addEventListener('click', this.hideTooltip);
        },

        /**
         * @inheritdoc
         */
        beforeDestroy() {
            document.removeEventListener('click', this.hideTooltip);
        },

        methods: {
            /**
             * Show tooltip in mobile
             *
             * @param {index} index - index of slide
             */
            showTooltip(index) {
                this.selectedTooltipId = index;
                const element = document.getElementById('app');

                const tooltipParentOffset = document.getElementById(`tooltip-parent-${index}`).getBoundingClientRect().top;

                if (document.getElementById(`tooltip-${index}`).classList.contains('show')) {
                    document.getElementById(`tooltip-${index}`).classList.remove('show');
                    document.getElementById(`tooltip-parent-${index}`).classList.remove('light-cover');

                    if (element) {
                        element.classList.remove('dark-cover-advantage');
                    }
                } else {
                    document.getElementById(`tooltip-${index}`).classList.add('show');
                    if ( tooltipParentOffset < 200 ) {
                        document.getElementById(`tooltip-${index}`).classList.add('tooltip-bottom');
                    }

                    document.getElementById(`tooltip-parent-${index}`).classList.add('light-cover');

                    if (element) {
                        element.classList.add('dark-cover-advantage');
                    }
                }
            },

            /**
             * Remove tooltip by clicking everywhere
             *
             * @param {*} e
             */
            hideTooltip(e) {
                if (!this.$el.contains(e.target)) {
                    const tooltip = document.getElementById(`tooltip-${this.selectedTooltipId}`);
                    if (tooltip) {
                        tooltip.classList.remove('show');
                    }

                    const tooltipParent = document.getElementById(`tooltip-parent-${this.selectedTooltipId}`);
                    if (tooltipParent) {
                        tooltipParent.classList.remove('light-cover');
                    }

                    this.selectedTooltipId = null;

                    const element = document.getElementById('app');
                    if (element) {
                        element.classList.remove('dark-cover-advantage');
                    }
                }
            },
        },

    };
</script>

<style lang="scss" src="./index.scss" />
