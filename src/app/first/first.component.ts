import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {
Total = "total value"
firstnumber:number| undefined;
secoundnumber:number | undefined;
  constructor() { }

  ngOnInit(): void {
  }
  Calc(){
    if(this.firstnumber && this.secoundnumber)
    this.Total = (this.firstnumber + this.secoundnumber).toString();
  }

}
