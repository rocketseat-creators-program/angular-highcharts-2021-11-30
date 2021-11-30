import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ToastrService } from 'ngx-toastr';
import { SnackService } from '../snack.service';

import { TypedSnack, Snack } from '../snack';

import { toTypedSnacks } from '../snack.utils';

@Component({
  selector: 'app-snack-list',
  templateUrl: './snack-list.component.html',
  styleUrls: ['./snack-list.component.css']
})
export class SnackListComponent implements OnInit {

  typedSnacks: TypedSnack[] = [];

  constructor(
    private router: Router,
    private toastr: ToastrService,
    private snackService: SnackService
  ) { }

  ngOnInit(): void {
    this.loadSnacks();
  }

  onEditClick(snack: Snack) {
    this.router.navigate(['/snacks', snack.id]);
  }

  onDeleteClick(snack: Snack) {
    this.snackService.deleteById(snack.id!).subscribe(() => {
      this.loadSnacks();
      this.toastr.success(`${snack.name} removed successfully!`, "Information");
    });
  }

  private loadSnacks() {
    this.snackService.findAll().subscribe(response => {
      this.typedSnacks = toTypedSnacks(response);
    });
  }

}
