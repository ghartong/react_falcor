import reducer from '../src/reducers/article'

const article = {
    _id: 123456,
    articleTitle: 'Test Article Title',
    articleSubtitle: 'Test SubTitle',
    contentHTML: '<p>content</p>'
}

describe('ArticleReducers', () => {
    it('should return the initial state', () => {
        expect(reducer(undefined, {})).toEqual({})
    })

    it('should handle RETURN_ALL_ARTICLES', () => {
        expect(
            reducer(
                article,
                {
                    type: 'RETURN_ALL_ARTICLES',
                    payload: article
                }
            )
        ).toEqual(article)
    })

    it('should handle ARTICLES_LIST_ADD', () => {
        const articleMap = new Map()
        expect(
            reducer(
                [],
                {
                    type: 'ARTICLES_LIST_ADD',
                    payload: { response: article }
                }
            )
        ).toEqual(articleMap)
    })

    it('should handle PUSH_NEW_ARTICLE', () => {
        const articleMap = new Map()
        articleMap.set(123456, article)
        expect(
            reducer(
                [],
                {
                    type: 'PUSH_NEW_ARTICLE',
                    payload: { response: article }
                }
            )
        ).toEqual(articleMap)
    })

    it('should handle PUSH_NEW_ARTICLE', () => {
        const articleMap = new Map()
        articleMap.set(123456, article)
        expect(
            reducer(
                [],
                {
                    type: 'PUSH_NEW_ARTICLE',
                    payload: { response: article }
                }
            )
        ).toEqual(articleMap)
    })
})
