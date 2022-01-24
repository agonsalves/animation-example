import PropTypes              from 'prop-types'
import React                  from 'react'
import Div                    from '../Basic/Div'
import RichText               from '../Basic/RichText'
import {pullquoteWidgetStyle} from '../themes/sidebars'
import Widget                 from './Widget'

const PullquoteWidget = ({widget, theme}) =>
    <Widget theme={{...pullquoteWidgetStyle, ...theme}}>
        <Div>
            {widget.widget_quote && (
                <RichText theme={{...pullquoteWidgetStyle.quote, ...theme.quote}}>
                    {widget.widget_quote}
                </RichText>
            )}
            {widget.widget_attribution && (
                <Div theme={{...pullquoteWidgetStyle.attribution, ...theme.attribution}}>
                    {widget.widget_attribution}
                </Div>
            )}
        </Div>
    </Widget>

PullquoteWidget.propTypes = {
    widget: PropTypes.object.isRequired,
    theme: PropTypes.object,
}

PullquoteWidget.defaultProps = {
    theme: {},
}

export default PullquoteWidget