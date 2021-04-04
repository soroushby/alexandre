import { map } from 'rxjs/operators';
import { Component, OnInit } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { ProjectData } from '../interfaces/project-data';
import { DataService } from './../services/data.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss'],
})
export class WelcomeComponent implements OnInit {
  constructor(private dataservice: DataService) {}

  datas: any = [];
  ngOnInit(): void {
    this.datas = this.dataservice.gotData.subscribe();
  }
}
