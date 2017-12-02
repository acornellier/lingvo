import React, {Component} from 'react'
import './App.css'
import {Grid, Form, Segment} from 'semantic-ui-react'

const languages = ['English', 'Spanish']

class App extends Component {
  constructor() {
    super()
    this.state = {l1: languages[0], c1: '', l2: languages[1], c2: ''}

    this.onSubmit = this.onSubmit.bind(this)
  }

  onChange = (e, {name, value}) => this.setState({[name]: value})

  onSubmit() {
    console.warn(this.state)
  }'AIzaSyDkVPafLTgpUMBLeeU9rFxkADBqOwqKN88'

  render() {
    const {l1, c1, l2, c2} = this.state
    const options = languages.map(l => ({value: l, text: l}))

    return (
      <Form onSubmit={this.onSubmit}>
        <Grid>
          <Grid.Column width={8}>
            <Form.Dropdown options={options} value={l1} name='l1' onChange={this.onChange}/>
            <Form.TextArea value={c1} name='c1' onChange={this.onChange}/>
          </Grid.Column>
          <Grid.Column width={8}>
            <Form.Dropdown options={options} value={l2} name='l2' onChange={this.onChange}/>
            <Segment>
              {c2}
            </Segment>
          </Grid.Column>
        </Grid>
        <Form.Button type='submit'>Submit</Form.Button>
      </Form>
    )
  }
}

export default App
