import {Component} from 'react'

import GradientDirectionItem from '../GradientDirectionItem'

import {
  Container,
  Heading,
  Paragraph,
  Unordered,
  Heading1,
  Button,
  Container1,
  Container2,
  Input,
} from './styledComponents'

const gradientDirectionsList = [
  {directionId: 'TOP', value: 'top', displayText: 'Top'},
  {directionId: 'BOTTOM', value: 'bottom', displayText: 'Bottom'},
  {directionId: 'RIGHT', value: 'right', displayText: 'Right'},
  {directionId: 'LEFT', value: 'left', displayText: 'Left'},
]

class GradientGenerator extends Component {
  state = {
    first: '#8ae323',
    second: '#014f7b',
    id: gradientDirectionsList[0].directionId,
    Initial: gradientDirectionsList[0].value,
    Value1: '',
  }

  onclickButton = (directionId, value) => {
    this.setState({id: directionId, Value1: value})
  }

  first = event => {
    this.setState({first: event.target.value})
  }

  second = event => {
    this.setState({second: event.target.value})
  }

  apply = () => {
    const {Value1} = this.state
    this.setState({Initial: Value1})
  }

  render() {
    const {first, second, id, Initial} = this.state

    return (
      <Container
        data-testid="gradientGenerator"
        bg_color={`linear-gradient(to ${Initial},${first},${second})`}
      >
        <Heading>Generate a CSS Color Gradient</Heading>
        <Paragraph>choose Direction</Paragraph>
        <Unordered>
          {gradientDirectionsList.map(each => (
            <GradientDirectionItem
              user={each}
              key={each.directionId}
              isActive={each.directionId === id}
              onclickButton={this.onclickButton}
            />
          ))}
        </Unordered>
        <Heading1>Pick the Colors</Heading1>
        <Container1>
          <Container2>
            <p>{first}</p>
            <Input type="color" value={first} onChange={this.first} />
          </Container2>
          <Container2>
            <p>{second}</p>
            <Input type="color" value={second} onChange={this.second} />
          </Container2>
        </Container1>
        <Button type="button" onClick={this.apply}>
          Generate
        </Button>
      </Container>
    )
  }
}

export default GradientGenerator
