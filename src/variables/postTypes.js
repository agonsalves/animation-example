/**
 * Configuration for post types.
 *
 * name: post_type
 * type: microsite / archive / page / private / none
 * singular: Singular label
 * plural: Plural label
 * title: Page Title of detail page, if different than Plural label.
 *
 * NOTE: The order of these items within the array determines the order of global search results categories.
 *
 */
export const postTypeConfig = [
    {
        name: 'person',
        type: 'microsite',
        singular: 'Person',
        plural: 'People',
    },
    {
        name: 'practice-area',
        type: 'microsite',
        singular: 'Service',
        plural: 'Services',
    },
    {
        name: 'industry',
        type: 'microsite',
        singular: 'Industry',
        plural: 'Industries'
    },
    {
        name: 'publication',
        type: 'archive',
        singular: 'Publication',
        plural: 'Publications',
        page: 'publications',
        title: 'Publications'
    },
    {
        name: 'case-study',
        type: 'archive',
        singular: 'Matter',
        plural: 'Matters',
        page: 'case-studies',
        title: 'Matters'
    },
    {
        name: 'news-item',
        type: 'archive',
        singular: 'News Item',
        plural: 'News',
        page: 'news',
        title: 'Firm News'
    },
    {
        name: 'event',
        type: 'archive',
        singular: 'Event',
        plural: 'Events',
        page: 'events',
        title: 'Events'
    },
    {
        name: 'page',
        type: 'page',
        singular: 'Page',
        plural: 'Pages',
    },
    {
        name: 'office',
        type: 'archive',
        singular: 'Office Location',
        plural: 'Offices',
        title: 'Contact Us'
    },
    {
        name: 'blog-post',
        type: 'archive',
        singular: 'Blog Post',
        plural: 'Blog Posts'
    },
    {
        name: 'categories'
    },
    {
        name: 'job-opening',
        singular: 'Job Opening',
        plural: 'Job Openings'
    },
    {
        name: 'blogs',
        type: 'microsite',
        singular: 'Blog',
        plural: 'Blogs'
    },
]