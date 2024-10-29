const attributes= {   
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
    imgMaxWidth: {
        type: 'number',
        default: 50,
    },
    price: {
        type: 'string',
        default: '$399 USD',
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
    showPrice: {
        type: 'boolean',
        default: true
    }
};

export default attributes; 
