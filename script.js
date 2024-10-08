const { createApp } = Vue

createApp({
    data() {
        return {

        }
    },
    methods: {
        getApi() {
            let apiCall = "http://localhost/php-dischi-json/be/dischi/dischi.json";
            axios.get(apiCall)
                .then((response) => {
                    console.log(response)
                })
        }
    },
    created() {
        this.getApi()
    }
}).mount('#app')