import { Component, OnInit, Input } from '@angular/core';
import { SharedService } from '../../shared.service';

@Component({
  selector: 'app-share-files',
  templateUrl: './share-files.component.html',
  styleUrls: ['./share-files.component.css'],
})
export class ShareFilesComponent implements OnInit {
  @Input() UserFiles: any;
  fileSelector: any = [
    { name: 'Select All', checked: false },
    { name: 'CSV', checked: false },
    { name: 'Excel', checked: false },
    { name: 'PDF', checked: false },
  ];
  email: string = '';
  subject: string = '';
  cc: string = '';
  bcc: string = '';
  emailContent: string = '';

  constructor(private service: SharedService) {}

  ngOnInit(): void {}

  checkbox(name: string, type: boolean) {
    if (name == 'Select All' && type == true) {
      this.fileSelector.map((element: { checked: boolean }) => {
        element.checked = true;
      });
    } else if (name == 'Select All' && type == false) {
      this.fileSelector.map((element: { checked: boolean }) => {
        element.checked = false;
      });
    }
  }

  clearData() {
    this.fileSelector = [
      { name: 'Select All', checked: false },
      { name: 'CSV', checked: false },
      { name: 'Excel', checked: false },
      { name: 'PDF', checked: false },
    ];
    this.email = '';
    this.subject = '';
    this.cc = '';
    this.bcc = '';
    this.emailContent = '';
  }

  getSelectedFiles() {
    let filebox: any[] = [];
    this.fileSelector.map((element: { name: string; checked: boolean }) => {
      if (element.checked) {
        let extension = element.name.toLowerCase();
        this.UserFiles.map((file: any) => {
          let mainfileExt = file.filename.split('.').pop();
          if (mainfileExt == extension) {
            filebox.push(file.filename);
          }
        });
      }
    });
    return filebox;
  }

  onSubmit() {
    let files = this.getSelectedFiles();
    console.log(this.UserFiles);
    console.log(files);
    let data = {
      files,
      email: this.email,
      subject: this.subject,
      cc: this.cc,
      bcc: this.bcc,
      emailContent: this.emailContent,
    };
    this.service.addFile(data).subscribe((result) => {
      this.clearData();
    });
  }
}
