import { Component, OnInit } from '@angular/core';
import {Room, Bulb, Home, Ambiance} from '../room';
import {RoomService} from '../room.service';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.css']
})
export class RoomsComponent implements OnInit {

  constructor(private roomService: RoomService) { }

  home: Home;
  interval;

  ngOnInit(): void {
    this.roomService.getHome()
        .subscribe(home => this.home = home);
    this.interval = setInterval(() => {
        this.roomService.refreshHome();
    }, 1000);

  }

  trackByFn(index: any, item: any): number {
   return index;
  }

  OneBulbIsOn(room: Room): boolean {
    let result = room.bulbs.some(b => b.state);
    return result;
  }

  IsSelectedAmbiance(room: Room, ambiance: Ambiance): boolean {
    return ambiance.id == room.ambiance_active;
  }

  ComputeAverageBulbsDimmer(room: Room): number {
    return room.bulbs.map(b => b.dimmer).reduce((a, b) => a + b) / room.bulbs.length;
  }

  generateValidRoomIdentifier(room: Room): string {
    return room.name.replace(' ', '');
  }

  switchOffBulb(room: Room, bulb: Bulb): void {
    console.log('switch off bulb ' + bulb.name);
    this.roomService.switchOffBulb(room, bulb);
  }

  switchOnBulb(room: Room, bulb: Bulb): void {
    console.log('switch on bulb ' + bulb.name);
    this.roomService.switchOnBulb(room, bulb);
  }

  setDimmerBulb(room: Room, bulb: Bulb, event: any): void {
    const value: number = event.target.value;
    console.log('set dimmer for bulb ' + bulb.name + ' ' + value);
    this.roomService.setDimmerBulb(room, bulb, value);
  }

  switchOffRoom(room: Room): void {
    console.log('switch off room ' + room.name);
    this.roomService.switchOffRoom(room);
  }

  switchOnRoom(room: Room): void {
    console.log('switch on room ' + room.name);
    this.roomService.switchOnRoom(room);
  }

  setDimmerRoom(room: Room, event: any): void {
    const value: number = event.target.value;
    console.log('set dimmer for room ' + room.name + ' ' + value);
    this.roomService.setDimmerRoom(room, value);
  }

  selectAmbianceRoom(room: Room, ambiance: Ambiance): void {
    console.log('set ambiance for room ' + room.name + ' ' + ambiance.name);
    this.roomService.selectAmbianceRoom(room, ambiance);
  }

}

