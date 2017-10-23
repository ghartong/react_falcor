import mongoose from 'mongoose'

const Schema = mongoose.Schema

const conf = {
    hostname: process.env.MONGO_HOSTNAME || 'localhost',
    port: process.env.MONGO_PORT || 27017,
    env: process.env.MONGO_EVN || 'local',
}

mongoose.connect(`mongodb://${conf.hostname}:${conf.port}/${conf.env}`)

var defaultDraftJSobject = {
    'blocks': [],
    'entityMap': {}
}

const articleSchema = new Schema({
    articleTitle: {
        type: String,
        required: true,
        default: 'default article title'
    },
    articleSubTitle: {
        type: String,
        required: true,
        default: 'default article subtitle'
    },
    articleContent: {
        type: String,
        required: true,
        default: 'default content'
    },
    articleContentJSON: {
        type: Object,
        required: true,
        default: defaultDraftJSobject
    },
    articlePicUrl: {
        type: String,
        required: true,
        default: '/static/placeholder.png'
    }
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
