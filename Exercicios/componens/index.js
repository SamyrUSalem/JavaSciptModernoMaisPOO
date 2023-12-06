import { Component } from "./Component.js";
import { Input } from "./input.js";
import { Label } from "./Label.js";
import { Form } from "./Form.js";

const T = new Component("h1", "body", { textContent: "Ola!" })

console.log(T)
T.render()

T.tag = "h2"

T.build().render()

const form = new Form("body")
const label = new Label("Digite:", form, { htmlFor: "idInput" })
const input = new Input(form, { id: "idInput", name: "name" })

form.render()
label.render()
form.addChildren(input)

form.addChildren(
    new Component("br"),
    new Component("br"),
    new Label("Escolha:", form, { htmlFor: "algo" }),
    new Input(form, { id: "algo", name: "alguma" })

)