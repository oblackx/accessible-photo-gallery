// Accessible Photo Gallery - JavaScript

/**
 * upDate function - Updates the main display with the hovered/focused image
 * @param {HTMLElement} previewPic - The thumbnail image element that triggered the event
 */
function upDate(previewPic) {
    // Log to verify the event triggers when hovering over or focusing an image
    console.log("Event triggered: upDate");

    // Log the alt text and src of the preview image
    console.log("Alt text:", previewPic.alt);
    console.log("Source URL:", previewPic.src);

    // Get the main display element
    const mainImage = document.getElementById("image");

    // Update the text content to the alt text of the preview image
    mainImage.textContent = previewPic.alt;

    // Update the background image to the preview image's source
    mainImage.style.backgroundImage = `url('${previewPic.src}')`;
}

/**
 * undo function - Resets the main display to its initial state
 */
function undo() {
    // Get the main display element
    const mainImage = document.getElementById("image");

    // Reset the background image to empty
    mainImage.style.backgroundImage = "url('')";

    // Reset the text content to the initial message
    mainImage.textContent = "Hover over an image below to display here.";
}

/**
 * addTabFocus function - Adds tabindex="0" to all gallery images for keyboard accessibility
 * Called on page load via onload handler
 */
function addTabFocus() {
    // Log a message to verify the event fires when the page loads
    console.log("Page loaded: addTabFocus() executed");

    // Select all gallery images (thumbnails with class "preview")
    const galleryImages = document.querySelectorAll(".preview");

    // Write a for loop that iterates through each gallery image/item
    for (let i = 0; i < galleryImages.length; i++) {
        // Automatically add tabindex="0" to each item so keyboard users can focus every image in order
        galleryImages[i].setAttribute("tabindex", "0");

        // Log each image being processed (for debugging/verification)
        console.log(`Added tabindex="0" to image ${i + 1}: ${galleryImages[i].alt}`);
    }

    // Log completion
    console.log(`Total images with tabindex added: ${galleryImages.length}`);
}