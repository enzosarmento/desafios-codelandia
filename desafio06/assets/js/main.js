const application = new Vue({
    el: '#app',
    data() {
        return {
            background: 'assets/images/background.png',
            star: {
                star1: 'assets/images/star_gray.svg',
                star2: 'assets/images/star_gray.svg',
                star3: 'assets/images/star_gray.svg',
                star4: 'assets/images/star_gray.svg',
                star5: 'assets/images/star_gray.svg'
            }
        }
    },
    methods: {
        rating(event) {
            if (event.path[0].alt == 'a') {
                (this.star.star1 == 'assets/images/star_gray.svg') ? this.star.star1 = 'assets/images/star.svg' : this.star.star1 = 'assets/images/star_gray.svg'
            } else if (event.path[0].alt == 'b' && this.star.star1 == 'assets/images/star.svg') {
                (this.star.star2 == 'assets/images/star_gray.svg') ? this.star.star2 = 'assets/images/star.svg' : this.star.star2 = 'assets/images/star_gray.svg'
            } else if (event.path[0].alt == 'c' && this.star.star2 == 'assets/images/star.svg') {
                (this.star.star3 == 'assets/images/star_gray.svg') ? this.star.star3 = 'assets/images/star.svg' : this.star.star3 = 'assets/images/star_gray.svg'
            } else if (event.path[0].alt == 'd' && this.star.star3 == 'assets/images/star.svg') {
                (this.star.star4 == 'assets/images/star_gray.svg') ? this.star.star4 = 'assets/images/star.svg' : this.star.star4 = 'assets/images/star_gray.svg'
            } else if (event.path[0].alt == 'e' && this.star.star4 == 'assets/images/star.svg') {
                (this.star.star5 == 'assets/images/star_gray.svg') ? this.star.star5 = 'assets/images/star.svg' : this.star.star5 = 'assets/images/star_gray.svg'
            }
            

        }
    }
})