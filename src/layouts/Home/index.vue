<template>
    <v-main>
        <c-header />
        <c-advantage
            :items="tooltip.albums"
            :title="tooltip.title"
            :description="tooltip.description"
        />
        <c-footer />
    </v-main>
</template>

<script>
    import CHeader from '@/components/Header';
    import CFooter from '@/components/Footer';
    import CAdvantage from '@/components/Advantage';

    export default {
        name: 'HomeComponent',

        components: {
            CHeader,
            CFooter,
            CAdvantage,
        },

        /**
         * @inheritdoc
         */
        data() {
            return {
                tooltip: {
                    title: 'Tooltop Section',
                    
                    description:
                        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas purus viverra accumsan in nisl nisi. Arcu cursus vitae congue mauris rhoncus aenean vel elit scelerisque. In egestas erat',
                    
                    albums: [
                        {
                            id   : '5df',
                            title: 'Title1',
                            link : 'https://imgtr.ee/images/2023/05/08/aXWoi.png',
                            
                            description:
                                'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas purus viverra accumsan in nisl nisi. Arcu cursus vitae congue mauris rhoncus aenean vel elit scelerisque. In egestas erat',
                        },
                        {
                            id   : 'sd5',
                            title: 'Title2',
                            link : 'https://imgtr.ee/images/2023/05/08/aX5EJ.png',
                            
                            description:
                                'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas purus viverra accumsan in nisl nisi. Arcu cursus vitae congue mauris rhoncus aenean vel elit scelerisque. In egestas erat',
                        },
                        {
                            id   : 'ad3',
                            title: 'Title3',
                            link : 'https://imgtr.ee/images/2023/05/08/aXADr.png',
                            
                            description:
                                'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas purus viverra accumsan in nisl nisi. Arcu cursus vitae congue mauris rhoncus aenean vel elit scelerisque. In egestas erat',
                        },
                        {
                            id   : 'b5d',
                            title: 'Title4',
                            link : 'https://imgtr.ee/images/2023/05/08/aX4gc.png',
                            
                            description:
                                'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas purus viverra accumsan in nisl nisi. Arcu cursus vitae congue mauris rhoncus aenean vel elit scelerisque. In egestas erat',
                        },
                        {
                            id   : 'cv5',
                            title: 'Title5',
                            link : 'https://imgtr.ee/images/2023/05/08/aXhCn.png',
                           
                            description:
                                'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas purus viverra accumsan in nisl nisi. Arcu cursus vitae congue mauris rhoncus aenean vel elit scelerisque. In egestas erat',
                        },
                        {
                            id   : 'nb4',
                            title: 'Title6',
                            link : 'https://imgtr.ee/images/2023/05/08/aX4gc.png',
                            
                            description:
                                'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas purus viverra accumsan in nisl nisi. Arcu cursus vitae congue mauris rhoncus aenean vel elit scelerisque. In egestas erat',
                        },
                        {
                            id   : 'g9h',
                            title: 'Title7',
                            link : 'https://imgtr.ee/images/2023/05/08/aXWoi.png',
                            
                            description:
                                'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas purus viverra accumsan in nisl nisi. Arcu cursus vitae congue mauris rhoncus aenean vel elit scelerisque. In egestas erat',
                        },
                        {
                            id   : 'tp2',
                            title: 'Title8',
                            link : 'https://imgtr.ee/images/2023/05/08/aXADr.png',
                            
                            description:
                                'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas purus viverra accumsan in nisl nisi. Arcu cursus vitae congue mauris rhoncus aenean vel elit scelerisque. In egestas erat',
                        },
                    ],
                },
            };
        },
    };
</script>
