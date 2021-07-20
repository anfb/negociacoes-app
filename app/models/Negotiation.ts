export class Negotiation{

    constructor(
        private _date:Date, 
        public readonly amount:number,
        public readonly cashValue:number)
        {
            //do nothing.
        }

        public get date():Date
        {
            const date = new Date(this._date.getTime());
            return this._date;
        }

        public get volume():number
        {
            return this.amount * this.cashValue;
        }

        public static createNegotiation(dataString :string, amountString :string, valueString :string) :Negotiation
        {
            const exp = /-/g;
            const date = new Date(dataString.replace(exp, ','));
            const amout = parseInt(amountString);
            const cashValue = parseFloat(valueString);

            return new Negotiation(date, amout, cashValue);
        }
}