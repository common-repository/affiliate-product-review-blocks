/**
 * Block Name: Test Block
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
 * Register: Product Review Block.
 */
registerBlockType( 'mstg/full-product-review', {
	title: __( 'Full Product Review' ),
	description: __( 'Show the Full Product Review' ),
	icon: {
		src: 'text-page',
		foreground: '#a32a46'
	},
	example: {
		containerBorderColor: '#335AB9',
		containerBorderWidth: 2,
		title: 'Product Title',
		titleColor: '#D5343A',
		titleTag: 'h2',
		description: 'Product Description',
		descColor: '#000000',
		showPropsCons: true,
		primaryBtnLabel: 'Buy Now',
		primaryBtnColor: '#ffffff',
		primaryBtnBackgroundColor: '#ED5A62',
		showprimaryBtn: true,
		primaryBtnRadius: 10,
		showSecondaryBtn: true,
		secondaryBtnLabel: 'See Review',
		secondaryBtnColor: '#ffffff',
		secondaryBtnBackgroundColor: '#335AB9',

	},
	category: 'mustenberg-blocks',
	keywords: [
		__( 'Product Review' ),
		__( 'Product Block' ),
	],
	attributes, 
	edit,
	save,
} );
