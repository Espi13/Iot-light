import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private readonly httpClient: HttpClient) {}

  activate(){
    let data = {
      r: "255",
      g: "0",
      b: "0"
    }
    this.httpClient.post('http://192.168.4.1/?r=123',data)
      .subscribe(response => {
        console.log(response)
      })
  }

}
