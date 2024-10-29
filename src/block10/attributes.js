const attributes= {
    product: {
        type: 'string',
        default: 'Treadmill'
    },
    type: {
        type: 'string',
        default: 'Type'
    },
    price: {
        type: 'string',
        default: 'Price'
    },
    features: {
        type: 'string',
        default: 'Features'
    },
    rating: {
        type: 'string',
        default: 'Our Rating'
    },
    btn: {
        type: 'string',
        default: 'Links'
    },
    // typography 
    // font family 
    fontFamily: {
        type: 'string',
        default: 'Montserrat'
    },
    // Product title 
    fontDeskSize: {
        type: 'number',
        default: 15
    },
    fontTabSize: {
        type: 'number',
        default: 14
    },
    fontMobSize: {
        type: 'number',
        default: 14
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
    }
};

export default attributes; 
