import { __ } from "@wordpress/i18n";
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
	TextControl,
} from "@wordpress/components";
import "./editor.scss";

const loupe = (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 13.49 13.49"
		className="icon"
	>
		<path d="M9.641 8.484h-.609l-.216-.208a5.021 5.021 0 1 0-.54.54l.208.216v.609l3.856 3.849 1.149-1.149zm-4.628 0a3.471 3.471 0 1 1 3.471-3.471 3.466 3.466 0 0 1-3.471 3.471z"></path>
	</svg>
);

export default function Edit(props) {
	const { attributes, setAttributes } = props;
	const {
		borderRadius,
		searchPadding,
		borderSize,
		iconeSize,
		iconColor,
		timeInterval,
		couleurFond,
		couleurTexte,
		searchPlaceholderText,
	} = attributes;

	const styles = {
		"--lfdb-icon-color": iconColor,
		"--lfdb-search-padding": searchPadding,
		"--lfdb-serch-border-size": borderSize,
		"--lfdb-search-borduer-radius": borderRadius,
		"--lfdb-search-icone-size": iconeSize,
		"--lfdb-search-block-couleur-fond": couleurFond,
		"--lfdb-search-block-couleur-texte": couleurTexte,
	};
	const blockProps = useBlockProps({
		id: "lfdb-search-block",
		style: styles,
	});

	const onChangeIconColor = (val) => {
		setAttributes({ iconColor: val });
	};
	const onChangeCouleurFond = (val) => {
		setAttributes({ couleurFond: val });
	};
	const onChangeCouleurTexte = (val) => {
		setAttributes({ couleurTexte: val });
	};

	const onChangeSearchPadding = (val) => {
		setAttributes({ searchPadding: `${val}px` });
	};

	const onChangeBorderSize = (val) => {
		setAttributes({ borderSize: `${val}px` });
	};
	const onChangeBorderRadius = (val) => {
		setAttributes({ borderRadius: `${val}px` });
	};

	const onChangeIconeSize = (val) => {
		setAttributes({ iconeSize: `${val}px` });
	};
	const onChangesPlaceholderText = (val) => {
		setAttributes({ searchPlaceholderText: val });
	};
	return (
		<>
			<InspectorControls>
				<PanelColorSettings
					title={__("Couleur de l'icône")}
					colorSettings={[
						{
							value: iconColor,
							onChange: onChangeIconColor,
							label: __("Couleur de l'icône"),
						},
					]}
				/>
				<PanelColorSettings
					title={__("Couleur de fond")}
					colorSettings={[
						{
							value: couleurFond,
							onChange: onChangeCouleurFond,
							label: __("Couleur de fond"),
						},
					]}
				/>
				<PanelColorSettings
					title={__("Couleur de texte")}
					colorSettings={[
						{
							value: couleurTexte,
							onChange: onChangeCouleurTexte,
							label: __("Couleur de texte"),
						},
					]}
				/>
				<Panel header="My Panel">
					<PanelBody title="Padding l'icône" initialOpen={true}>
						<PanelRow>
							<NumberControl
								label="Padding"
								isShiftStepEnabled={true}
								onChange={onChangeSearchPadding}
								shiftStep={10}
								value={parseFloat(searchPadding)}
							/>
						</PanelRow>
					</PanelBody>
					<PanelBody title="Épaisseur de la bordure" initialOpen={true}>
						<PanelRow>
							<NumberControl
								label="Bordure"
								isShiftStepEnabled={true}
								onChange={onChangeBorderSize}
								shiftStep={10}
								value={parseFloat(borderSize)}
							/>
						</PanelRow>
					</PanelBody>
					<PanelBody title="Arrondi de la bordure" initialOpen={true}>
						<PanelRow>
							<NumberControl
								label="Arrondi"
								isShiftStepEnabled={true}
								onChange={onChangeBorderRadius}
								shiftStep={10}
								value={parseFloat(borderRadius)}
							/>
						</PanelRow>
					</PanelBody>
					<PanelBody title="Taille de l'icône" initialOpen={true}>
						<PanelRow>
							<NumberControl
								label="Taille"
								isShiftStepEnabled={true}
								onChange={onChangeIconeSize}
								shiftStep={10}
								max={50}
								min={10}
								value={parseFloat(iconeSize)}
							/>
						</PanelRow>
					</PanelBody>
					<PanelBody title="Placeholder" initialOpen={true}>
						<PanelRow>
							<TextControl
								__nextHasNoMarginBottom
								label="Placeholder"
								value={searchPlaceholderText}
								onChange={(value) => onChangesPlaceholderText(value)}
							/>
						</PanelRow>
					</PanelBody>
				</Panel>
			</InspectorControls>
			<div {...blockProps}>
				<form action="" method="get" id="slide-search">
					<span className="screen-reader-text">Chercher</span>
					<input
						type="text"
						id="s"
						name="s"
						placeholder={searchPlaceholderText}
					/>
					<button
						type="button"
						id="slide-search-send"
						className="slide-search-button"
					>
						{loupe}
					</button>
				</form>
			</div>
		</>
	);
}
