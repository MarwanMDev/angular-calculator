import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'angular-calculator';

  calcValue: number = 0;
  funcT: any = 'NoFunction';

  calNumber: string = 'anyValue';

  onClickValue(val: string, type: any) {
    if (type == 'number') {
      this.onNumberClick(val);
    } else if (type == 'function') {
      this.onFunctionClick(val);
    }
  }

  onNumberClick(val: string) {
    if (this.calNumber != 'anyValue') {
      this.calNumber = this.calNumber + val;
    } else {
      this.calNumber = val;
    }

    this.calcValue = parseFloat(this.calNumber);
  }

  onFunctionClick(val: string) {
    if (this.funcT == 'NoFunction') {
    }
  }
}
