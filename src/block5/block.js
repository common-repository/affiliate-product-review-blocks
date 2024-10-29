/**
 * Block Name: Props and Cons Block
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
 * Register: Product Props & Cons.
 */
registerBlockType( 'mstg/props-cons', {
	title: __( 'Props Cons' ),
	description: __( 'Show Product Props and Cons' ),
	icon: {
		src: 'editor-ul',
		foreground: '#a32a46'
	},
	category: 'mustenberg-blocks',
	parent: [ 'mstg/full-product-review', 'mstg/product-reivew' ],
	keywords: [
		__( 'Product Props' ),
		__( 'Product Cons' ),
	],
	attributes, 
	edit,
	save,
} );
