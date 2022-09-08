const app = Vue.createApp({
    data: function () {
        return {
            imgSrc: 'img/cat.png',
        }
    },
    methods: {
        onClick: function (event) {
            this.imgSrc = 'img/dog.png'
        }
    },
}).mount('#app')