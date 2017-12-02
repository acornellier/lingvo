import React, {Component} from 'react'
import './App.css'
import {connect} from 'react-redux'
import {send} from './websocket'
import {Grid, Form} from 'semantic-ui-react'

const detect_lang = {value: 'detect', text: 'Detect'}

class App extends Component {
  constructor() {
    super()
    this.state = {
      from: 'en',
      to: 'es',
      text: 'apple',
      rows: 1
    }

    this.onSubmit = this.onSubmit.bind(this)
  }

  onChange = (e, {name, value}) => this.setState({[name]: value})

  onSubmit() {
    const {from, to, text} = this.state
    send({from, to, text})
  }

  render() {
    const {languages, translation} = this.props
    const {from, to, text} = this.state

    const options = languages.concat([detect_lang])

    return (
      <Form onSubmit={this.onSubmit}>
        <Grid>
          <Grid.Column width={8}>
            <Form.Group>
              <Form.Dropdown selection options={options} value={from} name='from' onChange={this.onChange}/>
              <Form.Button type='submit'>Submit</Form.Button>
            </Form.Group>
            <Form.TextArea value={text} name='text' onChange={this.onChange}/>
          </Grid.Column>
          <Grid.Column width={8}>
            <Form.Dropdown selection options={options} value={to} name='to' onChange={this.onChange}/>
            <Form.TextArea id='target' value={translation}/>
          </Grid.Column>
        </Grid>
      </Form>
    )
  }
}

export default connect(
  state => ({
    languages: state.languages,
    translation: state.translation
  })
)(App)
