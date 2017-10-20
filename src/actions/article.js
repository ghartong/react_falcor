export default {
    articlesList: (response) => {
        return {
            type: 'ARTICLES_LIST_ADD',
            payload: { response: response }
        }
    },
    pushNewArticle: (resonse) => {
        return {
            type: 'PUSH_NEW_ARTICLE',
            payload: { response: response }
        }
    }
}
