import {block}   from '../utils/themer'
import {globals} from '../variables/styles'

export const leadershipStyle = {
    executives: {
        display: block,
        ieTablet: {
            display: '-ms-grid',
            msGridColumns: '220px 37px 220px 37px 220px',
            gridGap: '37px'
        },
        ieSmall: {
            msGridColumns: '305px 38px 305px 38px 305px',
            gridGap: '37px'
        },
        ieLarge: {
            msGridColumns: '375px 37px 375px 37px 375px',
            gridGap: '37px'
        },
        tablet: {
            display: 'grid',
            justifyContent: 'space-between',
            gridTemplateColumns: 'repeat(3, 220px)',
            marginBottom: 45
        },
        small: {
            gridTemplateColumns: 'repeat(3, 305px)',
            marginBottom: 55,
        },
        large: {
            marginTop: 33,
            marginBottom: 75,
            gridTemplateColumns: 'repeat(3, 375px)',
        },
        print: {
            marginBottom: 5
        },
        item: {
            display: block,
            height: 508,
            tablet: {
                height: 300
            },
            small: {
                height: 377
            },
            large: {
                height: 458
            },
            print: {
                pageBreakInside: 'avoid'
            },
            ieTablet: {
                child: [
                    {
                        selector: ':nth-child(1)',
                        msGridColumn: 1,
                    },
                    {
                        selector: ':nth-child(2)',
                        msGridColumn: 3,
                    },
                    {
                        selector: ':nth-child(3)',
                        msGridColumn: 5,
                    },
                ]
            }
        },
        image: {},
        name: {
            weight: 600,
            lineHeight: '28px',
            size: 22,
            marginTop: 20,
            tablet: {
                size: 17,
                lineHeight: '22px',
                marginTop: 14
            },
            small: {
                size: 19,
                lineHeight: '23px',
                marginTop: 17
            },
            large: {
                lineHeight: '28px',
                size: 22,
                marginTop: 20
            }
        },
        title: {
            lineHeight: '35px',
            size: 20,
            color: globals.colors.gray,
            tablet: {
                size: 16,
                lineHeight: '22px',
            },
            small: {
                size: 17,
                lineHeight: '32px',
            },
            large: {
                lineHeight: '35px',
                size: 20
            }
        }
    },
    members: {
        display: block,
        borderTop: globals.style.dividingBorder,
        ieTablet: {
            display: '-ms-grid',
            msGridColumns: '130px 21px 130px 21px 130px 21px 130px 21px 130px',
            gridGap: '21px'
        },
        ieSmall: {
            msGridColumns: '175px 29px 175px 29px 175px 29px 175px 29px 175px',
            gridGap: '29px'
        },
        ieLarge: {
            msGridColumns: '215px 33px 215px 33px 215px 33px 215px 33px 215px',
            gridGap: '33px'
        },
        mobile: {
            paddingTop: 60
        },
        print: {
            padding: 0,
            border: 0
        },
        tablet: {
            display: 'grid',
            justifyContent: 'space-between',
            gridTemplateColumns: 'repeat(5, 130px)',
            paddingTop: 55
        },
        small: {
            gridTemplateColumns: 'repeat(5, 175px)',
            paddingTop: 65
        },
        large: {
            gridTemplateColumns: 'repeat(5, 215px)',
            paddingTop: 85
        },
        item: {
            height: 365,
            tablet: {
                height: 240
            },
            small: {
                height: 305
            },
            large: {
                height: 365
            },
            print: {
                height: 250,
                pageBreakInside: 'avoid'
            },
            ieTablet: {
                child: [
                    {
                        selector: ':nth-child(5n-4)',
                        msGridColumn: 1,
                    },
                    {
                        selector: ':nth-child(5n-3)',
                        msGridColumn: 3,
                    },
                    {
                        selector: ':nth-child(5n-2)',
                        msGridColumn: 5,
                    },
                    {
                        selector: ':nth-child(5n-1)',
                        msGridColumn: 7
                    },
                    {
                        selector: ':nth-child(5n)',
                        msGridColumn: 9,
                    },
                    {
                        selector: ':nth-child(n+6):not(:nth-child(n+11))',
                        msGridRow: 2
                    },
                    {
                        selector: ':nth-child(n+11):not(:nth-child(n+16))',
                        msGridRow: 3
                    },
                    {
                        selector: ':nth-child(n+16):not(:nth-child(n+21))',
                        msGridRow: 4
                    },
                    {
                        selector: ':nth-child(n+21):not(:nth-child(n+26))',
                        msGridRow: 5
                    },
                    {
                        selector: ':nth-child(n+26):not(:nth-child(n+31))',
                        msGridRow: 6
                    },
                ]
            }
        },
        image: {
            tablet: {},
            small: {},
            large: {}
        },
        name: {
            weight: 600,
            color: globals.colors.black,
            size: 20,
            lineHeight: '24px',
            marginTop: 16,
            tablet: {
                size: 17,
                marginTop: 10,
                lineHeight: '20px',
            },
            small: {
                size: 18,
                marginTop: 13,
                lineHeight: '22px',
            },
            large: {
                size: 20,
                lineHeight: '25px',
                marginTop: 16
            }
        },
        title: {
            lineHeight: '23px',
            margin: '3px 0 12px 0',
            size: 18,
            color: globals.colors.gray,
            tablet: {
                size: 15,
                lineHeight: '19px',
                margin: '1px 0 6px 0',
            },
            small: {
                size: 16,
                lineHeight: '21px',
                margin: '2px 0 9px 0',
            },
            large: {
                lineHeight: '23px',
                margin: '3px 0 12px 0',
                size: 18
            }
        },
        email: {
            lineHeight: '18px',
            size: 18,
            color: globals.colors.gray,
            display: block,
            textDecoration: 'underline',
            tablet: {
                size: 15,
                lineHeight: '13px',
            },
            small: {
                size: 16,
                lineHeight: '15px',
            },
            large: {
                lineHeight: '18px',
                size: 18
            }
        }
    }
}