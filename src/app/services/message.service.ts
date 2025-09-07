import { Injectable } from '@angular/core';
import { Firestore, collection, addDoc } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor(private firestore: Firestore) { }

  async saveMessage(data: { fullName: string; email: string; message: string }) {
    const messagesRef = collection(this.firestore, 'messages');
    return await addDoc(messagesRef, data);
  }
}
