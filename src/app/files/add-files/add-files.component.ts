import { Component, OnInit, Input } from '@angular/core';
import { SharedService } from '../../shared.service';

@Component({
  selector: 'app-add-files',
  templateUrl: './add-files.component.html',
  styleUrls: ['./add-files.component.css'],
})
export class AddFilesComponent implements OnInit {
  @Input() UserFiles: any;
  loading: boolean = false; // Flag variable
  file: any = null; // Variable to store file

  constructor(private service: SharedService) {}

  ngOnInit(): void {}

  onUpload() {
    this.loading = !this.loading;
    this.service.uploadFile(this.file).subscribe((event: any) => {
      if (typeof event === 'object') {
        this.UserFiles.push(event);
        this.loading = false;
        this.file = null;
      }
    });
  }

  onChange(event: any) {
    this.file = event.target.files[0];
  }

  clearFile() {
    this.file = null;
  }
}
