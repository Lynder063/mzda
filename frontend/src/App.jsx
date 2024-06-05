import Smena from "./componenty/Smena.jsx";
import Hodiny from "./componenty/Hodiny.jsx";
import Penize from "./componenty/Penize.jsx";
import Tlacitko from "./componenty/Tlacitko.jsx";
import { useEffect, useState } from "react";
import moment from "moment";

function App() {
  const [smeny, setSmeny] = useState([]);
  const [error, setError] = useState(null);
  const [totalMoney, setTotalMoney] = useState(0);
  const [totalHoursWorked, setTotalHoursWorked] = useState(0);
  const maxHours = 80;
  const hourlyRate = 150;

  useEffect(() => {
    const fetchSmeny = async () => {
      try {
        const response = await fetch(`http://localhost:3000/api/shifts`);
        const smeny = await response.json();
        setSmeny(smeny);
        calculateTotals(smeny);
      } catch (e) {
        setError(e);
      }
    };

    fetchSmeny();
  }, []);

  const calculateTotals = (smeny) => {
    let totalHours = 0;

    smeny.forEach((smena) => {
      const start = moment(smena.start_time, "HH:mm:ss");
      const end = moment(smena.end_time, "HH:mm:ss");
      const duration = moment.duration(end.diff(start));
      totalHours += duration.asHours();
    });

    setTotalHoursWorked(totalHours);
    setTotalMoney(Math.round(totalHours * hourlyRate));
  };

  if (error) {
    console.log(error);
  }

  const remainingHours = maxHours - totalHoursWorked;

  return (
    <div>
      <Penize money={totalMoney} />
      <div className="grid grid-flow-col grid-cols-2 gap-2">
        <Hodiny
          title="Aktuálně odpracované"
          hours={totalHoursWorked.toFixed(2)}
        />
        <Hodiny
          title="Ještě je možné odpracovat"
          hours={remainingHours.toFixed(2)}
        />
      </div>
      <div className="grid grid-cols-2 gap-28">
        <Tlacitko text="Přidat směnu" />
        <Tlacitko text="Nový měsíc" />
      </div>

      {smeny.map((smena, index) => {
        const start = moment(smena.start_time, "HH:mm:ss");
        const end = moment(smena.end_time, "HH:mm:ss");
        const duration = moment.duration(end.diff(start));
        const hoursWorked = duration.asHours();
        const timeWorkedFormatted = `${Math.floor(hoursWorked)}:${String(
          Math.floor((hoursWorked % 1) * 60)
        ).padStart(2, "0")}`;

        return (
          <Smena
            key={index}
            timeWorked={timeWorkedFormatted}
            moneyEarned={Math.round(hoursWorked * hourlyRate)}
            date={moment(smena.date).format("DD.MM.YYYY")}
            startTime={smena.start_time}
            endTime={smena.end_time}
          />
        );
      })}
    </div>
  );
}

export default App;
