import { NegotiationRepository } from "../models/NegotiationRepository.js";

export class NegotiationsView
{
    private elementview :HTMLElement;

    constructor(elementSelector :string)
    {
        this.elementview = document.querySelector(elementSelector);
    }

    private template(elementNegotiation :NegotiationRepository) :string
    {
        return `
            <table class="table table-hover table-bordered">
                <thead>
                    <tr>
                        <th>DATE</th>
                        <th>AMOUNT</th>
                        <th>CASH VALUE</th>
                    </tr>
                </thead>
                <tbody>
                    ${elementNegotiation.getNegotiations().map(negotiation => {
                        return `
                            <tr>
                                <td>${negotiation.date}</td>
                                <td>${negotiation.amount}</td>
                                <td>${negotiation.cashValue}</td>
                            </tr>
                        `;
                    }).join('')};
                </tbody>
            </table>
        `;
    }

    public updateView(elementNegotiation :NegotiationRepository) :void
    {
        const template = this.template(elementNegotiation);
        console.log(template);

        //innerHTML used to update the div negotiationView
        this.elementview.innerHTML = template;

    }
}