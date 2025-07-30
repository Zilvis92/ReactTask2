import './Comp9.css';

const Comp9 = () => {
  let prekes = [
    { id: 1, pavadinimas: 'Tusinukas', kaina: 2.5, kiekis: 283 },
    { id: 2, pavadinimas: 'Flomesteriai', kaina: 3, kiekis: 103 },
    { id: 3, pavadinimas: 'Sasiuvinys', kaina: 1.2, kiekis: 401 },
    { id: 4, pavadinimas: 'Obuoliai', kaina: 2.2, kiekis: 231 },
    { id: 5, pavadinimas: 'Kriauses', kaina: 2.1, kiekis: 74 },
  ]

  return (
    <div className='prekiu-wrapper'>
        <h2>Prekes</h2>
        <div className='prekiu-list'>
            {prekes.map((preke) => (
            <div className='prekes-blokas'>
                <h3>{preke.pavadinimas}</h3>
                <p>Prekė kainuoja: {preke.kaina.toFixed(2)}€</p>
                <p>Jos turime: {preke.kiekis} vnt.</p>
            </div>
            ))}
        </div>
    </div>
  )
}

export default Comp9