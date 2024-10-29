/**
 * Block Name: Product Review
*/

//  Import CSS.
import attributes from './attributes';
import edit from './edit';
import './editor.scss';
import save from './save';
import './style.scss';

const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;


/**
 * Register: Product Review
 */
registerBlockType( 'mstg/product-reivew', {
	title: __( 'Product Review' ),
	description: __( 'Show Product Review' ),
	icon: {
		src: 'editor-table',
		foreground: '#a32a46'
	},
	category: 'mustenberg-blocks',
	example: {
		showBadge: true,
		badgeColor: '#ffffff',
		badgeBackgroundColor: '#335AB9',
		badgeLabel: 'Badge',
		showPrice: true,
		price: '$99.99 USD',
		showPrimaryBtn: true,
		primaryBtnLabel: 'Buy Now',
		primaryBtnColor: '#ffffff',
		primaryBtnBackgroundColor: '#ED5A62',
		primaryBtnRadius: 10,
	},
	keywords: [
		__( 'Product Review' ),
		__( 'Review Box' ),
	],
	attributes, 
	edit,
	save,
} );
