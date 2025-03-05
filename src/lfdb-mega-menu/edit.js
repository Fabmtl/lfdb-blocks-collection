/**
 * WordPress dependencies
 */
import { __, sprintf } from "@wordpress/i18n";
import {
	InspectorControls,
	RichText,
	useBlockProps,
} from "@wordpress/block-editor";
import { useEntityRecords } from "@wordpress/core-data";
// import { useSelect } from '@wordpress/data';
// import { createInterpolateElement } from '@wordpress/element';
import {
	ComboboxControl,
	PanelBody,
	Notice,
	TextControl,
	TextareaControl,
	// ToggleControl,
	__experimentalHStack as HStack, // eslint-disable-line
	__experimentalToggleGroupControl as ToggleGroupControl, // eslint-disable-line
	__experimentalToggleGroupControlOptionIcon as ToggleGroupControlOptionIcon, // eslint-disable-line
} from "@wordpress/components";

import stringToSlug from "../../common/string-to-slug";

import "./edit.scss";

export default function Edit({ attributes, setAttributes }) {
	const { label, menuSlug, title, description, pageParentId } = attributes;

	const sectionsMegaMenu = wp.data.select("core/block-editor").getBlocks();

	const { hasResolved, records } = useEntityRecords("postType", "page", {
		per_page: 100,
	});

	const hasMenus = sectionsMegaMenu.filter(
		(x) => x.name === "lfdb/section-mega-menu",
	);

	const listePages = [];
	const menuOptions = [];

	// console.log("sectionsMegaMenu",sectionsMegaMenu);

	if (hasMenus) {
		menuOptions.push({ value: 0, label: "Choisir une section" });
		hasMenus.forEach((b) => {
			if (b) {
				menuOptions.push({
					value: stringToSlug(b.attributes.blockNameId),
					label: b.attributes.blockNameId,
				});
			}
		});
	} else {
		menuOptions.push({ value: 0, label: "Loading... " });
	}

	if (hasResolved) {
		listePages.push({ label: __("Liste des page"), valiue: 0 });
		records.map((page) => {
			listePages.push({ label: page.title.rendered, value: page.id });
		});
	}

	console.log("listePages", listePages);

	// Notice for when no menus have been created.
	const noMenusNotice = (
		<Notice status="warning" isDismissible={false}>
			{__("Aucune section de mega menu n'est associé à votre onglet", "lfdb")}
		</Notice>
	);

	// Modify block props.
	const blockProps = useBlockProps({
		className: "wp-block-navigation-item wp-block-lfdb-mega-menu__toggle",
	});

	return (
		<>
			<InspectorControls group="settings">
				<PanelBody
					className="lfdb-mega-menu__settings-panel"
					title={__("Settings", "lfdb")}
					initialOpen={true}
				>
					<TextControl
						label={__("Label", "lfdb")}
						type="text"
						value={label}
						onChange={(value) => setAttributes({ label: value })}
						autoComplete="off"
					/>
					<ComboboxControl
						label={__("Menu Template", "lfdb")}
						value={menuSlug}
						options={menuOptions}
						onChange={(value) => setAttributes({ menuSlug: value })}
					/>
					{!hasMenus && noMenusNotice}

					<TextareaControl
						className="settings-panel__description"
						label={__("Description", "lfdb")}
						type="text"
						value={description || ""}
						onChange={(descriptionValue) => {
							setAttributes({ description: descriptionValue });
						}}
						help={__(
							"The description will be displayed in the menu if the current theme supports it.",
							"lfdb",
						)}
						autoComplete="off"
					/>
					<TextControl
						label={__("Title", "lfdb")}
						type="text"
						value={title || ""}
						onChange={(titleValue) => {
							setAttributes({ title: titleValue });
						}}
						help={__(
							"Additional information to help clarify the purpose of the link.",
							"lfdb",
						)}
						autoComplete="off"
					/>
					<ComboboxControl
						label={__("Page parent", "lfdb")}
						value={pageParentId}
						options={listePages}
						onChange={(value) => setAttributes({ pageParentId: value })}
					/>
				</PanelBody>
			</InspectorControls>
			<div {...blockProps}>
				<button className="wp-block-navigation-item__content wp-block-lfdb-mega-menu__toggle">
					<RichText
						identifier="label"
						className="wp-block-navigation-item__label"
						value={label}
						onChange={(labelValue) =>
							setAttributes({
								label: labelValue,
							})
						}
						aria-label={__("Mega menu link text", "lfdb")}
						placeholder={__("Add label…", "lfdb")}
						allowedFormats={[
							"core/bold",
							"core/italic",
							"core/image",
							"core/strikethrough",
						]}
					/>
					<span className="wp-block-lfdb-mega-menu__toggle-icon">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="12"
							height="12"
							viewBox="0 0 12 12"
							fill="none"
							aria-hidden="true"
							focusable="false"
						>
							<path d="M1.50002 4L6.00002 8L10.5 4" strokeWidth="1.5"></path>
						</svg>
					</span>
					{description && (
						<span className="wp-block-navigation-item__description">
							{description}
						</span>
					)}
				</button>
			</div>
		</>
	);
}
