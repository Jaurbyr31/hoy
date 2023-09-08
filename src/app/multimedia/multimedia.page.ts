import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-multimedia',
  templateUrl: './multimedia.page.html',
  styleUrls: ['./multimedia.page.scss'],
})
export class MultimediaPage implements OnInit {
  audio: any;
  tpo: any;
  progress: any;

  constructor(private router: Router) { }

  ngOnInit() {
  }
  irHome(){
    this.router.navigate(['./home'])
  }
  playmusic(){
    this.tpo = false;
    let audio = new Audio();
    audio.src = '../../assets/musica/wtwb.mp3';
    audio.load();
    audio.play();
  }
  pausemusic(){
    this.tpo = true;
    
    this.audio.stop();
  }

}
