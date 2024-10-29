const attributes= {
    title: {
        type: 'string',
        default: 'Product Title'
    },
    titleTag: {
        type: 'string',
        default: 'h2'
    },
    // typography 
    // font family 
    titleFont: {
        type: 'string',
        default: 'Montserrat'
    },
    // Product title 
    titleDeskSize: {
        type: 'number',
        default: 18
    },
    titleTabSize: {
        type: 'number',
        default: 16
    },
    titleMobSize: {
        type: 'number',
        default: 14
    },
    url: {
        type: 'string',
    },
    id: {
        type: 'number',
    },
    alt: {
        type: 'string',
    },
    type: {
        type: 'string',
        default: 'Folding'
    },
    price: {
        type: 'string',
        default: '50$'
    },
    rating: {
        type: 'number',
        default: 5
    },
    showReview: {
        type: 'boolean',
        default: true
    },
    readMoreBtnLabel: {
        type: 'string',
        default: 'Read Review'
    },
    readMoreBtnLink: {
        type: 'string',
        default: '#'
    },
    showAffiliate: {
        type: 'boolean',
        default: true
    },
    affiliateBtnLabel: {
        type: 'string',
        default: 'See on Amazon'
    },
    affiliateBtnLink: {
        type: 'string',
        default: '#'
    },
    readmoreNewTab: {
        type: 'boolean',
        default: false
    },
    affiliateNewTab: {
        type: 'boolean',
        default: false
    },

    // styles
    color: {
        type: 'string',
        default: '#676B71'
    },
    backgroundColor: {
        type: 'string',
        default: '#ffffff'
    },
    borderWidth: {
        type: 'number', 
        default: 1,
    },
    borderColor: {
        type: 'string',
        default: '#cccccc'
    },
    columnSeparatorWidth: {
        type: 'number',
        default: 1
    },
    columnSeparatorColor: {
        type: 'string',
        default: '#cccccc'
    },
    ratingColor: {
        type: 'string',
        default: '#0FADEE'
    },
    pbtnColor: {
        type: 'string',
        default: '#ffffff'
    },
    pbtnBg: {
        type: 'string',
        default: '#000000'
    },
    sbtnColor: {
        type: 'string',
        default: '#ffffff'
    },
    sbtnBg: {
        type: 'string',
        default: '#e05d5d'
    }
    
};

export default attributes; 
