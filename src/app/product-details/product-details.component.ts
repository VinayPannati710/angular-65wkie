import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { CartService } from "../cart.service";
import { products } from "../products";
@Component({
  selector: "app-product-details",
  templateUrl: "./product-details.component.html",
  styleUrls: ["./product-details.component.css"]
})
export class ProductDetailsComponent implements OnInit {
  product;
  constructor(
    private route: ActivatedRoute,
    private cartService: CartService
  ) {}

  ngOnInit() {
    const routeparams = this.route.snapshot.paramMap;
    const productIdFromRoute = Number(routeparams.get("productId"));
    this.product = products.find(product => product.id === productIdFromRoute);
  }
  addToCart(product) {
    this.cartService.addToCart(product);
    window.alert("Your product has been added to cart");
  }
}
