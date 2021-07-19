import { DaysOfWeek } from "../enums/DaysOfWeek.js";
import { Negotiation } from "../models/Negotiation.js";
import { NegotiationRepository } from "../models/NegotiationRepository.js";
import { MessageView } from "../views/Message-view.js";
import { NegotiationsView } from "../views/Negotiations-view.js";

export class NegotiationController
{
    private inputDate :HTMLInputElement;
    private inputAmount :HTMLInputElement;
    private inputCashValue :HTMLInputElement;
    private negotiationList = new NegotiationRepository();
    private negotiationView = new NegotiationsView("#negotiationView");
    private messageView = new MessageView("#mensagemView");

    constructor()
    {
        this.inputDate = document.querySelector('#date');
        this.inputAmount = document.querySelector('#amount');
        this.inputCashValue = document.querySelector('#cashvalue');
    }

    public add(): void
    {
        const negotiation = this.createNegotiation();
        if (this.IsDayOfWeek(negotiation.date)) {
            this.negotiationList.addNegotiation(negotiation);
            this.negotiationView.updateView(this.negotiationList);
    
            this.messageView.updateView("Negotiation has been added!");
            this.cleanForm();
        } else {
            this.messageView.updateView("Weekend is not valid!");
        }

        console.log(this.negotiationList.getNegotiations());

    }

    private IsDayOfWeek(date :Date) :boolean
    {
        return date.getDay() > DaysOfWeek.SUNDAY && date.getDay() < DaysOfWeek.SATURDAY;
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