import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {
Total = "total value"
firstnumber:number| undefined;
secoundnumber:number | undefined;
@Output() totalvariable = new EventEmitter<string>();
  constructor() { }

  ngOnInit(): void {
  }
  Calc(){
    if(this.firstnumber && this.secoundnumber){
      
    console.log("submitted");
    this.Total = (this.firstnumber + this.secoundnumber).toString();
    this.totalvariable.emit(this.Total);
    }
  }

}
