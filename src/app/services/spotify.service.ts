import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor( private http: HttpClient) { 
    console.log('Spotify servide listo!');

  }

  getNewReleases() {
    
    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQATehj40iwoxjnSHB2VevN-RUnq7GYkwWhnp5j2RXQtM2-9zvfj0S5Q24xAQg7VAbybVKzndk7c3EwKxO'
    });

    return this.http.get('https://api.spotify.com/v1/browse/new-releases', {headers})
    .pipe( map( data => {
      return data['albums'].items;
    }));
      
  }

  getArtistas( termino:string ) {
    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQATehj40iwoxjnSHB2VevN-RUnq7GYkwWhnp5j2RXQtM2-9zvfj0S5Q24xAQg7VAbybVKzndk7c3EwKxOE'
    });

    return this.http.get(`https://api.spotify.com/v1/search?q=${termino}&type=artist`, {headers}).
    pipe(map(data => {
      return data['artists'].items;
    }));
  }

  getArtista( id:string ) {
    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQATehj40iwoxjnSHB2VevN-RUnq7GYkwWhnp5j2RXQtM2-9zvfj0S5Q24xAQg7VAbybVKzndk7c3EwKxOE'
    });

    return this.http.get(`https://api.spotify.com/v1/artists/${id}`, {headers});
    /* pipe(map(data => {
      return data['artists'].items;
    })); */
  }

  getopTracks( id:string ) {
    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQATehj40iwoxjnSHB2VevN-RUnq7GYkwWhnp5j2RXQtM2-9zvfj0S5Q24xAQg7VAbybVKzndk7c3EwKxOE'
    });

    return this.http.get(`https://api.spotify.com/v1/artists/${id}/top-tracks?country=us`, {headers})
      .pipe(map(data => data['tracks']));
     
  }

  

}
