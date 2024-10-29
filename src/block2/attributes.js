const attributes= {
    url: {
        type: 'string'
    },
    alt: {
        type: 'string'
    },
    id: {
        type: 'number'
    },
    title: {
        type: 'string',
    },
    name: {
        type: 'string',
    },
    showReview: {
        type: 'boolean',
        default: true
    },
    reviewBtnLabel: {
        type: 'string',
        default: 'Read Review'
    },
    reviewBtnLink: {
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
    reviewNewTab: {
        type: 'boolean',
        default: false
    },
    affiliateNewTab: {
        type: 'boolean',
        default: false
    }
};

export default attributes; 
