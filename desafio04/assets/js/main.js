const app = new Vue({
    el: '#application',
    data: {
        theme: 'assets/images/moon.svg',
        dark: 'dark'
    },
    methods: {
        darkMode() {
            
            (this.theme == 'assets/images/moon.svg') ? this.theme = 'assets/images/sun.svg' : this.theme = 'assets/images/moon.svg'

            if (application.classList != this.dark) {
                application.classList.add(this.dark)
            } else {
                application.classList.remove(this.dark)
            }
        }
    }

})
