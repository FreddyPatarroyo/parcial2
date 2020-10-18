import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  integrantres:any={integrante1:'Freddy Patarroyo',integrante2:'Danny Ochoa'}

  constructor() { }

  ngOnInit(): void {
  }

}
