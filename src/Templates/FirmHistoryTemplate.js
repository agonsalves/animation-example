import PropTypes                 from 'prop-types'
import React                     from 'react'
import Div                       from '../Basic/Div'
import H1                        from '../Basic/H1'
import H2                        from '../Basic/H2'
import Img                       from '../Basic/Img'
import RichText                  from '../Basic/RichText'
import {pageTitleInContentStyle} from '../themes/elements'
import {postContentStyle}        from '../themes/layout'
import {firmHistoryStyle}        from '../themes/pages'

const FirmHistoryTemplate = ({post}) =>
    <Div theme={{...postContentStyle, ...firmHistoryStyle}}>
        <H1 theme={{...pageTitleInContentStyle, ...firmHistoryStyle.heading}}>{post.post_title}</H1>
        {post.history && (
            <Div theme={firmHistoryStyle.wrapper}>
                {post.history.map((history, index) =>
                    <Div key={`history-${index}`} theme={firmHistoryStyle.row}>
                        {history.image && (
                            <Img image={history.image} theme={firmHistoryStyle.image}/>
                        )}
                        {history.year && (
                            <Div theme={firmHistoryStyle.year}>
                                <H2 theme={history.image
                                    ? {...firmHistoryStyle.year.heading, ...firmHistoryStyle.year.headingWithImage}
                                    : firmHistoryStyle.year.heading}>
                                    {history.year}
                                </H2>
                                {history.description && (
                                    <RichText theme={firmHistoryStyle.year.description}>
                                        {history.description}
                                    </RichText>
                                )}
                            </Div>
                        )}
                    </Div>
                )}
            </Div>
        )}
    </Div>

FirmHistoryTemplate.propTypes = {
    post: PropTypes.object.isRequired,
}

export default FirmHistoryTemplate