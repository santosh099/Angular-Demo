import { Component } from '@angular/core';
import { ImagesService } from './services/images.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Demo';
  hits: any;
  showImageInfo: boolean;
  largeImageURL: any;
  userId: any;
  userName: any;
  filteredHits: any;
  itemList = "Cats"; 
  text: string;
  views: number;
  downloads: number;
  favorites: number;
  likes: number;
  comments: number;

  constructor(private imageService: ImagesService) {
  }

  ngOnInit() {
    this.showImageInfo = false;
    this.itemList = "Cats";
    this.getImages();
  }


  getImages() {
    this.imageService.getImages(this.itemList).subscribe((res:any) =>  { 
      this.text = "";
      this.hits = res.hits;
      this.filteredHits = this.hits;
      this.showImageInfo = false;
    });
  }

  getImageInfo(item: any) {
    this.showImageInfo = true;
    this.largeImageURL = item.largeImageURL;
    this.userId = item.user_id;
    this.userName = item.user;
    this.likes = item.likes;
    this.views = item.views;
    this.comments = item.comments;
    this.downloads = item.downloads;
    this.favorites = item.favorites;
  }

  closeImageInfo() {
    this.showImageInfo = false;
  }

  FilterImagesOnSearch(event:any) {
    if(event.target.value) {
      this.filteredHits = this.hits.filter((hit: any) => {
        var names: string[];
        names = hit.tags.split(',');
        for(let i = 0; i < names.length; i++) {
          if(names[i].includes(event.target.value)) {
            return hit;
          }
        }
      })
    } else {
      this.filteredHits = this.hits;
    }
  }

  modifyItemList(index: number) {
    if(index == 1) {
      this.itemList = "Cats";
    } else if(index == 2) {
      this.itemList = "Dogs";
    } else {
      this.itemList = "Yellow Flowers"
    }
    this.getImages();
  }

  closeImage() {}

}
