import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-files',
  templateUrl: './files.component.html',
  styleUrls: ['./files.component.css'],
})
export class FilesComponent implements OnInit {
  UserFiles: any = [];
  constructor(private service: SharedService) {}

  ngOnInit(): void {
    this.getFiles();
  }

  getFiles() {
    this.service.getAllFiles().subscribe((data) => {
      this.UserFiles = data;
    });
  }
}
