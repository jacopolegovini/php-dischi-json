const { createApp } = Vue

createApp({
    data() {
        return {
            discoData: []
        }
    },
    methods: {
        getApi() {
            let apiCall = "http://localhost/php-dischi-json/be/dischi/dischi.json";
            axios.get(apiCall)
                .then((response) => {
                    console.log(response.data[0])
                    // for (let i = 0; i < response.data; i++) {
                    //     let element = response.data[i];
                    // }
                    this.discoData = response.data;
                    // return this.discoData;
                })
        }
    },
    created() {
        this.getApi()
    }
}).mount('#app')