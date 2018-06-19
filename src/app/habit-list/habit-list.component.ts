import { Component, OnInit } from '@angular/core';
import * as _ from 'lodash';

@Component({
  selector: 'habit-list',
  templateUrl: './habit-list.component.html',
  styleUrls: ['./habit-list.component.css']
})
export class HabitListComponent implements OnInit {

  habits = []
  settingsMode = false

  constructor() {
    this.habits = [
      { name: 'Journal', complete: false },
      { name: 'Meditate', complete: true },
      { name: 'Electrolytes', complete: true }
    ]
  }

  ngOnInit() {
    console.log('the first one is: ' + _.first(['reya', 'jack'])
  }

  trashHabit(habit) {
    this.habits = _.without(this.habits, habit)
  }

  toggleHabit(habit) {
  }

  toggleSettings() {
    this.settingsMode = !this.settingsMode
  }


}
