import { Component,OnInit, Input } from '@angular/core';
import { MyGal } from '../Models/my-gal.model';

@Component({
  selector: 'app-my-gal',
  templateUrl: './my-gal.component.html',
  styleUrls: ['./my-gal.component.scss']
})
export class MyGalComponent implements OnInit {
@Input() mygal!:MyGal;
  buttonText!:string;
  ngOnInit(){
   this.buttonText='Like!!';
  }

  onLike(){
   if (this.buttonText=='Like!!') {
    this.mygal.like++;
    this.buttonText ='already Liked';
   } else {
    this.mygal.like--;
    this.buttonText='Like!!';

   }
  }

}
