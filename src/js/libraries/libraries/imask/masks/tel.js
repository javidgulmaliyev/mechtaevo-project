import imask from "imask";

/** @type {HTMLInputElement} */
const layoutTelInput = document.getElementById("form-layout-tel");

const telMask = imask(layoutTelInput, {
  mask: "+{7}(000)000-00-00",
});
