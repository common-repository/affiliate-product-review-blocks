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
registerBlockType( 'mstg/comparison-table', {
	title: __( 'Comparison Table' ),
	description: __( 'Show products comparison in table view' ),
	icon: {
		src: 'editor-table',
		foreground: '#a32a46'
	},
	example: {
		attributes: {
			title: 'Treadmill',
		}
	},
	category: 'mustenberg-blocks',
	attributes, 
	edit,
	save,
} );
