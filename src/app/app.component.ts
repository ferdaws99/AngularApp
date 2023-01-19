import { Component ,OnInit} from '@angular/core';
import { MyGal } from './Models/my-gal.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
mygals!:MyGal[];
/*si on utilise des variable statique sans tableau
mygal! :MyGal;
mygal2! :MyGal;
mygal3! :MyGal;*/
ngOnInit(){
  this.mygals=[{
    title: 'happy',
    description:'moment de joie',
   imageUrl:'https://naitreetgrandir.com/documentsng/images/imagesprincipalepetite/joie-enfants-emotion-cultiver-isabelle-filliozat.jpg',
    createDate: new Date(),
    like:0,
    location:'sous pluit'
  },
  {
    title: 'sad',
    description:'moment de tristesse',
   imageUrl:'https://media-cldnry.s-nbcnews.com/image/upload/t_fit-760w,f_auto,q_auto:best/newscms/2019_42/1495563/sadness-inside-out-today-main-tease-191018.jpg',
    createDate: new Date(),
    like:0,
    location:'Tunisie'
  },
  {
  title: 'sick',
  description:'moment de maladie',
 imageUrl:'https://img.freepik.com/premium-vector/little-boy-sick_73842-228.jpg',
  createDate: new Date(),
  like:0
}

  ]

  /*si on utilise des variable statique sans tableau
this.mygal={
  title: 'happy',
  description:'moment de joie',
 imageUrl:'https://naitreetgrandir.com/documentsng/images/imagesprincipalepetite/joie-enfants-emotion-cultiver-isabelle-filliozat.jpg',
  createDate: new Date(),
  like:0,
  location:'sous pluit'
};

this.mygal2={
  title: 'sad',
  description:'moment de tristesse',
 imageUrl:'https://media-cldnry.s-nbcnews.com/image/upload/t_fit-760w,f_auto,q_auto:best/newscms/2019_42/1495563/sadness-inside-out-today-main-tease-191018.jpg',
  createDate: new Date(),
  like:0,
  location:'Tunisie'
};

this.mygal3={
  title: 'sick',
  description:'moment de maladie',
 imageUrl:'https://img.freepik.com/premium-vector/little-boy-sick_73842-228.jpg',
  createDate: new Date(),
  like:0
};*/

}
}
