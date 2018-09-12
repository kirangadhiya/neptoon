import { Component, OnInit } from '@angular/core';
import { Categories } from '../../shared';
import { UploadEvent, UploadFile } from 'ngx-file-drop';
@Component({
  selector: 'app-feedback-form',
  templateUrl: './feedback-form.component.html',
  styleUrls: ['./feedback-form.component.scss']
})
export class FeedbackFormComponent implements OnInit {

  contactDetail: any = {};
  feedBackDetailModel: any = {};
  public categotyLists: Array<any> = [];
  public feedBackTimes: Array<any> = [];
  public imageFiles: any = [];
  public audioFiles: any = [];

  constructor() { }

  ngOnInit() {
    this.categotyLists = Categories;
    this.feedBackTimes = [1, 2, 3, 4, 5];
    this.audioFiles = [1, 2, 3, 4, 5];
  }

  ngAfterViewInit() {
    let element: HTMLButtonElement = document.querySelector('#contactDetail-header h5 button');
    element.style.width = "100%";
  }

  onSelectFiles($event) {
    if ($event.target.files && $event.target.files.length > 0) {
      for (let index = 0; index < $event.target.files.length; index++) {
        this.imageFiles.push($event.target.files[index]);
      }
    }
  }

  selectFile(imageFilesInput) {
    let element: HTMLElement = document.getElementById(imageFilesInput) as HTMLElement;
    element.click();
  }

  public dropped(event: UploadEvent) {
    for (const droppedFile of event.files) {
      // Is it a file?
      if (droppedFile.fileEntry.isFile) {
        const fileEntry: any = droppedFile.fileEntry;
        fileEntry.file((file: File) => {
          if (['jpg', 'jpeg', 'png', 'bmp', 'gif'].indexOf(file.name.split('.').pop().toLowerCase()) > -1)
            this.imageFiles.push(file);
        });
      }
    }
  }
}
