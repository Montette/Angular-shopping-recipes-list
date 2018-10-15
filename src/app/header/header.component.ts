import { Component, Output, EventEmitter } from '@angular/core';

@Component({
selector: 'app-header',
templateUrl: './header.component.html'
})
export class HeaderComponent {
    @Output() showComponentHandler = new EventEmitter<string>();
    onClick(event) {
        console.log(event.srcElement.textContent);
        this.showComponentHandler.emit(event.srcElement.textContent);
    }
}