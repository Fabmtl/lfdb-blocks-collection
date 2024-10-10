import { __ } from "@wordpress/i18n";

import {
	InnerBlocks,
	useBlockProps,
	InspectorControls,
} from "@wordpress/block-editor";

import { Panel, PanelBody, PanelRow, TextControl } from "@wordpress/components";

import "./editor.scss";

const MY_TEMPLATE = [["core/group", {}, []]];

export default function Edit(props) {
	const { attributes, setAttributes } = props;

	const blockProps = useBlockProps({
		"id" : "lfdb-section-menu-mobile"
	});

	return (
		
			<div {...blockProps}>
				<InnerBlocks template={MY_TEMPLATE} />
			</div>
		
	);
}
