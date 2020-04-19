import { Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { environment } from '@environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TitleService {
  baseTitle = environment.baseTitlePage;
  oldTitle: string;

  constructor(private titleService: Title) { }

  set title(value: string) {
    this.titleService.setTitle(`${value} - ${this.baseTitle}`);
  }

  get title(): string {
    return this.titleService.getTitle();
  }

  resetTitle(title: string) {
    this.title = title;
  }
}
