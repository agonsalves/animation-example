import PropTypes          from 'prop-types'
import React              from 'react'
import Div                from '../Basic/Div'
import H3                 from '../Basic/H3'
import ButtonSmall        from '../Elements/ButtonSmall'
import LinkSwitch         from '../Elements/LinkSwitch'
import {diversityStyle}   from '../themes/pages'
import {widgetTitleStyle} from '../themes/sidebars'
import {triangle}         from '../variables/iconLibrary'
import Widget             from './Widget'

const DiversityNewsWidget = ({diversityNews}) =>
    <Widget>
        <H3 theme={{...widgetTitleStyle, ...diversityStyle.widgetTitle}}>Diversity News</H3>
        {diversityNews.map((item, index) =>
            <Div key={`diversity_news-${index}`}>
                <LinkSwitch url={item.slug} theme={diversityStyle.newsLink}>{item.post_title}</LinkSwitch>
            </Div>
        )}
        <ButtonSmall
            url="/diversity/diversity-news"
            theme={diversityStyle.button}
            label="Read More"
            icon={triangle}/>
    </Widget>

DiversityNewsWidget.propTypes = {
    diversityNews: PropTypes.array.isRequired,
}

export default DiversityNewsWidget