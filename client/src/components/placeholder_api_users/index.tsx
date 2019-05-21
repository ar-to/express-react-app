import * as React from "react";
import { callBackendAPI } from '../../services/fetchAPI';
import { List, Button, ButtonProps } from 'semantic-ui-react'

/**
 * NOTES::
 * - some refactoring could improve the logic that controls the rendering of the data
 */


export interface Props {
  userId: number;
  default: number
}

interface State {
  firstId: number;
  data?: any;
}

class PlaceholderUsers extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { firstId: props.default || 1 };
  }

  showUser = () => (
    <List horizontal>
      <List.Item>{this.state.data.id}</List.Item>
      <List.Item>{this.state.data.name}</List.Item>
      <List.Item>{this.state.data.email}</List.Item>
    </List>
  )

  showPost = () => (
    <List horizontal>
      <p>test</p>
      <List.Item>{this.state.data.userId}</List.Item>
      <List.Item>{this.state.data.title}</List.Item>
      <List.Item>{this.state.data.body}</List.Item>
    </List>
  )

  handleClick = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>, data: ButtonProps) => {
    // fetch api
    e.preventDefault()
    this.setState({ data: null })

    setTimeout(async () => {
      switch (data.fetch) {
        case 'user':
          await callBackendAPI('users/1')
            .then(res => this.setState({ data: res }))
            .catch(err => console.log(err));
          break;
        case 'post':
          await callBackendAPI('posts/1')
            .then(res => this.setState({ data: res }))
            .catch(err => console.log(err));
          break;
        default:
          return;
      }
    }, 500)

  }

  show = () => {
    if (this.state.data && this.state.data.userId) {
      return this.showPost()
    } else if (this.state.data && this.state.data.id) {
      return this.showUser()
    }
  }

  render() {
    const { userId } = this.props;

    if (this.state.firstId <= 0) {
      throw new Error('You should pick a user ID >= 1');
    }

    return (
      <div className="users">
        <Button basic color='blue' fetch="user" onClick={this.handleClick}>Get user 1</Button>
        <Button basic color='yellow' fetch="post" onClick={this.handleClick}>Get post 1</Button>
        <div className={`users--id-${userId}`}>
          <p>Hello user: {userId} from https://jsonplaceholder.typicode.com</p>
          {this.show()}
          {this.state.data != null && <p className="user--data">{JSON.stringify(this.state.data)}</p>}
        </div>
      </div>
    );
  }
}

export default PlaceholderUsers;
