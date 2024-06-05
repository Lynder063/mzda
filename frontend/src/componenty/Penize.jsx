function Penize(props) {
  return (
    <div className="flex justify-between p-4 m-2 bg-gray-200 rounded-lg shadow-lg">
      <span className="font-medium">Pontecionální mzda:</span>
      <span className="font-semibold text-zelena">~ {props.money} Kč </span>
    </div>
  );
}

export default Penize;
