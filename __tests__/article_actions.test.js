import articleActions from '../src/actions/article'

const article = {
    articleTitle: 'Test Article Title',
    articleSubtitle: 'Test SubTitle',
    contentHTML: '<p>content</p>'
}

describe('ArticleActions', () => {
    it('PUSH_NEW_ARTICLE should create an action to set the selected article', () => {
        const selectedArticle = article
        const expectedAction = {
            type: 'PUSH_NEW_ARTICLE',
            payload: { response: selectedArticle }
        }
        expect(articleActions.pushNewArticle(selectedArticle)).toEqual(expectedAction)
    })

    it('EDIT_ARTICLE should create an action to set the selected article', () => {
        const selectedArticle = article
        const expectedAction = {
            type: 'EDIT_ARTICLE',
            payload: { response: selectedArticle }
        }
        expect(articleActions.editArticle(selectedArticle)).toEqual(expectedAction)
    })

    it('DELETE_ARTICLE should create an action to set the selected article', () => {
        const selectedArticle = article
        const expectedAction = {
            type: 'DELETE_ARTICLE',
            payload: { response: selectedArticle }
        }
        expect(articleActions.deleteArticle(selectedArticle)).toEqual(expectedAction)
    })
})
