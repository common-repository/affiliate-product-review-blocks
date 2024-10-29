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
 * Register: Test Block.
 */
registerBlockType( 'mstg/product-row', {
	title: __( 'Product Row' ),
	description: __( 'Acts as a child block for Products Comparision Table' ),
	icon: {
		src: 'minus',
		foreground: '#a32a46'
	},
	parent: ['mstg/comparison-table'],
	category: 'mustenberg-blocks',
	attributes, 
	edit,
	save,
} );
