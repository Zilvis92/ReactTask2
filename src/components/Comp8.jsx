import './Comp8.css';
import tusinukoFoto from '../assets/tusinukas.jpg';

const Comp8 = () => {
  let preke = {
    kodas: 'BAK364',
    pavadinimas: 'Tusinukas',
    kaina: 2.34,
    savikaina: 1.50,
    nuotrauka: tusinukoFoto
  }

  return (
    <div className='prekes-kortele'>
      <img src={preke.nuotrauka} alt={preke.pavadinimas} className='prekes-nuotrauka'/>
      <div className="prekes-informacija">
        <h2>{preke.pavadinimas}</h2>
        <p><strong>Kodas:</strong> {preke.kodas}</p>
        <p><strong>Kaina:</strong> €{preke.kaina.toFixed(2)}</p>
        <p><strong>Savikaina:</strong> €{preke.savikaina.toFixed(2)}</p>
      </div>
    </div>
  )
}

export default Comp8