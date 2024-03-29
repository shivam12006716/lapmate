import { App } from '@capacitor/app';

// Listen for the hardware back button on Android
App.addListener('backButton', handleBackButton);

// Function to handle the back button event
function handleBackButton(event) {
  // Get the current URL and split it into an array
  const urlSegments = window.location.pathname.split('/');

  // Check if the current URL is not the root path
  if (urlSegments.length > 2) {
    // Navigate to the previous page using the browser's history API
    window.history.back();
    // Prevent the default behavior (exiting the app)
    event.preventDefault();
  } else {
    // If on the root path, exit the app
    App.exitApp();
  }
}

// Clean up the event listener when the component is unmounted
export const removeBackButtonListener = () => {
  App.removeListener('backButton', handleBackButton);
};