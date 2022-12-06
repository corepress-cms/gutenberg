/**
 * WordPress dependencies
 */
const { test, expect } = require( '@wordpress/e2e-test-utils-playwright' );

test.describe( 'Navigate regions', () => {
	test.beforeEach( async ( { admin } ) => {
		await admin.createNewPost();
	} );

	test( 'should navigate the editor regions and show the outline focus style', async ( {
		editor,
		page,
		pageUtils,
	} ) => {
		// Add a paragraph block.
		await editor.insertBlock( {
			name: 'core/paragraph',
			attributes: { content: 'Dummy text' },
		} );

		// Make sure the Settings sidebar is opened.
		await editor.openDocumentSettingsSidebar();

		// Navigate to the top bar region.
		await page.keyboard.press( 'Control+`' );

		await expect(
			page.locator( '.interface-interface-skeleton' )
		).toHaveClass( /is-focusing-regions/ );

		const editorTopBar = page.locator(
			'role=region[name="Editor top bar"i]'
		);

		async function createMaskElement( locator, offset = 10 ) {
			const boxData = await locator.boundingBox();
			boxData.offset = offset;

			await page.evaluate( ( maskData ) => {
				const maskElement = document.createElement( 'div' );

				document.body.appendChild( maskElement );

				maskElement.id = 'x-gu-mask';
				maskElement.style.position = 'absolute';
				maskElement.style.backgroundColor = '#f0f';

				maskElement.style.top = maskData.y + maskData.offset + 'px';
				maskElement.style.left = maskData.x + maskData.offset + 'px';
				maskElement.style.width =
					maskData.width - maskData.offset * 2 + 'px';
				maskElement.style.height =
					maskData.height - maskData.offset * 2 + 'px';
				maskElement.style.display = 'block';
				maskElement.style.boxSizing = 'border-box';
			}, boxData );
		}

		async function removeMaskElement() {
			await page.evaluate( () =>
				document.getElementById( 'x-gu-mask' ).remove()
			);
		}

		createMaskElement( editorTopBar, 6 );

		await expect( editorTopBar ).toBeFocused();
		await expect( editorTopBar ).toHaveCSS( 'outline-style', 'solid' );
		await expect( editorTopBar ).toHaveCSS( 'outline-width', '4px' );
		await expect( editorTopBar ).toHaveScreenshot();
		removeMaskElement();

		// Navigate to the content region.
		await page.keyboard.press( 'Control+`' );

		const editorContent = page.locator(
			'role=region[name="Editor content"i]'
		);

		createMaskElement( editorContent, 6 );

		await expect( editorContent ).toBeFocused();
		await expect( editorContent ).toHaveCSS( 'outline-style', 'solid' );
		await expect( editorContent ).toHaveCSS( 'outline-width', '4px' );
		await expect( editorContent ).toHaveScreenshot();
		removeMaskElement();

		// Navigate to the settings region when it's opened.
		await page.keyboard.press( 'Control+`' );

		const editorSettings = page.locator(
			'role=region[name="Editor settings"i]'
		);

		createMaskElement( editorSettings, 6 );

		await expect( editorSettings ).toBeFocused();
		await expect( editorSettings ).toHaveCSS( 'outline-style', 'solid' );
		await expect( editorSettings ).toHaveCSS( 'outline-width', '4px' );
		await expect( editorSettings ).toHaveScreenshot();
		removeMaskElement();

		// Navigate to the publish region.
		await page.keyboard.press( 'Control+`' );

		const editorPublish = page.locator(
			'role=region[name="Editor publish"i]'
		);
		const editorPublishPanel = page.locator(
			'role=region[name="Editor publish"i] >> .edit-post-layout__toggle-publish-panel'
		);

		createMaskElement( editorPublishPanel, 6 );

		await expect( editorPublish ).toBeFocused();
		await expect( editorPublishPanel ).toHaveCSS(
			'outline-style',
			'solid'
		);
		await expect( editorPublishPanel ).toHaveCSS( 'outline-width', '4px' );
		await expect( editorPublishPanel ).toHaveScreenshot();
		removeMaskElement();

		// Navigate to the footer region.
		await page.keyboard.press( 'Control+`' );

		const editorFooter = page.locator(
			'role=region[name="Editor footer"i]'
		);

		createMaskElement( editorFooter, 4 );

		await expect( editorFooter ).toBeFocused();
		await expect( editorFooter ).toHaveCSS( 'outline-style', 'solid' );
		await expect( editorFooter ).toHaveCSS( 'outline-width', '4px' );
		await expect( editorFooter ).toHaveScreenshot();
		removeMaskElement();

		// Navigate to the Document overview region.
		// Open the Document overview.
		await page.locator( 'role=button[name="Document Overview"i]' ).click();

		await pageUtils.pressKeyTimes( 'Control+`', 2 );

		const editorDocumentOverview = page.locator(
			'role=region[name="Document Overview"i]'
		);

		createMaskElement( editorDocumentOverview, 6 );

		await expect( editorDocumentOverview ).toBeFocused();
		await expect( editorDocumentOverview ).toHaveCSS(
			'outline-style',
			'solid'
		);
		await expect( editorDocumentOverview ).toHaveCSS(
			'outline-width',
			'4px'
		);
		await expect( editorDocumentOverview ).toHaveScreenshot();
		removeMaskElement();

		// Close the Document overview.
		await page.locator( 'role=button[name="Document Overview"i]' ).click();

		// Close the settings region.
		await page
			.locator(
				'role=region[name="Editor top bar"i] >> role=button[name="Settings"i]'
			)
			.click();

		// Navigate to the settings region whene it's closed.
		await pageUtils.pressKeyTimes( 'Control+`', 3 );

		const editorSettingsPanel = page.locator(
			'role=region[name="Editor settings"i] >> .edit-post-layout__toggle-sidebar-panel'
		);

		createMaskElement( editorSettingsPanel, 6 );

		await expect( editorSettings ).toBeFocused();
		await expect( editorSettingsPanel ).toHaveCSS(
			'outline-style',
			'solid'
		);
		await expect( editorSettingsPanel ).toHaveCSS( 'outline-width', '4px' );

		await expect( editorSettingsPanel ).toHaveScreenshot();
		removeMaskElement();

		// Make sure to leave the Settings sidebar opened.
		await editor.openDocumentSettingsSidebar();
	} );
} );