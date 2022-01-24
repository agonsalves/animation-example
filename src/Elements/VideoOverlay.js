import React, {
    memo,
    useContext,
    useEffect,
    useState
}                         from 'react'
import VimeoPlayer        from 'react-player/lib/players/Vimeo'
import YouTubePlayer      from 'react-player/lib/players/YouTube'
import Div                from '../Basic/Div'
import Icon               from '../Basic/Icon'
import {PanelToggle}      from '../Containers/PanelSwitch'
import Overlay            from '../Elements/Overlay'
import {videoWidgetStyle} from '../themes/sidebars'
import {closeOut}         from '../variables/iconLibrary'

const VideoOverlay = memo(() => {
    const {currentPanel} = useContext(PanelToggle)
    const [isOpen, setIsOpen] = useState(false)
    const url = currentPanel.split('-')[1]

    const Player = url && url.includes('vimeo')
        ? VimeoPlayer
        : YouTubePlayer

    useEffect(() => {
        setIsOpen(currentPanel.includes('video-'))
    }, [isOpen, currentPanel])

    return (
        <>
            <Overlay isOpen={isOpen}/>
            {isOpen && (
                <Div theme={videoWidgetStyle.videoWrapper}>
                    <Div theme={videoWidgetStyle.video}>
                        <Player
                            url={url}
                            className="video"
                            playing={isOpen}
                            controls={true}
                        />
                        <Icon
                            icon={closeOut}
                            theme={videoWidgetStyle.closeButton}
                            className="close-panels"
                        />
                    </Div>
                </Div>
            )}
        </>
    )
})

VideoOverlay.displayName = 'VideoOverlay'

export default VideoOverlay