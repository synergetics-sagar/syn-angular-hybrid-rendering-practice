import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsersDataService } from '../users-data.service';

@Component({
  selector: 'app-users-profile',
  imports: [],
  templateUrl: './users-profile.component.html',
  styleUrl: './users-profile.component.css'
})
export class UsersProfileComponent {

  userId : number = 0
  userData: any = {}
  constructor(private uds: UsersDataService ,private ar: ActivatedRoute){}

  ngOnInit(){
    this.userId = this.ar.snapshot.params['id']
    this.uds.getUserProfile(this.userId)
    .subscribe({
      next: (res:any)=>this.userData = res
    })
  }
}
