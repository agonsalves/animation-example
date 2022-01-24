import idx                       from 'idx'
import defaultSocialSharingImage from '../assets/miles-social-sharing.png'
import {
    composePersonTitle,
    stripHtml
}                                from './helpers'

/**
 * Constructs the JSON-LD data for a given post, according to its post type.
 *
 * https://github.com/nfl/react-helmet
 *
 * @param {object} post
 * @param {object} config
 * @returns {string}
 */
const headerJsonLd = (post, config) => {
    const siteURL = process.env.REACT_APP_SITE_URL
    let schema = ''
    const template = post.post_type === 'page' ? post.page_type : post.post_type

    switch (template) {
        case 'client-homepage':
            schema = {
                '@context': 'https://schema.org',
                '@type': 'Organization',
                name: config.firmName,
                url: siteURL,
                logo: siteURL + defaultSocialSharingImage,
                sameAs: Object.values(config.socialUrls)
            }

            // multi_office
            if (post.office_locations && post.office_locations.length > 1) {
                let offices = []

                post.office_locations.map((office) => {
                    return offices.push({
                        '@type': 'ProfessionalService',
                        'sameAs': siteURL + office.slug,
                        'name': office.post_title,
                        'image': idx(office, _ => _.image_upload.url),
                        'telephone': office.telephone,
                        'address': {
                            '@type': 'PostalAddress',
                            'name': office.post_title,
                            'addressLocality': office.address_locality,
                            'addressRegion': office.address_region,
                            'postalCode': office.postal_code,
                            'streetAddress': [office.street_address, office.extended_address].filter((el) =>
                                el && el.length > 0
                            ).join(', ')
                        }
                    })
                })

                schema.location = offices
            } else if (post.office_locations && post.office_locations.length === 1) {
                const office = post.office_locations[0]

                schema.address = {
                    '@type': 'PostalAddress',
                    'name': office.post_title,
                    'addressLocality': office.address_locality,
                    'addressRegion': office.address_region,
                    'postalCode': office.postal_code,
                    'streetAddress': [office.street_address, office.extended_address].filter((el) =>
                        el && el.length > 0
                    ).join(', ')
                }

                schema.telephone = office.telephone
                schema.faxNumber = office.fax_number
                schema.email = office.email
            }

            schema = JSON.stringify(schema)

            break
        case 'person':
            schema = JSON.stringify({
                '@context': 'https://schema.org',
                '@type': 'Person',
                email: post.email,
                image: idx(post, _ => _.headshot_photo.url),
                jobTitle: composePersonTitle(post),
                name: post.post_title,
                givenName: post.first_name,
                familyName: post.last_name,
                telephone: idx(post, _ => _.office_location[0].office_phone),
                url: `${siteURL}${post.slug}`,
                worksFor: {
                    '@type': 'Organization',
                    name: config.firmName,
                    sameAs: siteURL
                },
                workLocation: officeJson(post.office_location, siteURL)
            })
            break
        case 'event':
            schema = JSON.stringify({
                '@context': 'https://schema.org',
                '@type': 'Event',
                name: post.post_title,
                location: {
                    '@type': 'Place',
                    name: post.where,
                    address: post.location_details && {
                        '@type': 'PostalAddress',
                        streetAddress: stripHtml(post.location_details).replace(/\r?\n|\r/g, ' ')
                    }
                },
                startDate: post.date,
                url: `${siteURL}${post.slug}`,
                organizer: {
                    '@type': 'Organization',
                    name: config.firmName,
                    sameAs: siteURL
                },
                performer: peopleJson(post.people, siteURL)
            })
            break
        case 'events':
            schema = JSON.stringify({
                '@context': 'https://schema.org',
                '@type': 'Organization',
                name: config.firmName,
                sameAs: siteURL,
                event: eventJson(post.related_posts, siteURL, config.firmName)
            })
            break
        case 'publication':
            schema = JSON.stringify({
                '@context': 'https://schema.org',
                '@type': 'Article',
                name: post.post_title,
                headline: post.post_title,
                datePublished: post.date,
                url: `${siteURL}${post.slug}`,
                articleBody: post.full_content,
                image: idx(post, _ => _.thumbnail_teaser.url),
                contributor: peopleJson(post.people, siteURL),
                author: post.byline
            })
            break
        case 'news-item':
            schema = JSON.stringify({
                '@context': 'https://schema.org',
                '@type': 'NewsArticle',
                author: peopleJson(post.people, siteURL),
                name: post.post_title,
                headline: post.post_title,
                datePublished: post.date,
                url: `${siteURL}${post.slug}`,
                articleBody: post.full_content,
                image: idx(post, _ => _.thumbnail_teaser.url)
            })
            break
        case 'office':
            schema = JSON.stringify({
                '@context': 'https://schema.org',
                '@type': 'ProfessionalService',
                'address': {
                    '@type': 'PostalAddress',
                    'name': post.post_title,
                    'addressLocality': post.address_locality,
                    'addressRegion': post.address_region,
                    'postalCode': post.postal_code,
                    'streetAddress': [post.street_address, post.extended_address].filter((el) =>
                        el && el.length > 0
                    ).join(', ')
                },
                name: post.post_title,
                telephone: post.telephone,
                faxNumber: post.fax_number,
                'image': idx(post, _ => _.image_upload.url),
                branchOf: {
                    '@type': 'Organization',
                    name: config.firmName,
                    sameAs: siteURL
                }
            })
            break
        default:
            break
    }

    return schema
}

const officeJson = (offices, siteURL) => {
    let officeArray = []
    for (let i in offices) {
        let office = offices[i]

        officeArray.push({
            '@type': 'ProfessionalService',
            name: office.post_title,
            sameAs: siteURL + office.slug,
            image: idx(office, _ => _.image_upload.url),
            address: {
                '@type': 'PostalAddress',
                'name': office.post_title,
                'addressLocality': office.address_locality,
                'addressRegion': office.address_region,
                'postalCode': office.postal_code,
                'streetAddress': [office.street_address, office.extended_address].filter((el) =>
                    el && el.length > 0
                ).join(', ')
            },
            telephone: office.office_phone
        })
    }
    return officeArray
}

const peopleJson = (people, siteURL) => people?.map(person => ({
    '@type': 'Person',
    name: person.post_title,
    sameAs: siteURL + person.slug,
    image: person.headshot_photo?.url
}))

const eventJson = (events, siteURL, clientName) => events?.map(event => ({
    '@type': 'Event',
    name: event.post_title,
    location: {
        '@type': 'Place',
        name: event.where,
        address: {
            '@type': 'PostalAddress',
            streetAddress: event.location_details && stripHtml(event.location_details).replace(/\r?\n|\r/g, ' ')
        }
    },
    startDate: event.date,
    url: `${siteURL}${event.slug}`,
    organizer: {
        '@type': 'Organization',
        name: clientName,
        sameAs: siteURL
    },
    performer: peopleJson(event.people, siteURL)
}))

export default headerJsonLd