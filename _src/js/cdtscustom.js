/*Secure application templates: Custom JavaScript
  Purpose: Keep mobile mode's menu/search buttons visually-highlighted while their associated overlays are open.
  Description: Sets an "active" class on mobile mode's menu/search buttons when their associated overlays are open. Removes the "active" class when the overlays are closed.
  Note: This functionality might be built-into WET 4.0.27 (or later)'s overlay plugin. If it is, remove this script.*/

// Only run when the page has finished loading and is ready to be manipulated.
$( document ).ready(function() {

	// Exit if basic HTML (wbdisable) mode is engaged.
	if ( wb.isDisabled ) {
		return;
	}

	// Declare all variables.
	var 
		$currentOverlay, // jQuery DOM reference to the most recently opened overlay
		$currentOverlayLink, // jQuery DOM reference to the most recently opened overlay's reference link
		$overlayLinks = wb.doc.find( '.app-list-main .overlay-lnk' ), // jQuery DOM references to the application list's overlay links
		eventTarget, // DOM reference to whichever element will gain focus
		insideOverlay, // Integer (acting as a boolean) to indicate whether focus is currently inside an overlay
		overlayIdIndex, // Index of a focusin event target's ID in the overlayIds variable
		overlayIds = $overlayLinks // Array of overlay IDs, based on the application list's link destinations
						.map(function() {
							return this.hash.substr( 1 );
						})
						.get(),
		overlayIsOpen; // Boolean to indicate whether an overlay is currently open

	// Check for when any of the document's elements gain focus.
	wb.doc.on( 'focusin', function( event ) {

		// Set a DOM reference to the element that gained focus.
		eventTarget = event.target;

		// Find out if the event target's ID exists in the overlayIds variable.
		overlayIdIndex = overlayIds.indexOf( eventTarget.id );

		// Proceed if the element that gained focus is an overlay whose ID exists in the overlayIds array.
		if ( overlayIdIndex > -1 ) {

			// Find out if the current overlay contains an "open" class.
			// Note: The "open" class is set by WET's overlay plugin when an overlay gains visibility.
			overlayIsOpen = $( eventTarget ).hasClass( 'open' );

			// Proceed if the current overlay has gained visibility.
			// Note: This check ensures that WET's overlay plugin has successfully unveiled the current overlay. Without it, issues will occur if a user attempts to open an overlay link very early during page load (prior to WET's overlay plugin being ready).
			if ( overlayIsOpen ) {

				// Set a jQuery DOM reference to the current overlay, for later use.
				$currentOverlay = $( eventTarget );

				// Set a jQuery DOM reference to the current overlay's reference link, for later use.
				$currentOverlayLink = $overlayLinks.filter( '[href="#' + eventTarget.id + '"]' );

				// Add an "active" class to the current overlay's reference link.
				$currentOverlayLink.addClass( 'active' );
			}
		}
		else {

			// Find out if focus is situated within the current overlay.
			insideOverlay = $( eventTarget ).closest( $currentOverlay ).length;

			// Proceed if focus isn't inside the current overlay and if an overlay was previously open.
			// Note: In practice, this means an overlay was open and the user focused away from it (either by clicking in the area outside it, pressing a close button or pressing their keyboard's Esc key)
			if ( !insideOverlay && $currentOverlay ) {

				// Remove the jQuery DOM reference to the current overlay.
				$currentOverlay = null;

				// Remove the "active" class from the current overlay's reference link.
				$currentOverlayLink.removeClass( 'active' );

				// Remove the jQuery DOM reference to the current overlay's reference link.
				$currentOverlayLink = null;
			}
		}
	});
});