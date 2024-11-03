function Cards() {
  const cardImages = [
    {src: './master-card.png',alt: 'master-card',id: 1},
    {src: './visa.png',alt: 'visa',id: 2},
    {src: './ru-pay.png',alt: 'ru-pay',id: 2},
  ]
  return (
    <div className="paying__cards">
      <p className="paying__cards-title">Card type</p>
      <ul className="cards__list">
        {cardImages.map(item => (
          <li className="cards__list-item"  key={item.id}>
            <img src={item.src} alt={item.alt} />
          </li>
        ))}
        <li className="cards__list-item"  key={4}>
          <p className="cards__list-item--all">See All</p>
        </li>
      </ul>
    </div>
  )
}

export {Cards}