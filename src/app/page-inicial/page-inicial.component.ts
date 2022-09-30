import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
@Component({
  selector: 'app-page-inicial',
  templateUrl: './page-inicial.component.html',
  styleUrls: ['./page-inicial.component.css']
})
export class PageInicialComponent implements OnInit {

  constructor(private dialog:MatDialog) { }

  ngOnInit(): void {
  }
}
