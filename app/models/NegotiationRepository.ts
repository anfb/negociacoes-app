import {Negotiation} from "./Negotiation.js"

export class NegotiationRepository
{
    private negotiationList: Negotiation [] = [];

    public addNegotiation(negotiation:Negotiation): void
    {
        this.negotiationList.push(negotiation);
    }

    public getNegotiations(): readonly Negotiation[]
    {
        return this.negotiationList;
    }
}