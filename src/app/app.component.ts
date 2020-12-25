import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = "Angular";
    email = "abc@gmail.com";
    articleDesc = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when ";
    price = '4.30523';
    ratings = '4.9745';
    list = [
      { "id": 1, "title": "Angular" },
      { "id": 2, "title": "React" },
      { "id": 3, "title": "Vue" },
      { "id": 4, "title": "Next" }

    ];
    releaseDate = new Date(2016, 3, 1);
  
}
