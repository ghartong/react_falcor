import mongoose from 'mongoose'

const Schema = mongoose.Schema

const conf = {
    hostname: process.env.MONGO_HOSTNAME || 'localhost',
    port: process.env.MONGO_PORT || 27017,
    env: process.env.MONGO_EVN || 'local',
}

mongoose.connect(`mongodb://${conf.hostname}:${conf.port}/${conf.env}`)

const articleSchema = new Schema({
    articleTitle: String,
    articleContent: String,
    articleContentJSON: Object
},
{
    minimize: false
})

const Article = mongoose.model('Article', articleSchema, 'articles')

const userSchema = {
    'username': { type: String, index: {unique: true, dropDups: true}},
    'password': String,
    'firstName': String,
    'lastName': String,
    'email': { type: String, index: { unique:true, dropDups: true}},
    'role': { type: String, default: 'editor'},
    'verified': Boolean,
    'imageUrl': String
}

const User = mongoose.model('User', userSchema, 'pubUsers')

export default {
    Article,
    User
}
