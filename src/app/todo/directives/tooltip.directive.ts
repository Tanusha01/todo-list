import { Directive, ElementRef, HostListener, Input } from "@angular/core";

@Directive({
  selector: "[tooltip]"
})
export class TooltipDirective {
  @Input() tooltip: string = 'This is tooltip';

  private popup: HTMLElement;
  private timer: NodeJS.Timeout;

  constructor(private el: ElementRef) {
  }

  @HostListener('mouseover')
  onMouseover(): void {
    this.timer = setTimeout(() => {
      const rect = this.el.nativeElement.getBoundingClientRect();
      const top = rect.y + rect.height;
      const left = rect.x + rect.width;

      this.createTooltipElement(left, top);
    }, 1500)
  }

  @HostListener('mouseout')
  onMouseout(): void {
    if (this.timer) {
      clearTimeout(this.timer);
    }
    if (this.popup) {
      this.popup.remove();
    }
  }

  private createTooltipElement(left: number, top: number): void {
    this.popup = document.createElement('div');
    this.popup.innerText = this.tooltip;
    this.popup.classList.add('tooltip');
    this.popup.style.top = `${top}px`;
    this.popup.style.left = `${left}px`;

    document.body.appendChild(this.popup);
  }
}
