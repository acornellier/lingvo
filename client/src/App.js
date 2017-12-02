import React, {Component} from 'react'
import './App.css'
import {send} from './websocket'
import {Grid, Form, Segment} from 'semantic-ui-react'

const languages = [
  {value: 'en', text: 'English'},
  {value: 'es', text: 'Spanish'}
]

class App extends Component {
  constructor() {
    super()
    this.state = {from: languages[0].value, to: languages[1].value, text: ''}

    this.onSubmit = this.onSubmit.bind(this)
  }

  onChange = (e, {name, value}) => this.setState({[name]: value})

  onSubmit() {
    const {from, to, text} = this.state
    send({from, to, text})
  }

  render() {
    const {from, to, text} = this.state

    return (
      <Form onSubmit={this.onSubmit}>
        <Grid>
          <Grid.Column width={8}>
            <Form.Group>
              <Form.Dropdown selection options={languages} value={from} name='from' onChange={this.onChange}/>
              <Form.Button type='submit'>Submit</Form.Button>
            </Form.Group>
            <Form.TextArea value={text} name='text' onChange={this.onChange}/>
          </Grid.Column>
          <Grid.Column width={8}>
            <Form.Dropdown selection options={languages} value={to} name='to' onChange={this.onChange}/>
            <Form.TextArea id='target'/>
          </Grid.Column>
        </Grid>
      </Form>
    )
  }
}

export default App
