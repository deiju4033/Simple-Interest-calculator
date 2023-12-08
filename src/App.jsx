
import { TextField, Button, Stack } from '@mui/material'
import './App.css'
import { useState } from 'react'

function App() {
  const [interest, setInterset] = useState(0)
  const [principle, setPrinciple] = useState(0)
  const [rate, setRate] = useState(0)
  const [year, setYear] = useState(0)
  // console.log(principle);

  const [validPrinciple, setvalidPrinciple] = useState(true)
  const [validRate, setvalidRate] = useState(true)
  const [validYear, setvalidYear] = useState(true)





  const validateUserInputs = (e) => {
    const { name, value } = e.target
    // console.log(`${name}  ,  ${typeof value}`);
    // console.log(!!value.match(/^[0-9]*.?[0-9]+$/));

    if (!!value.match(/^\d*.?\d*$/)) {
      // valid
      if (name === 'principle') {
        setPrinciple(value)
        setvalidPrinciple(true)
      } else if (name === 'rate') {
        setRate(value)
        setvalidRate(true)
      } else {
        setYear(value)
        setvalidYear(true)
      }
    } else {
      // invalid
      if (name === 'principle') {
        setPrinciple(value)
        setvalidPrinciple(flase)
      } else if (name === 'rate') {
        setRate(value)
        setvalidRate(flase)
      } else {
        setYear(value)
        setvalidYear(flase)
      }
    }


  }

  const handleReset = () => {

    setPrinciple(0)
    setRate(0)
    setYear(0)
    setInterset(0)
    setvalidPrinciple(true)
    setvalidRate(true)
    setvalidYear(true)


  }







  const handleCalculate = (e) => {

    e.preventDefault()
    if (!principle || !rate || !year) {

      alert("Please fill the form completely")
    } else {

      setInterset(principle*rate*year/100)
    }

  }



  return (

    <div style={{ width: '100%', height: '100vh' }} className='d-flex justify-content-center align-items-center bg-dark'  >
      <div style={{ width: '600px' }} className='bg-light p-5 rounded' >
        <h3 style={{ height: '40px' }}>simple interest calculator</h3>
        <p>calculate your simple interest easily</p>
        <div style={{ width: '100%', height: '150px' }} className='d-flex justify-content-center align-items-center
            bg-warning mt-5 text-light shadow rounded flex-column'  >

          <h1 style={{ height: '55px' }}>  ₹{interest} </h1>
          <p className='fw-bolder' >Total simple interest</p>
        </div>
        <form className="mt-5" onSubmit={handleCalculate} >

          <div className="mb-3">
            <TextField className='w-100' id="outlined-basic-principle" label="₹principle Amount"
              variant="outlined" name='principle' value={principle || ""} onChange={e => validateUserInputs(e)} />
          </div>

          {!validPrinciple && <div className="mb-3 text-danger fw-bolder">
            Invalid principle Amount
          </div>}




          <div className="mb-3">
            <TextField className='w-100' id="outlined-basic-rate" label="Rate of Interest (%)"
              variant="outlined" name='rate' value={rate || ""} onChange={e => validateUserInputs(e)} />
          </div>

          {!validRate && <div className="mb-3 text-danger fw-bolder">
            Invalid Rate
          </div>}


          <div className="mb-3">
            <TextField className='w-100' id="outlined-basic-time" label="Time period (Yr)"
              variant="outlined" name='time' value={year || ""} onChange={e => validateUserInputs(e)} />
          </div>
          {!validYear && <div className="mb-3 text-danger fw-bolder">
            Invalid Year
          </div>}

          <stack direction={'row'} spacing={2} >

            < Button type='submit' style={{ height: '60px', width: '50%' }} className='bg-blue ' variant="contained"
              disabled={validPrinciple&&validRate&&validYear?false:true}
            >Calculate</Button>
            <Button onClick={handleReset} type='submit' style={{ width: '50%', height: '60px' }} className='bg-light ' variant="outlined">Reset</Button>
          </stack>


        </form>
      </div>
    </div>


  )
}

export default App
