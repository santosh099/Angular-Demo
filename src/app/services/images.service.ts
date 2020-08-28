import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ImagesService {

  constructor(private http: HttpClient) { } 

  getImages(item: String) {
    if(item == "Cats"){
      return this.http.get("https://pixabay.com/api/?key=16319352-2bb88398aa817f97a71677f6d&q=cats&image_type=photo");
    } else if(item == "Dogs") {
      return this.http.get("https://pixabay.com/api/?key=16319352-2bb88398aa817f97a71677f6d&q=dogs&image_type=photo");
    } else {
      return this.http.get("https://pixabay.com/api/?key=16319352-2bb88398aa817f97a71677f6d&q=yellow+flowers&image_type=photo");
    }
    
  }
}
