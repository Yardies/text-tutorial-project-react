import { useState } from 'react'
import data from '../../final/src/data'

export const Ipsum = () => {
  const [count, setCount] = useState(1)
  const [text, setText] = useState([])
  const handleSubmit = (e) => {
    e.preventDefault()
    let amount = parseInt(count)

    setText(data.slice(0, amount))
  }
  return (
    <div>
      <h5>boared of boring lorem ipsums ??</h5>
      <form
        className="lorem"
        onSubmit={handleSubmit}
        style={{ marginBottom: `2rem` }}
      >
        <label htmlFor="paragraphs">
          please enter the number of paragraphs
        </label>
        <input
          type="number"
          min={1}
          max={8}
          step={1}
          value={count}
          name="paragraphs"
          onChange={(e) => setCount(e.target.value)}
        />
        <button type="submit">submit</button>
      </form>
      {text.map((par, index) => {
        return (
          <p key={index} style={{ marginBottom: `2rem` }}>
            {par}
          </p>
        )
      })}
    </div>
  )
}
