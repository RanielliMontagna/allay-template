export interface ScreenHeaderProps {
  /**
   * The title to display in the header.
   * @example "Home Screen"
   * @type {string}
   */
  title: string

  /**
   * Optional callback function to handle back navigation.
   * This function will be called when the back button is pressed.
   * @returns {void}
   * @example () => console.log('Back pressed')
   */
  handleBack?: () => void
}
