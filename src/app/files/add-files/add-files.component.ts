import { Component, OnInit } from '@angular/core';
import { SharedService } from '../../shared.service';

@Component({
  selector: 'app-add-files',
  templateUrl: './add-files.component.html',
  styleUrls: ['./add-files.component.css'],
})
export class AddFilesComponent implements OnInit {
  shortLink: string = '';
  loading: boolean = false; // Flag variable
  file: any = null; // Variable to store file

  constructor(private service: SharedService) {}

  ngOnInit(): void {}

  onUpload() {
    this.loading = !this.loading;
    console.log(this.file);
    this.service.uploadFile(this.file).subscribe((event: any) => {
      if (typeof event === 'object') {
        // Short link via api response
        this.shortLink = event.link;

        this.loading = false; // Flag variable
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
