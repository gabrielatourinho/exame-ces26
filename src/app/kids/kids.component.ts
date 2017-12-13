import { Component, OnInit } from '@angular/core';
import { Kid } from '../kid';
import { KIDS } from '../mock-kids';
import { KidService } from '../kid.service';

@Component({
  selector: 'app-kids',
  templateUrl: './kids.component.html',
  styleUrls: ['./kids.component.css']
})
export class KidsComponent implements OnInit {
  kids: Kid[];

  constructor(private kidService: KidService) { }

  ngOnInit() {
    this.getKids();
  }

  getKids(): void {
    this.kidService.getKids().subscribe(kids => this.kids = kids);
  }

}
