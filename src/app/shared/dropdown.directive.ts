import { Directive, HostListener, ElementRef, Input, Renderer2, HostBinding } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
// export class DropdownDirective {

//   constructor(private elRef: ElementRef, private renderer: Renderer2) { }

//   @HostListener('click') click(eventData: Event) {
//     let hasOpenClass = this.elRef.nativeElement.classList.value.includes('open');
//     const action = hasOpenClass ? 'removeClass' : 'addClass';
//     this.renderer[action](this.elRef.nativeElement, 'open');
//   }
// }

// export class DropdownDirective {

//   isOpen = false;
//   constructor(private elRef: ElementRef, private renderer: Renderer2) { }

//   @HostListener('click') click(eventData: Event) {
//     this.isOpen = !this.isOpen;
//     const action = this.isOpen ? 'removeClass' : 'addClass';
//     this.renderer[action](this.elRef.nativeElement, 'open');
//   }
// }

// export class DropdownDirective {

//   @HostBinding('class.open') isOpen = false;
//   @HostListener('click') click(eventData: Event) {
//     this.isOpen = !this.isOpen;
//   }
// }

export class DropdownDirective {

  @HostBinding('class.open') isOpen = false;
  @HostListener('document:click', ['$event'])
  clickout(event) {
    if (this.eRef.nativeElement.contains(event.target)) {
      this.isOpen = !this.isOpen;
    } else {
      this.isOpen = false;
    }
  }
  constructor(private eRef: ElementRef) {
    this.isOpen = false;
  }
}

