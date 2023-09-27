// Write your code here
import './index.css'

const SuggestionItem = props => {
  const {suggestionsList, onSearchSuggestion} = props
  const {suggestion} = suggestionsList

  const onArrowClick = () => {
    onSearchSuggestion(suggestion)
  }

  return (
    <li className="list-item">
      <p className="list-para">{suggestion}</p>
      <img
        src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
        className="arrow-icon"
        alt="arrow"
        onClick={onArrowClick}
      />
    </li>
  )
}
export default SuggestionItem
