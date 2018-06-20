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
  }

  trashHabit(habit) {
    this.habits = _.without(this.habits, habit)
  }

  toggleHabit(habit) {
    habit.complete = !habit.complete
  }

  toggleSettings() {
    this.settingsMode = !this.settingsMode
  }


}
