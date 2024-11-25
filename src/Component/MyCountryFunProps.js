import React from 'react'

export default function MyCountryFunProps(props) {
  return (
    <>
    <h2>Country-{props.name === 'INDIA' ? 'Surat' : 'New York'}</h2>
    <h2>Population-{props.Population === '135 Billion' ? '10 Million' : '5 Million'}</h2>
    <div>MyCountryFunProps</div>
    </>
  )
}
