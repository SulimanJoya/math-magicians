import { useState } from 'react';
import Button from './Buttons';
import Calculate from '../logic/calculate';

export default function Calculator() {
  const [show, setShow] = useState({
    total: null,
    next: null,
    operation: null,
  });

  return (
    <main className="combined">
      <p className="let-us">Let&apos;s do some maths!!</p>
      <div className="display">{show.next || show.total || 0}</div>
      <Button
        fetcher={(e) => {
          const valueClicked = e.target.innerHTML;
          const result = Calculate(show, valueClicked);
          setShow(result);
        }}
      />
    </main>
  );
}
