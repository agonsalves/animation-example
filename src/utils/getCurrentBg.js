import {
    isBlog,
    isContactPage,
    isHomepage,
    isIndustryListingPage,
    isOfficeDetail,
    isPeoplePage,
    isPeopleSearch,
    isPersonMicrosite,
    isPracticeListingPage,
    isPracticeSearch
}                      from './flags'

const cdnLocation = process.env.REACT_APP_CDN_LOCATION

const bgConfig = {
    news: cdnLocation + 'bg/marquee-news.jpg',
    people: cdnLocation + 'bg/marquee-people.jpg',
    publications: cdnLocation + 'bg/marquee-publications.jpg',
    services: cdnLocation + 'bg/marquee-services.jpg',
    aboutUs: cdnLocation + 'bg/marquee-about.jpg',
    careers: cdnLocation + 'bg/marquee-careers.jpg',
    contact: cdnLocation + 'bg/marquee-contact.jpg',
    diversity: cdnLocation + 'bg/marquee-diversity.jpg',
    events: cdnLocation + 'bg/marquee-events.jpg',
    generic: cdnLocation + 'bg/marquee-general.jpg',
    matters: cdnLocation + 'bg/marquee-matters.jpg',
    blog: cdnLocation + 'bg/Marquee-Blog.jpg',
    blank: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABAQMAAAAl21bKAAAAA1BMVEUiIiLuYaiQAAAACklEQVQI12NgAAAAAgAB4iG8MwAAAABJRU5ErkJggg==',
    person: cdnLocation + 'bg/marquee-attorney-portrait.jpg',

    'service-banking-and-finance': cdnLocation + 'bg/Marquee-Banking-Finance.jpg',
    'service-corporate-securities-and-tax': cdnLocation + 'bg/Marquee-Corporate-Securities.jpg',
    'service-creditors-rights-and-bankruptcy': cdnLocation + 'bg/Marquee-Creditors-Rights-Bankruptcy.jpg',
    'service-environmental-and-energy': cdnLocation + 'bg/Marquee-Environmental-Energy.jpg',
    'service-family-law-and-private-clients': cdnLocation + 'bg/Marquee-Family-Law.jpg',
    'service-government-contracts': cdnLocation + 'bg/Marquee-Government-Contracts.jpg',
    'service-health-care': cdnLocation + 'bg/Marquee-Health-Care-Hospital-Industry.jpg',
    'service-insurance': cdnLocation + 'bg/Marquee-Insurance.jpg',
    'service-intellectual-property-and-technology': cdnLocation + 'bg/Marquee-Intellectual-Property.jpg',
    'service-labor-employment-benefits-inmigration': cdnLocation + 'bg/Marquee-Labor-Employment.jpg',
    'service-litigation-and-dispute-resolutions': cdnLocation + 'bg/Marquee-Litigation.jpg',
    'service-products-liability-and-mass-torts': cdnLocation + 'bg/Marquee-Products-Liability-Mass-Torts.jpg',
    'service-real-estate-and-construction': cdnLocation + 'bg/Marquee-Real-Estate.jpg',
    'industry-health-care': cdnLocation + 'bg/Marquee-Health-Care.jpg',
    'industry-government-contractors': cdnLocation + 'bg/Marquee-Government-Contracting-Industry.jpg',
    'industry-real-estate': cdnLocation + 'bg/Marquee-Real-Estate-Industry.jpg',
    'industry-finance-and-capital-markets': cdnLocation + 'bg/Marquee-Finance-Capital-Markets.jpg',
    'industry-manufacturing-distribution': cdnLocation + 'bg/Marquee-Manufacturing-Distribution.jpg',
    'industry-education': cdnLocation + 'bg/Marquee-Education.jpg'
}

export const getCurrentBg = post => {
    if (!!post.parentPost.marquee_image && !!bgConfig[post.parentPost.marquee_image])
        return bgConfig[post.parentPost.marquee_image]

    if (isHomepage(post) || isIndustryListingPage(post))
        return bgConfig.blank

    if (isPracticeListingPage(post) || isPracticeSearch(post))
        return bgConfig.services

    if (isPeoplePage(post) || isPeopleSearch(post))
        return bgConfig.people

    if (isPersonMicrosite(post))
        return post.parentPost.photo?.url || bgConfig.blank

    if (post.parentPost.page_type === 'about-us')
        return bgConfig.aboutUs

    if (post.parentPost.page_type === 'client-careers')
        return bgConfig.careers

    if (post.parentPost.page_type === 'client-diversity')
        return bgConfig.diversity

    if (isContactPage(post) || isOfficeDetail(post))
        return bgConfig.contact

    if (post.parentPost.page_type === 'events')
        return bgConfig.events

    if (post.parentPost.page_type === 'news')
        return bgConfig.news

    if (post.parentPost.page_type === 'case-studies')
        return bgConfig.matters

    if (post.parentPost.page_type === 'publications')
        return bgConfig.publications

    if (isBlog(post))
        return bgConfig.blog

    return bgConfig.generic
}