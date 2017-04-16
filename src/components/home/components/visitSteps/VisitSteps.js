/*
 * Created by Thomas Hartmann
 * A component detailing the steps necessary in the process
 */

import React from 'react'
import { Link } from 'react-router-dom'

// icons
import kontrakt from '../media/bolig-kontrakt.svg'
import velg from '../media/bolig-velg.svg'
import vr from '../media/bolig-vr.svg'
import sok from '../media/bolig-sok.svg'
import eie from '../media/bolig-eie.svg'

export default () => (
  <div>
    <div className='row middle-xs visit-steps-container'>
      <div className='col-xs start-xs'>
        <h3>Visitt trinn-for-trinn</h3>
      </div>
      <div className='col-xs end-xs'>
        <Link to='/om-visitt'>Mer om visitt</Link>
      </div>
    </div >
    <div className='row center-xs frontpage-buttons'>
      <div className='col-xs-2'>
        <img className='icon' src={sok} alt='Finn bolig' />
        <Link to='/' className='frontpage-button'>Finn bolig</Link>
      </div>
      <div className='col-xs-2'>
        <img className='icon' src={velg} alt='Velg bolig' />
        <Link to='/' className='frontpage-button'>Velg bolig</Link>
      </div>
      <div className='col-xs-4'>
        <img className='icon' src={vr} alt='Se bolig i VR' />
        <Link to='/' className='frontpage-button frontpage-button-big'>Se bolig i VR</Link>
      </div>
      <div className='col-xs-2'>
        <img className='icon' src={kontrakt} alt='Bolig kontrakt' />
        <Link to='/' className='frontpage-button'>Kontrakt</Link>
      </div>
      <div className='col-xs-2'>
        <img className='icon' src={eie} alt='Eie bolig' />
        <Link to='/' className='frontpage-button'>Eie ny bolig</Link>
      </div>
    </div>
  </div>
)