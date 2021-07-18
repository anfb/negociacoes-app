export class View<T>
{
    protected elementview :HTMLElement;

    constructor(elementSelector :string)
    {
        this.elementview = document.querySelector(elementSelector);
    }

    public template(elementModel : T) :string
    {
        throw Error("Need implement method.");
    }

    public updateView(elementModel: T) :void
    {
        const template = this.template(elementModel);
   
        //innerHTML used to update the div negotiationView
        this.elementview.innerHTML = template;

    }
}