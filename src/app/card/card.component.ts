import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  loading = true;

  ngOnInit(): void {
    setInterval(()=> {
      this.loading = !this.loading;
    }, 3000);
  }
}
