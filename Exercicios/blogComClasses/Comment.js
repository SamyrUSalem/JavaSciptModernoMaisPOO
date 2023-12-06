class Comment {
    constructor(username, content) {
        this.username = username
        this.content = content
        this.createdAt = new Date() //Data q foi criado esse comentario
    }
}

module.exports = Comment