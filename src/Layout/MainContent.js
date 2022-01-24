import PropTypes                    from 'prop-types'
import React, {useMemo}             from 'react'
import AboutUsTemplate              from '../Templates/AboutUsTemplate'
import ArchiveSearchResults         from '../Templates/ArchiveSearchResults'
import BlogMain                     from '../Templates/BlogMain'
import BlogPostDetail               from '../Templates/BlogPostDetail'
import CareersTemplate              from '../Templates/CareersTemplate'
import CaseStudyDetail              from '../Templates/CaseStudyDetail'
import CommunityTemplate            from '../Templates/CommunityTemplate'
import ContactTemplate              from '../Templates/ContactUsTemplate'
import CurrentOpeningsTemplate      from '../Templates/CurrentOpeningsTemplate'
import DiversityNewsListings        from '../Templates/DiversityNewsListings'
import DiversityTemplate            from '../Templates/DiversityTemplate'
import Error404                     from '../Templates/Error404'
import EventDetail                  from '../Templates/EventDetail'
import EventListings                from '../Templates/EventListings'
import FirmHistoryTemplate          from '../Templates/FirmHistoryTemplate'
import GenericPageTemplate          from '../Templates/GenericPageTemplate'
import GlobalSearchResults          from '../Templates/GlobalSearchResults'
import Homepage                     from '../Templates/Homepage'
import Industries                   from '../Templates/Industries'
import LeadershipTemplate           from '../Templates/LeadershipTemplate'
import MicrositeBlogPostDetail      from '../Templates/MicrositeBlogPostDetail'
import MicrositeBlogPostListings    from '../Templates/MicrositeBlogPostListings'
import MicrositeBlogRss             from '../Templates/MicrositeBlogRss'
import MicrositeCaseStudies         from '../Templates/MicrositeCaseStudies'
import MicrositeEventDetail         from '../Templates/MicrositeEventDetail'
import MicrositeEventListings       from '../Templates/MicrositeEventListings'
import MicrositeNewsDetail          from '../Templates/MicrositeNewsDetail'
import MicrositeNewsListings        from '../Templates/MicrositeNewsListings'
import MicrositePage                from '../Templates/MicrositePage'
import MicrositePeople              from '../Templates/MicrositePeople'
import MicrositePersonBio           from '../Templates/MicrositePersonBio'
import MicrositePractice            from '../Templates/MicrositePractice'
import MicrositePublicationDetail   from '../Templates/MicrositePublicationDetail'
import MicrositePublicationListings from '../Templates/MicrositePublicationListings'
import MicrositeTwitter             from '../Templates/MicrositeTwitter'
import NewsDetail                   from '../Templates/NewsDetail'
import NewsListings                 from '../Templates/NewsListings'
import OfficeDetail         from '../Templates/OfficeDetail'
import PeopleSearchResults  from '../Templates/PeopleSearchResults'
import PeopleTemplate       from '../Templates/PeopleTemplate'
import Practices            from '../Templates/Practices'
import PublicationDetail    from '../Templates/PublicationDetail'
import PublicationListings  from '../Templates/PublicationListings'
import SocialImpactTemplate from '../Templates/SocialImpactTemplate'
import Subscribe            from '../Templates/Subscribe'

const getTemplate = ({template}) => {
    if (!template)
        return null

    switch (template) {
        case 'global-search':
            return GlobalSearchResults
        case 'client-homepage':
        case 'homepage':
            return Homepage
        case 'custom':
            return GenericPageTemplate
        case 'people':
            return PeopleTemplate
        case 'contact':
            return ContactTemplate
        case 'news':
            return NewsListings
        case 'news-item':
            return NewsDetail
        case 'publications':
            return PublicationListings
        case 'publication':
            return PublicationDetail
        case 'events':
            return EventListings
        case 'event':
            return EventDetail
        case 'case-study':
            return CaseStudyDetail
        case 'office':
            return OfficeDetail
        case 'practice':
            return Practices
        case 'client-subscribe':
            return Subscribe
        case 'client-industries':
            return Industries
        case 'current_job_openings':
            return CurrentOpeningsTemplate
        case 'client-leadership':
            return LeadershipTemplate
        case 'client-community':
            return CommunityTemplate
        case 'client-diversity':
            return DiversityTemplate
        case 'client-careers':
            return CareersTemplate
        case 'blogs':
            return BlogMain
        case 'blog-post':
            return BlogPostDetail
        case 'microsite-blog_posts':
        case 'microsite-blog_category':
            return MicrositeBlogPostListings
        case 'microsite-blog-post-detail':
            return MicrositeBlogPostDetail
        case 'microsite-blog':
            return MicrositeBlogRss
        case 'microsite-case_studies':
            return MicrositeCaseStudies
        case 'microsite-events':
            return MicrositeEventListings
        case 'microsite-event-detail':
            return MicrositeEventDetail
        case 'microsite-news_items':
            return MicrositeNewsListings
        case 'microsite-news-item-detail':
            return MicrositeNewsDetail
        case 'microsite-people':
            return MicrositePeople
        case 'microsite-publications':
            return MicrositePublicationListings
        case 'microsite-publication-detail':
            return MicrositePublicationDetail
        case 'microsite-twitter':
            return MicrositeTwitter
        case 'microsite-custom':
            return MicrositePage
        case 'person':
            return MicrositePersonBio
        case 'practice-area':
        case 'industry':
            return MicrositePractice
        case 'people-search':
            return PeopleSearchResults
        case 'news-search':
        case 'events-search':
        case 'publications-search':
        case 'case-studies-search':
        case 'practice-search':
        case 'blogs-search':
            return ArchiveSearchResults
        case 'about-us':
            return AboutUsTemplate
        case 'social-impact':
            return SocialImpactTemplate
        case 'firm-history':
            return FirmHistoryTemplate
        case 'diversity-news':
            return DiversityNewsListings
        case 'error404':
        default:
            return Error404
    }
}

const MainContent = ({post}) => {
    let TemplateComponent = useMemo(
        () => getTemplate(post),
        [post]
    )

    return <TemplateComponent post={post}/>
}

MainContent.propTypes = {
    post: PropTypes.object.isRequired
}

export default MainContent