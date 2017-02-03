import { Component, Output, EventEmitter } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'app-searchbuttons',
    templateUrl: './searchbuttons.component.html',
    styleUrls: []
})
export class SearchButtonsComponent {

  @Output() search = new EventEmitter<any>();
  @Output() newRegister = new EventEmitter<any>();

  onSearch() {
    this.search.emit();
  }

  onNewRegister() {
    this.newRegister.emit();
  }

}
