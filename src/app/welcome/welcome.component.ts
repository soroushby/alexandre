import { Component, OnInit } from '@angular/core';
import { DataService } from './../services/data.service';
@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss'],
})
export class WelcomeComponent implements OnInit {
  datas: any;
  constructor(private dataservice: DataService) {}

  ngOnInit(): void {
    this.datas = this.dataservice.getData().subscribe((x) => console.log(x));
  }
}
