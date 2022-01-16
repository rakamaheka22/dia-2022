// JS

// Setup Instalasi Vue
const App = {
    beforeCreate() {
        // dipanggil langsung bersamaan saat instance berhasil dibuat
        console.log('Before Create');
    },
    created() {
        // dipanggil setelah instance berhasil dibuat dan setelah beforeCreate
        console.log('Created');
    },
    beforeMount() {
        // dipanggil sebelum melakukan render HTML pada sebuah component
        console.log('Before Mount');
    },
    mounted() {
        // dipanggil setelah render HTML dan component siap digunakan
        console.log('Mounted');
    },
    beforeUpdate() {
        // dipanggil langsung bersamaan saat ada perubahan data
        console.log('Before Update');
    },
    updated() {
        // dipanggil setelah ada perubahan data
        console.log('Updated');
    },
    activated() {
        // dipanggil saat keep-alive pada dynamic component aktif
        console.log('Activated');
    },
    deactivated() {
        // dipanggil saat keep-alive pada dynamic component tidak aktif
        console.log('Deactivated');
    },
    beforeUnmount() {
        // dipanggil sebelum component akan dilepas
        console.log('Before Unmount');
    },
    unmounted() {
        // dipanggil setelah component dilepas
        console.log('Unmounted');
    },
    errorCaptured() {
        // dipanggil saat ada error
        console.log('Error Captured');
    },
    renderTracked() {
        // dipanggil pertama kali saat render data di HTML
        console.log('Render Tracked');
    },
    renderTriggered() {
        // dipanggil saat adanya perubahan render data di HTML
        console.log('Render Triggered');
    },
};

Vue.createApp(App).mount('#app');
