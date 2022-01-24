export const globalSearchPost = {
    template: 'global-search',
    page_type: 'global-search',
    post_title: 'Search Results',
    slug: '',
    post_type: 'page'
}

export const notFoundPost = {
    template: 'error404',
    page_type: 'error404',
    post_title: 'Page Not Found',
    post_type: 'page',
    parentPost: {
        template: 'error404',
        page_type: 'error404',
        post_title: 'Page Not Found',
        post_type: 'page',
    }
}