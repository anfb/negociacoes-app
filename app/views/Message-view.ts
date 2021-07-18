import { View } from "./View.js";

export class MessageView extends View<string>
{

    public updateView(messageElement :string) :void
    {
        const template = this.template(messageElement);
        this.elementview.innerHTML = template;
    }

    protected template(messageElement :string) :string
    {
        return `
            <p class="alert alert-info">${messageElement}</p>
        `;
    }
    
}