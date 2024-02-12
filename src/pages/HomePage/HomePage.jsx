import { useState } from 'react';
import { Movieslist } from '../../components/Movieslist/Movieslist';

export default function HomePage() {
  const [trends, setTrends] = useState([]);
  return (
    <div>
      <Movieslist trends={trends} setTrends={setTrends} />
    </div>
  );
}
