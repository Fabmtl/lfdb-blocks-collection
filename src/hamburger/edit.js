import { __ } from "@wordpress/i18n";
import { useState } from "react";
import {
	InspectorControls,
	useBlockProps,
	PanelColorSettings,
} from "@wordpress/block-editor";

import {
	__experimentalNumberControl as NumberControl,
	Panel,
	PanelBody,
	PanelRow,
	FormToggle,
	Notice,
} from "@wordpress/components";

import "./editor.scss";

export default function Edit(props) {
	const { attributes, setAttributes } = props;
	const {
		paddindX,
		paddindY,
		layerWidth,
		layerHeight,
		layerSpacing,
		opacity,
		hasBorder,
		borderSize,
		borderColor,
		hasBorderRadius,
		borderRadiusSize,
		burgerMenuColor,
		fondCouleur,
	} = attributes;

	const styles = {
		"--icone-burger-color": burgerMenuColor,
		"--paddingX": paddindX,
		"--paddingY": paddindY,
		"--icone-burger-border-size": borderSize,
		"--icone-layerWidth": layerWidth,
		"--icone-layerHeight": layerHeight,
		"--icone-layerSpacing": layerSpacing,
		"--icone-layerSpacing": layerSpacing,
		"--icone-hasBorderRadius": hasBorderRadius,
		"--icone-borderRadiusSize": borderRadiusSize,
		"--icone-borderSize": borderSize,
		"--icone-couleur-de-fond": fondCouleur,
	};

	const blockList = wp.data.select("core/block-editor").getBlocks();
	var hasSectionMobile = blockList.find(
		(item) => {
			return item.name === "lfdb/menu-mobile"
		}
	);
	
	// Notice for when no menus have been created.
	const noSectionNotice = (
		<Notice status="warning" isDismissible={false}>
			{__(
				'Aucune Section pour le menu mobile n\'a été trouvé dans la page. Veuillez ajouter un bloc "Zone menu mobile"',
				"lfdb",
			)}
		</Notice>
	);

	// if( hasSectionMobile ){
	// 	const stringToSlugBlockNameId = stringToSlug(hasSectionMobile.attributes.blockNameId)
	// }

	const blockProps = useBlockProps({
		className: "hamburger hamburger--slider open-close-menu-mobile",
		style: styles,
	});

	const onChangeBurgerMenuColor = (val) => {
		setAttributes({ burgerMenuColor: val });
	};

	const onChangeFondCouleur = (val) => {
		setAttributes({ fondCouleur: val });
	};

	const onChangePaddingX = (val) => {
		setAttributes({ paddindX: `${val}px` });
	};
	const onChangePaddingY = (val) => {
		setAttributes({ paddindY: `${val}px` });
	};
	const onChangeLayerWidth = (val) => {
		setAttributes({ layerWidth: `${val}px` });
	};
	const onChangeLayerHeight = (val) => {
		setAttributes({ layerHeight: `${val}px` });
	};
	const onChangeLayerSpacing = (val) => {
		setAttributes({ layerSpacing: `${val}px` });
	};
	const onChangeBorderRadiusSize = (val) => {
		setAttributes({ borderRadiusSize: `${val}px` });
	};
	const onChangeBorderSize = (val) => {
		setAttributes({ borderSize: `${val}px` });
		// setAttributes({ borderSize: `${val}px` });
	};

	return (
		<>
			<InspectorControls>
				{ !hasSectionMobile && noSectionNotice }
				<Panel>
					<PanelBody title="Couleurs" initialOpen={false}>
						<PanelRow>
							<PanelColorSettings
								title={__("Couleurs")}
								colorSettings={[
									{
										value: burgerMenuColor,
										onChange: onChangeBurgerMenuColor,
										label: __("Couleur de l'icône"),
									},
									{
										value: fondCouleur,
										onChange: onChangeFondCouleur,
										label: __("Couleur du fond"),
									},
								]}
							/>
						</PanelRow>
					</PanelBody>
					<PanelBody title="Padding x y de l'icône" initialOpen={false}>
						<PanelRow>
							<NumberControl
								label="Padding x"
								isShiftStepEnabled={true}
								onChange={onChangePaddingX}
								shiftStep={10}
								value={parseFloat(paddindX)}
							/>
						</PanelRow>
						<PanelRow>
							<NumberControl
								label="Padding y"
								isShiftStepEnabled={true}
								onChange={onChangePaddingY}
								shiftStep={10}
								value={parseFloat(paddindY)}
							/>
						</PanelRow>
					</PanelBody>
					<PanelBody title="Largeur et hauteur elements" initialOpen={false}>
						<PanelRow>
							<NumberControl
								label="Largeur x"
								isShiftStepEnabled={true}
								onChange={onChangeLayerWidth}
								shiftStep={10}
								value={parseFloat(layerWidth)}
							/>
						</PanelRow>
						<PanelRow>
							<NumberControl
								label="Hauteur y"
								isShiftStepEnabled={true}
								onChange={onChangeLayerHeight}
								shiftStep={10}
								value={parseFloat(layerHeight)}
							/>
						</PanelRow>
						<PanelRow>
							<NumberControl
								label="Espace entre les elements"
								isShiftStepEnabled={true}
								onChange={onChangeLayerSpacing}
								shiftStep={10}
								value={parseFloat(layerSpacing)}
							/>
						</PanelRow>
					</PanelBody>
					<PanelBody title="Bordure" initialOpen={false}>
						<PanelRow>
							<NumberControl
								label="Radius"
								isShiftStepEnabled={true}
								onChange={onChangeBorderRadiusSize}
								shiftStep={10}
								value={parseFloat(borderRadiusSize)}
							/>
						</PanelRow>
						<PanelRow className="edit-icone-border-size">
							<NumberControl
								label="Épaisseur"
								isShiftStepEnabled={true}
								onChange={onChangeBorderSize}
								shiftStep={10}
								value={parseFloat(borderSize)}
								help={__("0 = pas de bordure", "lfdb")}
							/>
						</PanelRow>
					</PanelBody>
				</Panel>
			</InspectorControls>
			<button {...blockProps} type="button">
				<span className="hamburger-box">
					<span className="hamburger-inner"></span>
				</span>
			</button>
		</>
	);
}
