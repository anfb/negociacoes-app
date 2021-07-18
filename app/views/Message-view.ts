import { View } from "./View.js";

export class MessageView extends View<string>
{
    public template(messageElement :string) :string
    {
        return `
            <p class="alert alert-info">${messageElement}</p>
        `;
    }

    public updateView(messageElement :string) :void
    {
        const template = this.template(messageElement);
        this.elementview.innerHTML = template;
    }
}