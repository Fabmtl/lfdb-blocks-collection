import { registerBlockType } from '@wordpress/blocks';

import './style.scss';
import Icons from "../../common/icons";
/**
 * Internal dependencies
 */
import Edit from './edit';
import save from './save';
import metadata from './block.json';

registerBlockType( metadata.name, {
	/**
	 * @see ./edit.js
	 */
	icon: Icons.playmobile,
	edit: Edit,

	/**
	 * @see ./save.js
	 */
	save,
} );
