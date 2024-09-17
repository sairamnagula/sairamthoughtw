import { Component } from "react";
import HabitsPage from "./components/HabitsPage";

import "./styles.css";

// const initialHabits = [
//   {
//     id: 1,
//     habit: "Running",
//   },
//   {
//     id: 2,
//     habit: "Reading",
//   },
// ];

const habitsFromLocal = JSON.parse(localStorage.getItem("habits"));

class App extends Component {
  state = {
    habits: habitsFromLocal,
    habitChange: "",
    isChecked: false,
  };

  // handleSubmit = (event) => {
  //   event.preventDefault();

  // };

  onChangeTrigger = (event) => {
    console.log(event.target.value);
    const newOne = event.target.value;
    this.setState({
      habitChange: newOne,
    });
  };

  onSubmitTrigger = (event) => {
    event.preventDefault();
    const { habits, habitChange, isChecked } = this.state;
    let len = habits.length;
    const newHabit = {
      id: len + 1,
      habit: habitChange,
      isChecked,
    };
    this.setState({
      habits: [...habits, newHabit],
    });
  };

  saveButtonTrigger = () => {
    const { habits } = this.state;
    localStorage.setItem("habits", JSON.stringify(habits));
  };

  onDeleteHabit = (id) => {
    const { habits } = this.state;
    const filteredHabits = habits.filter((eachHabit) => eachHabit.id !== id);
    this.setState({
      habits: filteredHabits,
    });
  };

  onCheckedHabit = (id) => {
    const { isChecked } = this.state;
    console.log(id);

    this.setState((prevState) => ({
      isChecked: !prevState.isChecked,
    }));
  };

  render() {
    const { habits } = this.state;
    console.log(habits);
    return (
      <div className="bg-container">
        <h1 className="title">Habit Tracker</h1>
        <form onSubmit={this.onSubmitTrigger}>
          <input
            className="input-bar"
            type="text"
            placeholder="Enter new habit"
            onChange={this.onChangeTrigger}
          />

          <button type="submit" className="button">
            Add Habit
          </button>
        </form>

        <ul>
          {habits.map((eachHabit) => (
            <HabitsPage
              habits={eachHabit}
              id={eachHabit.id}
              onDeleteHabit={this.onDeleteHabit}
              onCheckedHabit={this.onCheckedHabit}
            />
          ))}
        </ul>

        <button
          type="button"
          onClick={this.saveButtonTrigger}
          className="button"
        >
          Save
        </button>
      </div>
    );
  }
}

export default App;
