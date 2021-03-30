import { DataService } from './../services/data.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-project',
  templateUrl: './add-project.component.html',
  styleUrls: ['./add-project.component.scss'],
})
export class AddProjectComponent implements OnInit {
  form: any;
  constructor(private fb: FormBuilder, private dataService: DataService) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      description: ['', Validators.required],
    });
  }
  onAddDatas() {
    this.dataService.addProject(this.form.get('description').value);
  }
}
