//console.log("hello, vue");

const app = Vue.createApp({
    // data, functions
    //template: '<h2>I am the template</h2>'
    data () {
        return {
            url: 'http://www.thenetninja.co.uk',
            showBooks: true,
            title: 'The Final Empire',
            author: 'Brandon Sanderson',
            age: 45,
            x: 0,
            y: 0,
            books: [
                { title: 'Name of the Wind', author: 'Patrick Rothfuss', img: 'assets/1.jpg', isFav: true},
                { title: 'The Way of Kings', author: 'Brandon Sanderson', img: 'assets/2.jpg', isFav: false},
                { title: 'The Final Empire', author: 'Brandon Sanderson', img: 'assets/3.jpg', isFav: true},
            ]
        }
    },
    methods: {
        changeTitle() {
            this.title = 'Words of Radiance'
        },
        toggleShowBooks() {
            this.showBooks = !this.showBooks
        },
        handleEvent(e, data) {
            console.log(e, e.type)
            if (data) {
                console.log(data)
            }
        },
        handleMouseMove(e) {
            this.x = e.offsetX
            this.y = e.offsetY
        },
        toggleFav(book) {
           book.isFav = !book.isFav
        }
    },
    // computed props
    computed: {
        filteredBooks() {
            return this.books.filter((book) => book.isFav)
        }
    }, 
})

app.mount('#app')