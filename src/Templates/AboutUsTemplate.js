import PropTypes          from 'prop-types'
import React              from 'react'
import Div                from '../Basic/Div'
import H2                 from '../Basic/H2'
import Icon               from '../Basic/Icon'
import Img                from '../Basic/Img'
import RichText           from '../Basic/RichText'
import ButtonSmall        from '../Elements/ButtonSmall'
import LinkSwitch         from '../Elements/LinkSwitch'
import {postContentStyle} from '../themes/layout'
import {aboutUsStyle}     from '../themes/pages'
import {
    download,
    triangle
}                         from '../variables/iconLibrary'

const AboutUsTemplate = ({post}) =>
    <Div theme={{...postContentStyle, ...aboutUsStyle}}>
        <RichText theme={aboutUsStyle.description}>{post.description}</RichText>
        <Div theme={aboutUsStyle.twoUp}>
            {post.section_1 && (
                <Div theme={aboutUsStyle.twoUp.item}>
                    <H2 theme={aboutUsStyle.heading}>{post.section_1[0].title}</H2>
                    <RichText>{post.section_1[0].description}</RichText>
                </Div>
            )}
            {post.section_2 && (
                <Div theme={aboutUsStyle.twoUp.item}>
                    <H2 theme={aboutUsStyle.heading}>{post.section_2[0].title}</H2>
                    <RichText>{post.section_2[0].description}</RichText>
                </Div>
            )}
        </Div>
        {post.section_3 && (
            <Div theme={aboutUsStyle.sectionThree}>
                {post.section_3[0].image && (
                    <Img image={post.section_3[0].image} theme={aboutUsStyle.historyImage}/>
                )}
                <Div theme={aboutUsStyle.history}>
                    <H2 theme={aboutUsStyle.history.heading}>{post.section_3[0].title}</H2>
                    <RichText theme={aboutUsStyle.history.description}>{post.section_3[0].description}</RichText>
                    <ButtonSmall
                        url={post.section_3[0].link}
                        children="Read More"
                        icon={triangle}
                        theme={aboutUsStyle.history.button}/>
                </Div>
            </Div>
        )}
        <Div theme={aboutUsStyle.sectionBottom}>
            <Div theme={aboutUsStyle.twoUp.item}>
                {post.section_4 && (
                    <Div theme={aboutUsStyle.sectionBottom.top}>
                        <H2 theme={aboutUsStyle.heading}>{post.section_4[0].title}</H2>
                        <RichText>{post.section_4[0].description}</RichText>
                        <LinkSwitch theme={aboutUsStyle.button} url={post.section_4[0].file_upload}>
                            <Icon theme={aboutUsStyle.button.download} icon={download}/>
                            {post.section_4[0].link_text}
                        </LinkSwitch>
                    </Div>
                )}
                {post.section_5 && (
                    <Div theme={aboutUsStyle.sectionBottom.bottom}>
                        <H2 theme={aboutUsStyle.heading}>{post.section_5[0].title}</H2>
                        <RichText>{post.section_5[0].description}</RichText>
                    </Div>
                )}
            </Div>
            {post.section_6 && (
                <Div theme={aboutUsStyle.quoteWrapper}>
                    <Img image={post.section_6[0].image} theme={aboutUsStyle.quoteWrapper.image}/>
                    <Div theme={aboutUsStyle.quoteWrapper.quote}>
                        <p>{post.section_6[0].quote}</p>
                    </Div>
                    <Div theme={aboutUsStyle.quoteWrapper.attribution}>{post.section_6[0].attribution}</Div>
                </Div>
            )}
        </Div>
    </Div>

AboutUsTemplate.propTypes = {
    post: PropTypes.object.isRequired,
}

export default AboutUsTemplate