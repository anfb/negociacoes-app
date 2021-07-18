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
}