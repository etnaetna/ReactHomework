import { Component, OnInit } from '@angular/core';
import { ContentProviderService } from './../content-provider.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private contentServ: ContentProviderService) { }

  ngOnInit() {
  }

  setFilter(userInput: any): void {
    this.contentServ.setFilter(userInput);
  }

}
