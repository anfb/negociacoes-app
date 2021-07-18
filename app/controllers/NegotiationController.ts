import { Negotiation } from "../models/Negotiation.js";
import { NegotiationRepository } from "../models/NegotiationRepository.js";

export class NegotiationController
{
    private inputDate :HTMLInputElement;
    private inputAmount :HTMLInputElement;
    private inputCashValue :HTMLInputElement;
    private negotiationList = new NegotiationRepository();

    constructor()
    {
        this.inputDate = document.querySelector('#date');
        this.inputAmount = document.querySelector('#amount');
        this.inputCashValue = document.querySelector('cashvalue');
    }

    public add(): void
    {
        const negotiation = this.createNegotiation();
        this.negotiationList.addNegotiation(negotiation);

        console.log(this.negotiationList.getNegotiations());

    }

    private createNegotiation(): Negotiation
    {
        const exp = /-/g;
        const date = new Date(this.inputDate.value);
        const amout = parseInt(this.inputAmount.value);
        const cashValue = parseFloat(this.inputCashValue.value);

        return new Negotiation(date, amout, cashValue);
    }

    private cleanForm() :void
    {
        this.inputDate.value = '';
        this.inputAmount.value = '';
        this.inputCashValue.value = '';

        this.inputDate.focus();
    }

}