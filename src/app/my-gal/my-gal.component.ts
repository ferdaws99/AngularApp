import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-my-gal',
  templateUrl: './my-gal.component.html',
  styleUrls: ['./my-gal.component.scss']
})
export class MyGalComponent implements OnInit {
  title!:string;
  description!:string;
  createDate!:Date;
  like!:number;
  imageUrl!:string;
  ngOnInit(){
    this.title='happy';
    this.description='moment de joie';
    this.createDate=new Date();
    this.like=6;
    this.imageUrl='https://naitreetgrandir.com/documentsng/images/imagesprincipalepetite/joie-enfants-emotion-cultiver-isabelle-filliozat.jpg';
  }
}
