import {List, Button, Outline1} from './styledComponents'

const GradientDirectionItem = props => {
  const {user, isActive, onclickButton} = props
  const {displayText, directionId, value} = user

  const button12 = () => {
    onclickButton(directionId, value)
  }

  return (
    <List>
      {isActive ? (
        <Button type="button">{displayText}</Button>
      ) : (
        <Outline1 type="button" onClick={button12}>
          {displayText}
        </Outline1>
      )}
    </List>
  )
}

export default GradientDirectionItem
