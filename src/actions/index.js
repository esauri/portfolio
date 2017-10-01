import {
  TOGGLE_MOBILE,
  TOGGLE_POPUP_MENU,
  TOGGLE_DARK_THEME,
  TOGGLE_DROPDOWN_MENU,
  TOGGLE_BACK_TO_TOP_BUTTON,
} from './../constants';


/**
 * toggleBackToTopButton - Action for toggling between showing or hiding
 * back to top button
 *
 * @param {boolean} visible
 */
export function toggleBackToTopButton(visible) {
  return {
    type: TOGGLE_BACK_TO_TOP_BUTTON,
    payload: visible,
  };
}

/**
 * toggleMobile - Action for toggling between mobile mode
 *
 * @param {boolean} mobile
 */
export function toggleMobile(mobile) {
  return {
    type: TOGGLE_MOBILE,
    payload: mobile,
  };
}

/**
 * togglePopupMenu - Action for toggling the popup menu open or closed
 *
 * @param {boolean} open
 */
export function togglePopupMenu(open) {
  return {
    type: TOGGLE_POPUP_MENU,
    payload: open,
  };
}

/**
 * toggleDropdownMenu - Action for showing or hiding the dropdown menu
 *
 * @param {boolean} visible
 */
export function toggleDropdownMenu(visible) {
  return {
    type: TOGGLE_DROPDOWN_MENU,
    payload: visible,
  };
}

/**
 * toggleDarkTheme - Action for toggling between light and dark theme
 *
 * @param {boolean} dark
 */
export function toggleDarkTheme(dark) {
  return {
    type: TOGGLE_DARK_THEME,
    payload: dark,
  };
}