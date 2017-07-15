import {
  TOGGLE_MOBILE,
  UPDATE_LOCATION,
  TOGGLE_POPUP_MENU,
  TOGGLE_DROPDOWN_MENU,
} from './../constants';

export function updateLocation(location) {
  return {
    type: UPDATE_LOCATION,
    payload: location,
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
