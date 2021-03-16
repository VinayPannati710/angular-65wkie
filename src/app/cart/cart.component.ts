import { Component, OnInit } from "@angular/core";
import { CartService } from "../cart.service";
import { HttpClient } from "@angular/common/http";
@Component({
  selector: "app-cart",
  templateUrl: "./cart.component.html",
  styleUrls: ["./cart.component.css"]
})
export class CartComponent {
  constructor(private cartService: CartService) {}
  items = this.cartService.getItems();
}
