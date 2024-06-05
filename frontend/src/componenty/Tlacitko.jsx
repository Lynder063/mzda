function Tlacitko(props) {
  return (
    <div className="flex p-4 mx-3 text-xs rounded-lg w- bg-slate-200 max-w-min">
      {props.icon}
      <span className="ml-2">{props.text}</span>
    </div>
  );
}

export default Tlacitko;
