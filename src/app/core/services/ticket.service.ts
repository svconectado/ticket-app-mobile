import { Injectable } from '@angular/core';
import * as io from 'socket.io-client';
import { Ticket } from '@core/models/ticket.model';
import { HttpClient } from '@angular/common/http';
import { MessageService } from './message.service';
import { environment } from '@environments/environment';
import { ResourceService } from './resource.service';

@Injectable({
  providedIn: 'root'
})
export class TicketService extends ResourceService<Ticket> {
  socketUrl = environment.socketUrl;
  userName = 'nickname';
  roomName = 'room2';
  socket: any;

  constructor(
    protected http: HttpClient,
    protected messageService: MessageService
  ) {
    super(environment.endpoints.tipoEmpresa, http, messageService);
  }

  setupSocketConnection() {
    this.socket = io(this.socketUrl, {
      query: { // Parámetros a enviar en la petición de conexión
        username: this.userName,
        room: this.roomName
      }
    });
    // Cambiando de nombre de usuario
    // this.socket.emit('setUsername', this.userName);
    // Cambiando de sala
    // this.socket.emit('switchRoom', this.roomName);
    // Evento cuando cambia de sala
    // tslint:disable-next-line: variable-name
    this.socket.on('updateRooms', (rooms: any, current_room: any) => {
      console.log('updateRooms', rooms, current_room);
    });
    // Evento cuando actualiza estado cualquier socket en la sala
    this.socket.on('updateRoom', (from: any, message: any) => {
      console.log('updateRoom', from, message);
    });
    // Evento recibe mensaje generico
    this.socket.on('updateServer', (args: any) => {
      console.log('updateServer', args);
    });
    // Evento recibe mensaje especifico
    this.socket.on('updateCola', (args: any) => {
      console.log('updateCola', args);
    });
    // Evento recibe mensaje especifico
    this.socket.on('updateTicket', (args: any) => {
      console.log('updateTicket', args);
    });
  }

}
