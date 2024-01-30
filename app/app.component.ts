import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'janapp';
 
  users=[]

  ngOnInit(){
   // alert(`hello`)

    fetch("https://reqres.in/api/users?page=1")
    .then(res => res.json())
    .then(res =>{
      console.table(res.data)

      this.users=res.data
    });
  }
  
  deleteuser(id:any){
    alert(id)
    fetch("https://reqres.in/api/users/" +id)
    .then(res =>res.json())
    .then(res =>{
    
     // alert(res)
      alert(JSON.stringify(res))              //        if we want to show all data of user in delete box
    })
  }
}
