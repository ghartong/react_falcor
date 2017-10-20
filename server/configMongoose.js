import mongoose from 'mongoose'

const conf = {
    hostname: process.env.MONGO_HOSTNAME || 'localhost',
    port: process.env.MONGO_PORT || 27017,
    env: process.env.MONGO_EVN || 'local',
}

mongoose.connect(`mongodb://${conf.hostname}:${conf.port}/${conf.env}`)

const articleSchema = {
    articleTitle: String,
    articleContent: String
}

const Article = mongoose.model('Article', articleSchema, 'articles')

export default {Article}
