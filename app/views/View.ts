export abstract class View<T>
{
    protected elementview :HTMLElement;
    private escape = false;

    constructor(elementSelector :string, escape?: boolean)
    {
        this.elementview = document.querySelector(elementSelector);

        if (escape) {
            this.escape = escape;
        }
    }

    public updateView(elementModel: T) :void
    {
        let template = this.template(elementModel);

        if (this.escape) {
            template = template.replace(/<script>[\s\S]*?<\/script>/, '');
        }
   
        //innerHTML used to update the div negotiationView
        this.elementview.innerHTML = template;
    }

    protected abstract template(elementModel : T) :string;
}