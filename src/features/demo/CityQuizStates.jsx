import React from 'react';
import './cityquiz.css';

let statuses = [
    'empty',
    'typing',
    'submitting',
    'success',
    'error',
  ];

export default function CityQuizStates() {

  return (
    <div className='center'>
      {statuses.map(status => (
        <section key={status} className='center'>
          <h4>City Quiz ({status}):</h4>
          <Form status={status} />
        </section>
      ))}
    </div>
  );
}

function Form({ status }) {
    if (status === 'success') {
      return <h1 className='center'>That's right!</h1>
    }
    return (
      <form className='center'>
        <textarea disabled={
          status === 'submitting'
        } />
        <br />
        <button disabled={
          status === 'empty' ||
          status === 'submitting'
        }>
          Submit
        </button>
        {status === 'error' &&
          <p className='Error'>
            Good guess but a wrong answer. Try again!
          </p>
        }
      </form>
    );
  }
  