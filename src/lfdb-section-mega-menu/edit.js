import { __ } from "@wordpress/i18n";

import {
	InnerBlocks,
	useBlockProps,
	InspectorControls,
} from "@wordpress/block-editor";

import { Panel, PanelBody, PanelRow, TextControl } from "@wordpress/components";

import stringToSlug from "../../common/string-to-slug";

import "./editor.scss";

const MY_TEMPLATE = [["core/group", {}, []]];

export default function Edit(props) {
	const { attributes, setAttributes } = props;
	const {blockNameId} = attributes;
	const blockProps = useBlockProps({
		"id": stringToSlug(blockNameId) || '',
	});

	const onChangesBlockNameId = (val) => {
		setAttributes({blockNameId: val})
	}

	return (
		<>
			<InspectorControls>
				<Panel group="Settings">
					<PanelBody title="Nom de la section" initialOpen={false}>
						<PanelRow>
							<TextControl
								__nextHasNoMarginBottom
								label="Nom"
								value={blockNameId}
								onChange={(value) => onChangesBlockNameId(value)}
								help = { stringToSlug(blockNameId) }
							/>
						</PanelRow>
					</PanelBody>
				</Panel>
			</InspectorControls>
			<div {...blockProps}>
				<InnerBlocks template={MY_TEMPLATE} />
			</div>
		</>
	);
}
