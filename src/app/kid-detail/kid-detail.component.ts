import { Component, OnInit, Input } from '@angular/core';
import { Kid } from '../kid';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { KidService }  from '../kid.service';

@Component({
  selector: 'app-kid-detail',
  templateUrl: './kid-detail.component.html',
  styleUrls: ['./kid-detail.component.css']
})
export class KidDetailComponent implements OnInit {
  @Input() kid: Kid;

  constructor(
    private route: ActivatedRoute,
    private kidService: KidService,
    private location: Location
  ) { }

  ngOnInit() {
    this.getKid();
  }

  getKid(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.kidService.getKid(id)
      .subscribe(kid => this.kid = kid);
  }

  goBack(): void {
    this.location.back();
  }

}
