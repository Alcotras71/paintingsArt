import modals from './modules/modals';
import sliders from './modules/sliders';
import forms from './modules/forms';
import mask from './modules/mask';

window.addEventListener('DOMContentLoaded', () => {
	'use strict';

	modals();
	sliders('.main-slider-item', 'vertical');
	sliders('.feedback-slider-item','', '.main-prev-btn', '.main-next-btn');
	forms();
	mask('[name="phone"]');
});