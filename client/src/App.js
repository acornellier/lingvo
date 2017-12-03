import React, {Component} from 'react'
import './App.css'
import {connect} from 'react-redux'
import {send} from './websocket'
import {Grid, Form, TextArea} from 'semantic-ui-react'
import _ from 'lodash'

const detect_lang = {value: 'detect', text: 'Detect'}

class App extends Component {
  constructor() {
    super()
    this.state = {
      from: 'en',
      to: ['es', 'fr', 'eo', 'it'],
      text: '',
      rows: 4
    }

    this.onSubmit = this.onSubmit.bind(this)
  }

  onChangeFrom = (e, {value}) => this.setState({from: value})

  onChangeText = (e) => {
    if (this.state.text !== e.target.value) {
      this.onSubmit(e.target.value)
      this.setState({text: e.target.value})
    }
  }

  onChangeTo = (e, {name, value}) => {
    const to = this.state.to
    to[name] = value
    this.setState({to})
  }

  onSubmit(override) {
    const {from, to, text} = this.state
    send({from, to, text: override || text})
  }

  render() {
    const {languages, translations} = this.props
    const {from, to, rows} = this.state

    const options = languages.concat([detect_lang])

    return (
      <Form onSubmit={() => this.onSubmit()}>
        <Grid>
          <Grid.Column width={8}>
            <Form.Group>
              <Form.Dropdown selection options={options}
                             value={from} name='from' onChange={this.onChangeFrom}/>
              <Form.Button type='submit'>Submit</Form.Button>
            </Form.Group>
            <Form.TextArea name='text' onBlur={this.onChangeText} />
          </Grid.Column>
          <Grid.Column width={8}>
            {_.range(rows).map(i =>
              <div key={i}>
                <Form.Dropdown selection options={options}
                               value={to[i]} name={i} onChange={this.onChangeTo}/>
                <TextArea autoHeight id='target' value={translations[i]}/>
              </div>
            )}
          </Grid.Column>
        </Grid>
      </Form>
    )
  }
}

export default connect(
  state => ({
    languages: state.languages,
    translations: state.translations
  })
)(App)
