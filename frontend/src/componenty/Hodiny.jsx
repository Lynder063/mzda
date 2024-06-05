function Hodiny(props) {
  return (
    <div className="flex justify-between p-4 m-4 text-xs bg-gray-200 rounded-lg">
      <span className="text-xs italic">{props.title}</span>
      <span className="font-bold text-center text-cervena">{props.hours}</span>
    </div>
  );
}

export default Hodiny;
