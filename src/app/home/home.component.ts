import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";
import { FirebaseService } from "../firebase.service";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
  form = new FormGroup({
    table: new FormControl(""),
    name: new FormControl(""),
    price: new FormControl(""),
    number: new FormControl(""),
    maihate: new FormControl("")
  });

  constructor(private firebaseService: FirebaseService) {}

  ngOnInit() {}
  onDish(name: string) {
    this.firebaseService.addFood(
      name,
      this.form.value.price,
      this.form.value.number,
      this.form.value.maihate,
      this.form.value.table
    );
  }
}
