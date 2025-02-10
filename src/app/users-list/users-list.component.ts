import { Component } from '@angular/core';
import { UsersDataService } from '../users-data.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-users-list',
  imports: [CommonModule, RouterModule],
  templateUrl: './users-list.component.html',
  styleUrl: './users-list.component.css'
})
export class UsersListComponent {

  users: any[] = []
  constructor(private uds: UsersDataService){}

  ngOnInit(){
    this.uds.getUsers()
    .subscribe({
      next: (res:any)=>{
        // console.log(res)
        this.users = res
      }
    })
  }
}
