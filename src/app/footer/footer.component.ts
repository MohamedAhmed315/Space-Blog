import { Component, OnInit } from '@angular/core';
// import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})

export class FooterComponent implements OnInit {

  title: String = 'Space Blog';
  constructor() { }

  ngOnInit(): void {
  }

  // newsletterName = new FormControl('');
}

