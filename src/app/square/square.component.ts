import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-square',
  template: `
  <button style="width:100%;height:100%;font-size:42pt">{{ value }}</button>
  `,
  styles: [
  ]
})
export class SquareComponent  {

  @Input() value: 'X' | 'O'

}
