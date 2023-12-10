import Image from 'next/image'
import { useCallback, useEffect, useState } from 'react';


interface OsilaProps {
  text?: string
}

const Osila = (props: OsilaProps) => {

  const { text = "Hello!" } = props;

  const [isSpeaking, setIsSpeaking] = useState(false);

  useEffect(() => {
    if (!isSpeaking) {
      setIsSpeaking(true);
      const interval = setInterval(() => {
        setIsSpeaking(false);
      }, 1000);

      return () => clearInterval(interval);
    }
  }, [text]);


  const Bubble = useCallback(() => {
    return (
      <div
        style={{
          width: '150px',
          height: '120px',
          backgroundImage: `url('/speaking_bubble.png')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
        className="pt-6"
      >
        <p className="text-2xl text-center font-bold px-11 py-3">
          {text}
        </p>
      </div>
    )
  }, [text]);


  return (
    <div className="flex flex-row p-8">
      <Image
        src={isSpeaking ? "/osila_speaking.gif" : "/osila.png"}
        width={200}
        height={200}
        alt="Osila"
        priority
      />
      <div className="absolute ml-32 -mt-8">
        <Bubble />
      </div>
    </div>
  )
}

export default Osila;