import React, { Component } from 'react';
import gql from 'graphql-tag';
import { graphql, withApollo, compose } from 'react-apollo';
import Pokemon from './Pokemon'
// The data prop, which is provided by the wrapper below contains,
// a `loading` key while the query is in flight and posts when it is ready
export class Switch extends Component {
  state = { pokemon: true }
  componentDidMount() {
    console.log(this.props.client, 'hello')
  }
  changeComponent = () => {
    this.setState({ pokemon: !this.state.pokemon }, () => {
      this.props.client.resetStore()
    })
  }
  render() {
    return (
      <div>
        { !this.state.pokemon
          ? <div>Hello</div>
          : <Pokemon />
        }
        <button onClick={ this.changeComponent }>Change component</button>
      </div>
    );
  }
}
export default compose(withApollo)(Switch);
