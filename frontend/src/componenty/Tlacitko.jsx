function Tlacitko(props) {
  return (
    <button
      onClick={props.onClick}
      className="flex p-4 mx-3 text-xs rounded-lg w- bg-slate-200 max-w-min"
    >
      {props.text}
    </button>
  );
}

export default Tlacitko;
