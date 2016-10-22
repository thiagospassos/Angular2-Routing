import { Component, OnInit } from '@angular/core';

@Component({
    template: `<h4>hello from admin</h4><router-outlet></router-outlet>`
})
export class AdminComponent implements OnInit {
    constructor() { }

    ngOnInit() { }
}