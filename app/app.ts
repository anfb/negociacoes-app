import { NegotiationController } from "./controllers/NegotiationController.js";

const negotiationController = new NegotiationController();
const formIndex = document.querySelector('.form');
if (formIndex) {
    formIndex.addEventListener('submit',
                            event => {
                                event.preventDefault();
                                negotiationController.add();
                            });
} else {
    throw Error ('It is not possible start the application. Varify if the form exists.');
}
