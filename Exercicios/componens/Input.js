import { Component } from "./Component.js";

export class Input extends Component {
    constructor(parent, options) {
        super("input", parent, options) //Não declarei o paramentro tag, pq essa classe é do input entáo ja inseri um valor para a tag
    }
}