import { FormEvent, useState } from 'react';
import Osila from '@/components/osila';
import FormLabel from '@/components/formLabel';


const API_URL = "http://localhost:8080/api/score";

const EVENTS: { value: string; label: string; }[] = [
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


export default function Home() {

  const [values, setValues] = useState({
    event: "TRACK_100",
    result: "",
  });

  const [score, setScore] = useState<number>();

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    await fetch(`${API_URL}?event=${values.event}&result=${values.result}`, {
      method: "GET",
      mode: 'cors',
      headers: { "Content-Type": "application/json", },
    }).then(response => {
      return response.json();
    }).then(data => {
      setScore(data.score);
    });
  }

  return (
    <main className="py-8">
      <div className="flex flex-col space-y-14 p-8 max-w-sm mx-auto border-2">
        <form onSubmit={handleSubmit}>
          <h1 className="text-xl mb-4">Ask Osila</h1>
          <div className="mb-5">
            <FormLabel htmlFor="event">Event</FormLabel>
            <select id="event" onChange={e => setValues(prev => ({ ...prev, event: e.target.value }))}>
              {EVENTS.map(event => {
                return (
                  <option key={event.value} value={event.value}>
                    {event.label}
                  </option>
                )
              })}
            </select>
          </div>
          <div className="mb-5">
            <FormLabel htmlFor="event">Result</FormLabel>
            <input
              id="result"
              type="number"
              step={0.01}
              required
              value={values.result}
              onChange={e => setValues(prev => ({ ...prev, result: e.target.value }))}
            />
          </div>
          <div>
            <button type="submit" className="primary">
              Ask
            </button>
          </div>
        </form>
        <div className="px-8">
        <Osila text={score?.toString()} />
        </div>
      </div>
    </main>
  )
}
