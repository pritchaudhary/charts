/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, { useState, Fragment } from "react";
import PropTypes from "prop-types";
// import InputField from 'components/Common/InputField';

const initialState = {
  // The active selection's index
  activeSuggestion: 0,
  // The suggestions that match the user's input
  filteredSuggestions: [],
  // Whether or not the suggestion list is shown
  showSuggestions: false,
  // What the user has entered
  userInput: ""
};
const Autocomplete = () => {
  const [state, setState] = useState(initialState);
  const [suggestions, setSuggestion] = useState([]);

  // Event fired when the input value is changed
  const onChange = e => {
    // const { suggestions } = props;
    const userInput = e.currentTarget.value;

    fetch("https://jsonplaceholder.typicode.com/todos")
      .then(response => response.json())
      .then(json => {
          const permittedValues = json.map(value => value.title);
          setSuggestion(permittedValues)
        });
      
      
    // Filter our suggestions that don't contain the user's input
    const filteredSuggestions = suggestions.filter(
      suggestion => suggestion.toLowerCase().indexOf(userInput.toLowerCase()) > -1
    );

    // Update the user input and filtered suggestions, reset the active
    // suggestion and make sure the suggestions are shown
    setState({
      activeSuggestion: 0,
      filteredSuggestions,
      showSuggestions: true,
      userInput: e.currentTarget.value
    });
    //console.log(state);
  };

  // Event fired when the user clicks on a suggestion
  const onClick = e => {
    // Update the user input and reset the rest of the state
    setState({
      activeSuggestion: 0,
      filteredSuggestions: [],
      showSuggestions: false,
      userInput: e.currentTarget.innerText
    });
    
  };

  // Event fired when the user presses a key down
  const onKeyDown = e => {
    const { activeSuggestion, filteredSuggestions } = state;
    // User pressed the enter key, update the input and close the
    // suggestions
    if (e.keyCode === 13) {
      setState({
        activeSuggestion: 0,
        showSuggestions: false,
        userInput: filteredSuggestions[activeSuggestion]
      });
      console.log(state);
    }
    // User pressed the up arrow, decrement the index
    else if (e.keyCode === 38) {
      if (activeSuggestion === 0) {
        return;
      }

      setState({ activeSuggestion: activeSuggestion - 1 });
    }
    // User pressed the down arrow, increment the index
    else if (e.keyCode === 40) {
      console.log("filteredSuggestions", filteredSuggestions);
      if (activeSuggestion - 1 === filteredSuggestions.length) {
        return;
      }

      setState({ activeSuggestion: activeSuggestion + 1 });
    }
  };

  let suggestionsListComponent;

  console.log(state);
  
  if (state.showSuggestions && state.userInput) {
    if (state.filteredSuggestions.length) {
      suggestionsListComponent = (
        <ul className='suggestions'>
          {state.filteredSuggestions.map((suggestion, index) => {
            let className;

            // Flag the active suggestion with a class
            if (index === state.activeSuggestion) {
              className = "suggestion-active";
            }

            return (
              <li className={className} key={index} onClick={onClick}>
                {suggestion}
              </li>
            );
          })}
        </ul>
      );
    } else {
      suggestionsListComponent = (
        <div className='no-suggestions'>
          <em>No suggestions, you're on your own!</em>
        </div>
      );
    }
  }

  return (
    <Fragment>
      <input type='text' onChange={onChange} onKeyDown={onKeyDown} value={state.userInput} />
      {/* <InputField onChange={onChange} onKeyDown={onKeyDown} value={state.userInput} /> */}
      {suggestionsListComponent}
    </Fragment>
  );
};

Autocomplete.propTypes = {
  suggestions: PropTypes.instanceOf(Array)
};

Autocomplete.defaultProps = {
  suggestions: []
};
export default Autocomplete;
