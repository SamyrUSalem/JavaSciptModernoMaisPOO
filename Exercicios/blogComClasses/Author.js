const Post = require("./Post")

class Author {
    constructor(name) {
        this.name = name
        this.posts = []
    }

    writePosts(title, body) {
        const posts = new Post(title, body, this) //O This esta referenciando o objeto todo, pq o terceiro paramentro seria o author então estou referenciando essa classe
        this.posts.push(posts)
        return posts

    }
}

module.exports = Author