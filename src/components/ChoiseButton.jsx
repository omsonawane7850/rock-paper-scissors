const ChoiceButton = ({ choice, icon, onClick }) => {
  return (
    <button className="choice-button" onClick={() => onClick(choice)}>
      <span className="choice-icon">{icon}</span>

      <span className="choice-name">
        {choice.charAt(0).toUpperCase() + choice.slice(1)}
      </span>
    </button>
  );
};

export default ChoiceButton;
