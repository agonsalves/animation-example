import {AnimatePresence}         from 'framer-motion'
import idx                       from 'idx'
import PropTypes                 from 'prop-types'
import React, {useContext}       from 'react'
import Div                       from '../Basic/Div'
import H2                        from '../Basic/H2'
import MotionDiv                 from '../Basic/MotionDiv'
import RichText                  from '../Basic/RichText'
import Span                      from '../Basic/Span'
import {PostsFilterContext}      from '../Containers/BlogPostsFilter'
import BlogPostListing           from '../Elements/BlogPostListing'
import {
    micrositeBlogPostListingsStyle,
    micrositeBlogSubCategory,
    personMicrositeBlogPostListingStyle
}                                from '../themes/blogs'
import {postContentStyle}        from '../themes/layout'
import {micrositePageTitleStyle} from '../themes/microsites'
import {isBlog, isPaginated}     from '../utils/flags'
import Pagination                from "../Elements/Pagination";

const MicrositeBlogPostListings = ({post}) => {
    const {postsFilter} = useContext(PostsFilterContext)

    const subCategory = post.hasOwnProperty('associated_blog_category')
        && post.associated_blog_category[0].hasOwnProperty('children')
        && !!post.associated_blog_category[0].children
        && post.associated_blog_category[0].children.find(item => item.id === postsFilter)

    const blogPostListings = idx(post, _ => _.related_posts.filter(item => {
        if (!postsFilter)
            return true

        return idx(item, _ => _.bp_categories.find(cat =>
            idx(cat, _ => _.children.find(subcat =>
                subcat.id === postsFilter
            ))
        ))
    }))

    let orderedBlogPostListings

    //.sort function not supported in IE11 using bubbleSort instead
    const bubbleSort = (array) => {
        if(!array)
            return false

        let done = false;
        while (!done) {
            done = true;
            for (let i = 1; i < array.length; i += 1) {
                if (array[i - 1].date < array[i].date) {
                    done = false;
                    let tmp = array[i - 1];
                    array[i - 1] = array[i];
                    array[i] = tmp;
                }
            }
        }

        return array;
    }
    orderedBlogPostListings = bubbleSort(blogPostListings)

    return (
        <Div theme={postContentStyle}>
            <H2 theme={isBlog(post)
                ? micrositeBlogPostListingsStyle.heading
                : personMicrositeBlogPostListingStyle.heading}
            >
                {isBlog(post) && (
                    <Span>Category: </Span>
                )}
                <Span theme={isBlog(post) ? micrositeBlogPostListingsStyle.categoryTitle : micrositePageTitleStyle}>
                    {post.post_title}&nbsp;
                </Span>
                {!!subCategory && (
                    <Span theme={{
                        ...micrositeBlogPostListingsStyle.categoryTitle,
                        ...micrositeBlogSubCategory
                    }}>
                        ({subCategory.term})
                    </Span>
                )}
            </H2>
            {post.override_microsite_blog_description && (
                <RichText
                    theme={micrositeBlogPostListingsStyle.description}
                    children={post.override_microsite_blog_description}
                />
            )}
            <AnimatePresence initial={false}>
                {orderedBlogPostListings && orderedBlogPostListings.map(item =>
                    <MotionDiv
                        key={item.id}
                        theme={micrositeBlogPostListingsStyle.wrapper}
                        initial={{height: 0}}
                        animate={{height: 'auto'}}
                        exit={{height: 0}}
                    >
                        <BlogPostListing
                            title={item.post_title}
                            image={item.thumbnail_teaser}
                            description={item.full_content}
                            url={item.slug}
                            date={item.date}
                            authors={item.bp_authors}
                            guestAuthors={item.bp_guest_authors}
                            outsideAuthors={item.bp_outside_authors}
                            theme={isBlog(post) ? micrositeBlogPostListingsStyle : personMicrositeBlogPostListingStyle}
                        />
                    </MotionDiv>
                )}
            </AnimatePresence>
            {isPaginated(post) && (
                <Pagination post={post}/>
            )}
        </Div>
    )
}

MicrositeBlogPostListings.propTypes = {
    post: PropTypes.object.isRequired,
}

export default MicrositeBlogPostListings
