import {
    absolute,
    borderBox,
    center,
    column,
    flex,
    flexEnd,
    none,
    relative,
    white
}                from '../utils/themer'
import {globals} from '../variables/styles'

export const homepageStyles = {
    content: {
        panel: {
            position: absolute,
            display: flex,
            flexDirection: column,
            justifyContent: flexEnd,
            height: '100%',
            boxSizing: borderBox,
            padding: 25,
            tablet: {
                padding: '0 0 0 53px',
            },
            small: {
                padding: '0 0 0 60px',
            },
            large: {
                padding: '0 0 0 80px',
            }
        },
        buttonWrap: {
            marginTop: 0,
            alignItems: center,
            zIndex: 1,
            tablet: {
                marginTop: 10,
                marginBottom: 54
            },
            small: {
                marginTop: 10,
                marginBottom: 62
            },
            large: {
                marginTop: 34,
                marginBottom: 75
            }
        },
        button: {
            color: white,
            height: 50,
            size: 12,
            lineHeight: '13px',
            minWidth: 135,
            border: '2px solid #9B9B9B',
            justifyContent: center,
            letterSpacing: 3,
            weight: 300,
            boxSizing: borderBox,
            backgroundColor: globals.colors.black,
            mobile: {
                marginLeft: 25,
                marginBottom: 50
            },
            tablet: {
                alignItems: center
            },
            small: {
                height: 60,
                minWidth: 161,
                size: 13,
                lineHeight: '13px'
            },
            large: {
                minWidth: 200,
            },
            child: {
                selector: '> svg',
                display: none
            },
            hover: {
                borderColor: globals.colors.green,
                backgroundColor: globals.colors.green,
                color: white
            }
        },
        description: {
            mobile: {
                padding: '25px'
            },
            tablet: {
                width: 231
            },
            small: {
                width: 271
            },
            large: {
                width: 336,
            },
            child: {
                selector: 'p',
                color: 'white',
                size: 18,
                lineHeight: '30px',
                tablet: {
                    size: 15,
                    lineHeight: '25px'
                },
                small: {
                    size: 16
                },
                large: {
                    size: 18,
                    lineHeight: '30px'
                }
            },
        },
        mobileImage: {
            margin: '25px auto 0 auto'
        }
    },
    videoStage: {
        width: '100%',
        height: '100vh',
        position: relative,
        backgroundColor: globals.colors.black,
        zIndex: -1
    },
    imageStage: {
        position: relative,
        height: '100vh',
        tablet: {
            left: 130
        },
        small: {
            left: 50
        },
        large: {
            left: 30,
            width: 1680
        }
    },
    group1: {
        video: {
            position: absolute,
            left: 0,
            width: '100%',
            height: '100%',
            overflow: 'hidden',
            child: {
                selector: 'video',
                objectFit: 'fill'
            },
            inner: {
                position: absolute,
                left: 0,
                width: 1920,
                height: 1024
            },
            fallback: {
                width: 0,
                height: window.innerHeight,
                background: 'black',
                position: absolute,
                right: 0
            }
        },
    },
}