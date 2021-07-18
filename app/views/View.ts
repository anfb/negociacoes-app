export abstract class View<T>
{
    protected elementview :HTMLElement;

    constructor(elementSelector :string)
    {
        this.elementview = document.querySelector(elementSelector);
    }

    protected abstract template(elementModel : T) :string;

    public updateView(elementModel: T) :void
    {
        const template = this.template(elementModel);
   
        //innerHTML used to update the div negotiationView
        this.elementview.innerHTML = template;
    }
}