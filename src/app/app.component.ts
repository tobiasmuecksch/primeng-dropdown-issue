import { Component } from '@angular/core';

interface IEntriesPerPageDropdownOption {
  label: string;
  entriesPerPage: number;
}

interface debugOutput {
  message: string;
}

const environment = {
  defaults: {
    entriesPerPage: '20',
  },
};

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  debugOutput: debugOutput[] = [];

  entriesPerPage: number = parseInt(environment.defaults.entriesPerPage);

  dropdownOptions: IEntriesPerPageDropdownOption[] = [
    { label: '5 per page', entriesPerPage: 5 },
    { label: '10 per page', entriesPerPage: 10 },
    { label: '20 per page', entriesPerPage: 20 },
    { label: '50 per page', entriesPerPage: 50 },
  ];

  constructor() {
    this.debugOutput.push({
      message: `Initial Value is: ${this.entriesPerPage}`,
    });
  }

  onUpdateEntriesPerPage($event: any) {
    console.debug('Update Event', $event);

    this.debugOutput.push({ message: `New Value is: ${this.entriesPerPage}` });
  }
}
