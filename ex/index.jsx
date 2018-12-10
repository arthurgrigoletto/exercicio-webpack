import React from 'react';
import ReactDOM from 'react-dom';
import Family from './family';
import Member from './member';

ReactDOM.render(
    <div>
        <Family lastName='Grigoletto'>
            <Member name='Arthur'/>
            <Member name='Aline'/>
            <Member name='Guilherme'/>
        </Family>

    </div>
, document.getElementById('app'))  