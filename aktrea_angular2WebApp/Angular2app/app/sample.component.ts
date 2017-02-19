import { Component } from '@angular/core'

@Component({
    selector: 'sampleapp',

    template: `
<style>
h1
{
color:green;
}
</style>
<h1>{{myname}}</h1>`
})

export class sampleComponent
{
    myname: any;
    constructor()
    {
        this.myname = "nazar";
    }
}