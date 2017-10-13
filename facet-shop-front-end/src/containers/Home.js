import React, {Component} from 'react'
import {Link} from "react-router-dom"

import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Input,
  Label,
  Form,
  FormGroup
} from 'reactstrap';

export default class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      modal: false,
      username: ""
    }
  }

  toggle = () => {
      this.setState({
        modal: !this.state.modal
      });
    }

  _handleClick = (event) => {
    event.preventDefault();
  }

  _handleChange = (event) => {
    this.setState({
      username: event.target.value
    })
  }

  _handleSubmit = (event) => {
    event.preventDefault();
    this.props.makeUser(this.state.username)
    this.props.history.push('/store')
  }

  render() {
    return (
      <div className="main-facet-bg home-content my-auto">
          <h1 className="m-0 facet-title">Facet</h1>
        <Button color="info" onClick={this.toggle}>Click Here to Shop!</Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalBody>
            <Form onSubmit={this._handleSubmit}>
              <Input className=""
                type="text"
                onChange={this._handleChange}
                placeholder="What's your name?"
                />
            </Form>
          </ModalBody>
        </Modal>
      </div>
    )
  }
}
