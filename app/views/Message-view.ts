export class MessageView
{
    private elementView :HTMLElement
    constructor(elementSelector :string)
    {
        this.elementView = document.querySelector(elementSelector);
    }

    private template(messageElement :string) :string
    {
        return `
            <p class="alert alert-info">${messageElement}</p>
        `;
    }

    public updateView(messageElement :string) :void
    {
        const template = this.template(messageElement);
        this.elementView.innerHTML = template;
    }
}