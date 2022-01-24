import PropTypes            from 'prop-types'
import React                from 'react'
import {HelmetProvider}     from 'react-helmet-async'
import {connect}            from 'react-redux'
import AdminBar             from '../Admin/AdminBar'
import CookieNotice         from '../Elements/CookieNotice'
import GoogleAnalytics      from '../Elements/GoogleAnalytics'
import PageFrame            from '../Layout/PageFrame'
import BlogPostsFilter      from './BlogPostsFilter'
import LayoutSwitch         from './LayoutSwitch'
import PanelSwitch          from './PanelSwitch'
import TransitionController from './TransitionController'

const Root = ({isInitialized, adminUrl}) => isInitialized
    ? (
        <LayoutSwitch>
            <TransitionController>
                <PanelSwitch>
                    <HelmetProvider>
                        <BlogPostsFilter>
                            {(adminUrl && (
                                <AdminBar adminUrl={adminUrl}/>
                            )) || (
                                <GoogleAnalytics/>
                            )}
                            <PageFrame/>
                            <CookieNotice/>
                        </BlogPostsFilter>
                    </HelmetProvider>
                </PanelSwitch>
            </TransitionController>
        </LayoutSwitch>
    )
    : null

Root.propTypes = {
    isInitialized: PropTypes.bool.isRequired,
    adminUrl: PropTypes.string
}

const mapStateToProps = ({site}) => ({
    isInitialized: site.isInitialized,
    adminUrl: site.adminUrl
})

export default connect(mapStateToProps)(Root)