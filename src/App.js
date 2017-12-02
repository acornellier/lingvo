import React, {Component} from 'react'
import './App.css'
import {Container, Grid, Form} from 'semantic-ui-react'

class App extends Component {
  render() {
    const languages = ['English', 'Spanish']
    const options = languages.map(l => ({value: l, text: l}))

    return (
      <Container className="App">
        <Grid>
          <Grid.Column width={8}>
            <Form>
              <Form.Dropdown options={options}/>
              <Form.TextArea/>
            </Form>
          </Grid.Column>
          <Grid.Column width={8}>
            <Form>
              <Form.Dropdown options={options}/>
              <Form.TextArea/>
            </Form>
          </Grid.Column>
        </Grid>
      </Container>
    )
  }
}

export default App
