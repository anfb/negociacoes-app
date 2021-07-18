import { NegotiationController } from "./controllers/NegotiationController.js";

const negotiationController = new NegotiationController();
const formIndex = document.querySelector('.form');

formIndex.addEventListener('submit',
                            event => {
                                event.preventDefault();
                                negotiationController.add();
                            });