import { Component, OnInit } from "@angular/core";
import { CartService } from "../cart.service";
import { HttpClient } from "@angular/common/http";
import { FormBuilder } from "@angular/forms";
@Component({
  selector: "app-cart",
  templateUrl: "./cart.component.html",
  styleUrls: ["./cart.component.css"]
})
export class CartComponent {
  constructor(
    private cartService: CartService,
    private formBuilder: FormBuilder
  ) {}
  checkoutForm = this.formBuilder.group({
    name: "",
    address: ""
  });
  items = this.cartService.getItems();
  onSubmit(): void {
    this.cartService.clearCart();
    console.warn("Your order has been submitted", this.checkoutForm.value);
    this.checkoutForm.reset();
  }
}
