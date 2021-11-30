import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Snack } from '../snack';
import { SnackService } from '../snack.service';

@Component({
  selector: 'app-snack-new',
  templateUrl: './snack-new.component.html',
  styleUrls: ['./snack-new.component.css']
})
export class SnackNewComponent implements OnInit {

  snack!: Snack;

  constructor(
    private router: Router,
    private toastr: ToastrService,
    private snackService: SnackService
  ) { }

  ngOnInit(): void {
    this.snack = this.newSnack();
  }

  onSubmit() {
    if (this.isValidSnack()) {
      this.snackService.save(this.snack).subscribe(() => {
        this.router.navigateByUrl("/snacks");
        this.toastr.success("Snack created successfully!", "Information");
      });
    }
  }

  private newSnack() {
    return {
      name: '',
      type: '',
      price: 0,
      description: '',
      img: ''
    }
  }

  private isValidSnack() {
    let message = [];

    if (!this.snack.name) message.push('Name is mandatory');
    if (!this.snack.type) message.push('Type is mandatory');
    if (!this.snack.price) message.push('Price is mandatory');

    if (message.length) {
      this.toastr.error(message.join("<br/>"), "Information");
      return false;
    }

    return true;
  }

}
