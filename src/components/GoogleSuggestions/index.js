// Write your code here
import './index.css'
import {Component} from 'react'
import SuggestionItem from '../SuggestionItem'

class GoogleSuggestions extends Component {
  state = {searchInput: ''}

  onChangeSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  onSearchSuggestion = suggestion => {
    this.setState({searchInput: suggestion})
  }

  render() {
    const {suggestionsList} = this.props
    const {searchInput} = this.state
    const searchResult = suggestionsList.filter(eachSuggestion =>
      eachSuggestion.suggestion
        .toLowerCase()
        .includes(searchInput.toLowerCase()),
    )

    return (
      <div className="bg-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
          className="google-logo"
          alt="google logo"
        />
        <div className="card-container">
          <div className="search-input-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png"
              className="search-icon"
              alt="search icon"
            />
            <input
              type="search"
              placeholder="Search Google"
              value={searchInput}
              className="search-input"
              onChange={this.onChangeSearchInput}
            />
          </div>
        </div>
        <ul className="list-container">
          {searchResult.map(eachItem => (
            <SuggestionItem
              suggestionsList={eachItem}
              key={eachItem.id}
              onSearchSuggestion={this.onSearchSuggestion}
            />
          ))}
        </ul>
      </div>
    )
  }
}
export default GoogleSuggestions
