import React from 'react';

export default function StarsGen(props) {
  const stars = [];

  for (let i = 0; i < props.amount; i++) {
    stars.push(
      <div
        key={i}
        style={{
          width: '20px',
          height: '20px',
          background: '#C72535',
          display: 'inline-block',
          clipPath:
            'polygon(50% 2.45%, 61.8% 38.77%, 100% 38.77%, 69.1% 61.23%, 80.9% 97.55%, 50% 75.1%, 19.1% 97.55%, 30.9% 61.23%, 0% 38.77%, 38.2% 38.77%)',
        }}
      ></div>
    );
  }

  return <div>{stars}</div>;
}