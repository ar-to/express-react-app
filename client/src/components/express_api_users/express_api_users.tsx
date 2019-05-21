import * as React from "react";

export interface Props {
  userId: number;
  default: number
}

interface State {
  firstId: number;
  data?: string;
}

class Users extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { firstId: props.default || 1 };
  }

  componentDidMount() {
    // Call our fetch function below once the component mounts
    this.callBackendAPI()
      .then(res => this.setState({ data: res.express }))
      .catch(err => console.log(err));
  }
  // Fetches our GET route from the Express server. 
  callBackendAPI = async () => {
    const response = await fetch('/users');
    const body = await response.json();

    if (response.status !== 200) {
      throw Error(body.message)
    }
    return body;
  };

  render() {
    const { userId } = this.props;

    if (this.state.firstId <= 0) {
      throw new Error('You should pick a user ID >= 1');
    }

    return (
      <div className="users">
        <div className="users--id">
          <p>Hello user {userId} from Express API: {this.state.data ? this.state.data : "your Express server is not connected"}</p>
        </div>
      </div>
    );
  }
}

export default Users;
