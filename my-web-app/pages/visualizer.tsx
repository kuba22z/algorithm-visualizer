import {useEffect, useState} from "react";
import {useInterval} from 'usehooks-ts'
import {bblSort} from "./api/hello";

export default function About() {
    const [numbers, setNumbers] = useState<any[]>([]);
    const [counter, setCounter] = useState<number>(0)
    const [changes, setChanges] = useState<any[][]>([]);

    /*  const handleSubmit = (e: any[]) => {
          return fetch("/api/hello", {
              method: "GET",
              body: JSON.stringify(e)
          }).then((res) => {
              console.log(res)
              return res.json();
          }).catch((err) => {
              console.log(err.message);
          });
      }

      useEffect(() => {
          handleSubmit([5, 2, 1, 5, 4, 53, 3, 1, 5, 2, 5, 2, 5]).then(
              (changes) => {
                  setChanges(changes)
              }
          );
      }, []);*/
    useEffect(() => {
        setChanges(bblSort([5, 4, 2, 6, 2, 53, 2, 4, 2, 1]))
    }, []);

    useInterval(() => {
        setNumbers(changes[counter]);
        setCounter(counter + 1);
    }, counter < changes.length ? 500 : null,)


    return (
        <ul>
            {numbers.map((num, index) => <li key={index}>{num}</li>)}
        </ul>
    )
}
