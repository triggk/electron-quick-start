import * as $ from 'jquery';

export default class Greeter {
    constructor(private name: string){}
    public greet(): void {
        $('h1').text("Hello " + this.name);
    }
    public withdraw(): void {
        $('h1').text("Farewell " + this.name);
    }
}