/**
 * Block Name: Single Product
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
 * Register: Single Product
 */
registerBlockType( 'mstg/products-builder', {
	title: __( 'Products List Builder' ),
	description: __( 'Display Affiliate Products in Grid View' ),
	icon: {
		src: 'screenoptions',
		foreground: '#a32a46'
	},
	category: 'mustenberg-blocks',
	example: {
		dcols: 1,
		tcols: 1,
		mcols: 1,
		nameColor: '#000000',
		titleColor: '#000000',
		titleFont: 'Montserrat',
		nameFont: 'Montserrat',
		titleDeskSize: 18,
		titleTabSize: 16,
		titleMobSize: 14,
		nameDeskSize: 20,
		nameTabSize: 28,
		nameMobSize: 16,
		reviewBtnColor: '#ffffff',
		reviewBtnBg: '#335AB9',
		affiliateBtnColor: '#ffffff',
		affiliateBtnBg: '#335AB9',
	},
	keywords: [
		__( 'Product' ),
	],
	attributes, 
	edit,
	save,
} );
