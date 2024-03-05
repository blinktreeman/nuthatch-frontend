import {Component, OnInit} from '@angular/core';
import {NgForOf} from "@angular/common";
import {Address} from "../models/address";
import {Router} from "@angular/router";

@Component({
  selector: 'app-address-list',
  standalone: true,
    imports: [
        NgForOf
    ],
  templateUrl: './address-list.component.html',
  styleUrl: './address-list.component.css'
})
export class AddressListComponent implements OnInit {

  addresses: Address[] | undefined;

  constructor(private router: Router) {
  }

  ngOnInit(): void {
  }

  createAddress(): void {
    this.router.navigate(['/create-address']);
  }

}
