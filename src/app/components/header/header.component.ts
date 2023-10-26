import { DOCUMENT, Location } from '@angular/common';
import { Component, HostListener, Inject, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(
    private renderer: Renderer2,
    public location: Location,
    @Inject(DOCUMENT) document
  ) { }
  @HostListener("window:scroll", ["$event"])
  onWindowScroll(e) {
    if (window.pageYOffset > 100) {
      var element = document.getElementById("navbar-top");
      if (element) {
        element.classList.remove("navbar-transparent");
        element.classList.add("bg-dark");
      }
    } else {
      var element = document.getElementById("navbar-top");
      if (element) {
        element.classList.add("navbar-transparent");
        element.classList.remove("bg-dark");
      }
    }
  }
  ngOnInit() {
    this.onWindowScroll(event);
  }
}
