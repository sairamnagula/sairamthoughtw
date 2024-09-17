import "./index.css";

const HabitsPage = (props) => {
  const { habits, onDeleteHabit, onCheckedHabit } = props;
  const { habit, id } = habits;

  const deleteButtonTrigger = () => onDeleteHabit(id);

  const onChangeHandleCheckbox = () => onCheckedHabit(id);

  return (
    <div className="list-container">
      <li className="list-element">{habit}</li>
      <button type="button" onClick={deleteButtonTrigger} className="button1">
        delete
      </button>
      <input type="checkbox" onChange={onChangeHandleCheckbox} />
    </div>
  );
};

export default HabitsPage;
