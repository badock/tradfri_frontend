import {Injectable} from '@angular/core';
import {Room, Bulb, Home, Ambiance} from './room';
import {Observable, of} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RoomService {

  constructor(private httpClient: HttpClient) {
  }

  home: Home = {
    rooms: []
  };

  ikeaBackendUrl: string = 'http://localhost:5000';

  getHome(): Observable<Home> {
    return of(this.home);
  }

  refreshHome(): boolean {
    const ikeaBackendRoomsURL = this.ikeaBackendUrl + '/description.json';

    this.httpClient.get(ikeaBackendRoomsURL)
      .subscribe(
        (response: Room[]) => {
          this.home.rooms = response;
        },
        (error) => {
          console.log('Error ! : ' + error);
        }
      );
    return true;
  }

  switchOffBulb(room: Room, bulb: Bulb): void {
    console.log('[RoomService] switch off bulb ' + bulb.name);
    const ikeaBackendRoomsURL = this.ikeaBackendUrl + '/bulb/off/' + room.id + '/' + bulb.id;

    this.httpClient.get(ikeaBackendRoomsURL)
      .subscribe(
        (response: Room[]) => {
          console.log('OK');
        },
        (error) => {
          console.log('Error ! : ' + error);
        }
      );
  }

  switchOnBulb(room: Room, bulb: Bulb): void {
    console.log('[RoomService] switch on bulb ' + bulb.name);
    const ikeaBackendRoomsURL = this.ikeaBackendUrl + '/bulb/on/' + room.id + '/' + bulb.id;

    this.httpClient.get(ikeaBackendRoomsURL)
      .subscribe(
        (response: Room[]) => {
          console.log('OK');
        },
        (error) => {
          console.log('Error ! : ' + error);
        }
      );
  }

  setDimmerBulb(room: Room, bulb: Bulb, value: number): void {
    console.log('[RoomService] set dimmer for bulb ' + bulb.name + ' ' + value);
    const ikeaBackendRoomsURL = this.ikeaBackendUrl + '/bulb/dimmer/' + room.id + '/' + bulb.id + '/' + value;

    this.httpClient.get(ikeaBackendRoomsURL)
      .subscribe(
        (response: Room[]) => {
          console.log('OK');
        },
        (error) => {
          console.log('Error ! : ' + error);
        }
      );
  }

  switchOffRoom(room: Room): void {
    console.log('[RoomService] switch off room ' + room.name);
    const ikeaBackendRoomsURL = this.ikeaBackendUrl + '/room/off/' + room.id;

    this.httpClient.get(ikeaBackendRoomsURL)
      .subscribe(
        (response: Room[]) => {
          console.log('OK');
        },
        (error) => {
          console.log('Error ! : ' + error);
        }
      );
  }

  switchOnRoom(room: Room): void {
    console.log('[RoomService] switch on room ' + room.name);
    const ikeaBackendRoomsURL = this.ikeaBackendUrl + '/room/on/' + room.id;

    this.httpClient.get(ikeaBackendRoomsURL)
      .subscribe(
        (response: Room[]) => {
          console.log('OK');
        },
        (error) => {
          console.log('Error ! : ' + error);
        }
      );
  }

  setDimmerRoom(room: Room, value: number): void {
    console.log('[RoomService] set dimmer for room ' + room.name + ' ' + value);
    const ikeaBackendRoomsURL = this.ikeaBackendUrl + '/room/dimmer/' + room.id + '/' + value;

    this.httpClient.get(ikeaBackendRoomsURL)
      .subscribe(
        (response: Room[]) => {
          console.log('OK');
        },
        (error) => {
          console.log('Error ! : ' + error);
        }
      );
  }

  selectAmbianceRoom(room: Room, ambiance: Ambiance): void {
    console.log('[RoomService] set ambiance for room ' + room.name + ' ' + ambiance.name);
    const ikeaBackendRoomsURL = this.ikeaBackendUrl + '/room/ambiance/' + room.id + '/' + ambiance.id;

    this.httpClient.get(ikeaBackendRoomsURL)
      .subscribe(
        (response: Room[]) => {
          console.log('OK');
        },
        (error) => {
          console.log('Error ! : ' + error);
        }
      );
  }
}
