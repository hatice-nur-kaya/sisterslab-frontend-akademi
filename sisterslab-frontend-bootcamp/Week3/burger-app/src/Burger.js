import React, { useState } from 'react';
import Button from '@mui/material/Button';
const Burger = () => {
  const [malzemeler, setMalzemeler] = useState([]);
  const [toplamFiyat, setToplamFiyat] = useState(0);

  const malzemeFiyatları = {
    peynir: 2,
    et: 3,
    salata: 1.5,
    domates: 1,
  };

  const malzemeEkle = (malzeme) => {
    setMalzemeler([...malzemeler, malzeme]);
    setToplamFiyat(toplamFiyat + malzemeFiyatları[malzeme]);
  };

  const malzemeSil = (index) => {
    const yeniMalzemeler = [...malzemeler];
    const silinenMalzemeFiyatı = malzemeFiyatları[yeniMalzemeler[index]];
    yeniMalzemeler.splice(index, 1);
    setMalzemeler(yeniMalzemeler);
    setToplamFiyat(toplamFiyat - silinenMalzemeFiyatı);
  };

  const paraBirimiDönüştür = (fiyat, paraBirimi) => {
    const dövizKurları = {
      usd: 0.12,
      eur: 0.10,
      gbp: 0.09,
    };

    return (fiyat * dövizKurları[paraBirimi]).toFixed(2);
  };

  return (
    <div className="burger-container">
      <h1>BurgerApp</h1>
      <div className="malzeme-listesi">
        <button onClick={() => malzemeEkle('peynir')}>Peynir</button>
        <button onClick={() => malzemeEkle('et')}>Et</button>
        <button onClick={() => malzemeEkle('salata')}>Salata</button>
        <button onClick={() => malzemeEkle('domates')}>Domates</button>
      </div>
      <h2>Seçilen Malzemeler:</h2>
      <ul>
        {malzemeler.map((malzeme, index) => (
          <li key={index}>
            {malzeme} <Button variant='contained' color='error' onClick={() => malzemeSil(index)}>Sil</Button>
          </li>
        ))}
      </ul>

      <h2>Toplam Fiyat: ₺{toplamFiyat}</h2>
      <div className="para-birimi-dönüştürücü">
        <p>Toplam Fiyat (USD): ${paraBirimiDönüştür(toplamFiyat, 'usd')}</p>
        <p>Toplam Fiyat (EUR): €{paraBirimiDönüştür(toplamFiyat, 'eur')}</p>
        <p>Toplam Fiyat (GBP): £{paraBirimiDönüştür(toplamFiyat, 'gbp')}</p>
      </div>
    </div>
  );
};

export default Burger;
