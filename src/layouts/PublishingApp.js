import React from 'react'
import { connect } from 'react-redux'
import falcorModel from '../falcorModel'
import { bindActionCreators } from 'redux'
import articleActions from '../actions/article'
import ArticleCard from '../components/ArticleCard'

const mapStateToProps = (state) => ({
    ...state
})

const mapDispatchToProps = (dispatch) => ({
    articleActions: bindActionCreators(articleActions, dispatch)
})

class PublishingApp extends React.Component {
    constructor(props) {
        super(props)
    }

    componentWillMount() {
        if(typeof window !== 'undefined') {
            this._fetch() // if we are server side, no fetching
        }
    }

    async _fetch() {
        const articlesLength = await falcorModel
            .getValue('articles.length')
            .then((length) => length)

        let articles = await falcorModel
            .get(
                ['articles', {from: 0, to: articlesLength-1},
                ['_id', 'articleTitle', 'articleContent']]
            )
            .then((articlesResponse) => articlesResponse.json.articles)
        
        this.props.articleActions.articlesList(articles)
    }

    render () {
        let articlesJSX = []

        for(let articleKey in this.props.article) {
            const articleDetails = this.props.article[articleKey]

            const currentArticleJSX = (
                <div key={articleKey}>
                    <ArticleCard
                        title={articleDetails.articleTitle}
                        content={articleDetails.articleContent}
                    />
                </div>
            )
            articlesJSX.push(currentArticleJSX)
        }

        return (
            <div style={{height: '100%', width: '75%', margin: 'auto'}}>
                {articlesJSX}
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (PublishingApp)
