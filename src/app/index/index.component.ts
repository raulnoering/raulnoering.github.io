import { Component, OnInit } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { UserService } from '../user.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  index="";

  constructor(public userService: UserService) { }
  

  ngOnInit(): void {
    this.userService.getIndex().subscribe(response => {
      this.index=response.data;
    })
   
  }

}
