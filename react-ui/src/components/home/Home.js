/*
 * Created by Thomas Hartmann
 * The home page
 */

import React from 'react'
import { Link } from 'react-router-dom'
import AboutBox from './components/aboutBox/AboutBox'
import Steps from './components/visitSteps/VisitSteps'
import MenuItem from 'material-ui/MenuItem'
import SelectField from 'material-ui/SelectField'
import RecentProperties from './components/recentProperties/RecentProperties.map'

// This can be used to override values in the theme
const styles = {
  customWidth: {
    width: 500,
    backgroundColor: '#FFF'

  },
  color: {
    color: '#404040'
  },

  relative: {
    position: 'relative'
  }
}

export default ({ selectedCounty, allCounties, handleChange = f => f, handleSubmit = f => f }) => (
  <main className='frontpage full-width'>
    <section className='home-search center-xs middle-xs '>
      <AboutBox />
      <div className="col-xs-offset-3"></div>
      <div className='row'>
        <div className='col-xs-12 center-xs'>
          <h1 className='title-heading'>Hvor ønsker du å bo?</h1>
          <div className='dropdown center-xs' >
            <div className="dropDown-background">
              <SelectField name='dropDownCounty' className="selectField"
                onChange={(event, index, value) => handleChange(value)}
                hintText={selectedCounty || 'Velg et fylke ...'}
                style={styles.customWidth}
                floatingLabelText={selectedCounty || 'Velg et fylke ...'}
                menuStyle={styles.backgroundColor}
                fullWidth={true}
                floatingLabelStyle={styles.relative}
              >
                <MenuItem value={null} primaryText='Vis alle' />
                {allCounties.map((county) =>
                  <MenuItem value={county} key={county} primaryText={county} />
                )}
              </SelectField>
            </div>
            <Link to='/boligvelger' onClick={() => handleSubmit(selectedCounty)} className="col-xs">
              <input type='submit' value='Søk' />
            </Link>
          </div>
        </div>
      </div>
    </section>
    <Steps />
    <RecentProperties />
  </main >
)