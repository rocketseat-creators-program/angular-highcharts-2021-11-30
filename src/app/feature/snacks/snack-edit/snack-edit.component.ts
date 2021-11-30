import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Snack } from '../snack';
import { SnackService } from '../snack.service';

@Component({
  selector: 'app-snack-edit',
  templateUrl: './snack-edit.component.html',
  styleUrls: ['./snack-edit.component.css']
})
export class SnackEditComponent implements OnInit {

  id!: number;
  snack?: Snack;

  constructor(
    private router: Router,
    private toastr: ToastrService,
    private snackService: SnackService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.params.id;
    this.searchSnack();
  }

  onSubmit() {
    if (this.isValidSnack()) {
      this.snackService.update(this.id, this.snack!).subscribe(() => {
        this.router.navigateByUrl("/snacks");
        this.toastr.success("Snack updated successfully!", "Information");
      });
    }
  }

  private searchSnack() {
    this.snackService.findById(this.id).subscribe(response => {
      this.snack = response;
    }, () => {
      this.router.navigateByUrl("/snacks");
    });
  }

  private isValidSnack() {
    let message = [];

    if (!this.snack!.name) message.push('Name is mandatory');
    if (!this.snack!.type) message.push('Type is mandatory');
    if (!this.snack!.price) message.push('Price is mandatory');

    if (message.length) {
      this.toastr.error(message.join("<br/>"), "Information");
      return false;
    }

    return true;
  }

}
