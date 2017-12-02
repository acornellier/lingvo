import React, {Component} from 'react'
import './App.css'
import {send} from './websocket'
import {Grid, Form, Segment} from 'semantic-ui-react'

const languages = ['English', 'Spanish']

class App extends Component {
  constructor() {
    super()
    this.state = {source: languages[0], target: languages[1], data: ''}

    this.onSubmit = this.onSubmit.bind(this)
  }

  onChange = (e, {name, value}) => this.setState({[name]: value})

  onSubmit() {
    const {source, target, data} = this.state
    send({source, target, q: data, format: 'text'})
  }

  render() {
    const {source, target, data} = this.state
    const options = languages.map(l => ({value: l, text: l}))

    return (
      <Form onSubmit={this.onSubmit}>
        <Grid>
          <Grid.Column width={8}>
            <Form.Dropdown options={options} value={source} name='source' onChange={this.onChange}/>
            <Form.TextArea value={data} name='data' onChange={this.onChange}/>
          </Grid.Column>
          <Grid.Column width={8}>
            <Form.Dropdown options={options} value={target} name='target' onChange={this.onChange}/>
            <Segment>
              {''}
            </Segment>
          </Grid.Column>
        </Grid>
        <Form.Button type='submit'>Submit</Form.Button>
      </Form>
    )
  }
}

export default App
