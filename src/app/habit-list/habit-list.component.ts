import { Component } from '@angular/core';
import * as _ from 'lodash';

@Component({
  selector: 'habit-list',
  templateUrl: './habit-list.component.html',
  styleUrls: ['./habit-list.component.css']
})
export class HabitListComponent implements OnInit {

  habits = []
  settingsMode = false
  newHabitName = ''

  constructor() {
    this.habits = [
      { name: 'Journal', complete: false },
      { name: 'Meditate', complete: true },
      { name: 'Electrolytes', complete: true }
    ]
  }

  addHabit() {
    this.habits.push({ name: this.newHabitName, complete: false })
    this.newHabitName = ''
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

  addWorkoutKeyup(keyEvent) {
    if(keyEvent.keyCode == 13) {
      this.addHabit()
    }
  }

}
