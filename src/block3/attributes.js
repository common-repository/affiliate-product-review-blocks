const attributes= {
    // Container 
    enableContainerBorder: {
        type: 'boolean',
        default: true,
    },    
    containerBorderColor: {
        type: 'string',
        default: '#335AB9',
    },
    containerBorderWidth: {
        type: 'number',
        default: 5,
    },    
    enableContainerBoxShadow: {
        type: 'boolean',
        default: false,
    },    
    // Badge
    showBadge: {
        type: 'boolean',
        default: true
    },
    badgeLabel: {
        type: 'string',
        default: 'Badge',
    },
    badgeColor: {
        type: 'string',
        default: '#ffffff',
    },
    badgeBackgroundColor: {
        type: 'string',
        default: '#335AB9',
    },
    
    // Product Image
    url: {
        type: 'string',
    },
    alt: {
        type: 'string',
    },
    id: {
        type: 'number'
    },

    // Product Title
    title: {
        type: 'string',
        default: 'Product Title',
    },
    titleTag: {
        type: 'string',
        default: 'h2',
    },
    titleColor: {
        type: 'string',
        default: '#D5343A',
    },
    // title link 
    titleLink: {
        type: 'string',
        default: '#',
    },
    titleTab: {
        type: 'boolean',
        default: false
    },
    titleRel: {
        type: 'string',
        default: 'nofollow sponsored',
    },
    // Product Sub Title
    showSubTitle: {
        type: 'boolean',
        default: true
    },
    subTitle: {
        type: 'string',
        default: 'Product Sub Title',
    },
    subTitleTag: {
        type: 'string',
        default: 'h3',
    },
    subTitleColor: {
        type: 'string',
        default: '#000000',
    },

    // Product Description
    description: {
        type: 'string',
    },
    descColor: {
        type: 'string',
        default: '#000000',
    },
    // primary Btn 
    showprimaryBtn: {
        type: 'boolean',
        default: true
    },
    primaryBtnLabel: {
        type: 'string',
        default: 'Buy Now',
    },
    primaryBtnColor: {
        type: 'string',
        default: '#ffffff',
    },
    primaryBtnBackgroundColor: {
        type: 'string',
        default: '#ED5A62',
    },
    primaryBtnRadius: {
        type: 'number',
        default: 10
    },
    // primary Button link 
    primaryLink: {
        type: 'string',
        default: '#',
    },
    primaryTab: {
        type: 'boolean',
        default: false
    },
    primaryRel: {
        type: 'string',
        default: 'nofollow sponsored',
    },

    // typography 
    titleFont: {
        type: 'string',
        default: 'Montserrat',
    }, 
    subTitleFont: {
        type: 'string',
        default: 'Montserrat',
    }, 
    descFont: {
        type: 'string',
        default: 'Montserrat',
    },
    // typography size
    tDeskSize: {
        type: 'number',
        default: 24,
    },
    tTabSize: {
        type: 'number',
        default: 20,
    },
    tMobSize: {
        type: 'number',
        default: 18,
    },

    stDeskSize: {
        type: 'number',
        default: 20,
    },
    stTabSize: {
        type: 'number',
        default: 18,
    },
    stMobSize: {
        type: 'number',
        default: 16,
    },

    dDeskSize: {
        type: 'number',
        default: 16,
    },
    dTabSize: {
        type: 'number',
        default: 14,
    },
    dMobSize: {
        type: 'number',
        default: 14,
    }
};

export default attributes; 
