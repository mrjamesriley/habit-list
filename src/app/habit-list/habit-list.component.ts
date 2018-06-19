import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'habit-list',
  templateUrl: './habit-list.component.html',
  styleUrls: ['./habit-list.component.css']
})
export class HabitListComponent implements OnInit {

  habits = []

  constructor() {
    this.habits = [
      { name: 'Journal', complete: false },
      { name: 'Meditate', complete: true },
      { name: 'Electrolytes', complete: true }
    ]
  }

  ngOnInit() {
  }

  toggleHabit(habit) {
    habit.complete = !habit.complete
  }

}
