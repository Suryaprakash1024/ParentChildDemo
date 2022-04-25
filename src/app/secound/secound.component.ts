import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-secound',
  templateUrl: './secound.component.html',
  styleUrls: ['./secound.component.css']
})
export class SecoundComponent implements OnInit {
  // @Input() sum = 'Calculate to see results';
  constructor() { }
  sum = "total value"

  ngOnInit(): void {
  }
  addTotal(newTotal: string) {
    this.sum = newTotal;
    console.log(newTotal)
  }
}
