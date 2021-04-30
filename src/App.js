import SelectionTabs from './components/SelectionTabs/SelectionTabs.jsx';
import { Paper } from '@material-ui/core';

import { StyleRoot } from 'radium';
import React, {Suspense} from 'react';
import './App.css';



function App() {

  return (
    <div
      style={{
        height: '100%',
        position: 'absolute',
        left: '0px',
        right: '0px',
        top: '0px',
        width: '100%',
        overflowX: 'hidden',
      }}
    >
      
        <Paper elevation={0}>
          <Suspense fallback={<div />}>
            <StyleRoot>
              <div className="headerCont">
                <span className="header track">
                  {' '}
                  Covid{' '}
                </span>{' '}
                <span className="header covid">
                  &nbsp;Tracker{' '}
                </span>{' '}
                <span className="toggle-button">
    
                </span>
              </div>
            </StyleRoot>
          </Suspense>
          <SelectionTabs />

        </Paper>
    </div>
  );
}

export default React.memo(App);
