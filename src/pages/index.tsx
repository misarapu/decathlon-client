import { FormEvent, useState } from 'react';
import Osila from '@/components/osila';


const API_URL = "http://localhost:8080/api/score";


export default function Home() {

  const [values, setValues] = useState({
    event: "TRACK_100",
    result: "",
  });

  const [score, setScore] = useState<number>();

  const events: { value: string; label: string; }[] = [
    { value: "TRACK_100", label: "100 meters (s)" },
    { value: "LONG_JUMP", label: "Long jump (cm)" },
    { value: "SHOT_PUT", label: "Shot put (m)" },
    { value: "HIGH_JUMP", label: "High jump (cm)" },
    { value: "TRACK_400", label: "400 meters (s)" },
    { value: "HURDLES_110", label: "110 hurdles (s)" },
    { value: "DISCUS_THROW", label: "Discus throw (m)" },
    { value: "POLE_VAULT", label: "Pole vault (cm)" },
    { value: "JAVELIN_THROW", label: "Javelin throw (m)" },
    { value: "TRACK_1500", label: "1500 meters (s)" },
  ];

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    await fetch(`${API_URL}?event=${values.event}&result=${values.result}`, {
      method: "GET",
      mode: 'cors',
      headers: {
        "Content-Type": "application/json",

      },
    }).then(response => {
      return response.json();
    }).then(data => {
      setScore(data.score);
    });
  }

  const inputStyle = "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5";

  return (
    <main className="py-8 sm:p-24">
      <div className="flex-1 flex-col max-w-sm mx-auto">
        <h1 className="text-xl mb-4">Ask Osila</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-5">
            <label htmlFor="event" className="block mb-2 text-sm font-medium">Event</label>
            <select
              id="event"
              className={inputStyle}
              onChange={e => setValues(prev => ({ ...prev, event: e.target.value }))}
            >
              {events.map(event => {
                return (
                  <option key={event.value} value={event.value}>
                    {event.label}
                  </option>
                )
              })}
            </select>
          </div>
          <div className="mb-5">
            <label htmlFor="result" className="block mb-2 text-sm font-medium">Result</label>
            <input
              id="result"
              type="number"
              className={inputStyle} step={0.01}
              required
              value={values.result}
              onChange={e => setValues(prev => ({ ...prev, result: e.target.value }))}
            />
          </div>
          <div>
            <button
              type="submit"
              className="text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center">
              Ask
            </button>
          </div>
        </form>
        <div className="p-4">
          <Osila text={score?.toString()} />
        </div>
      </div>
    </main>
  )
}
