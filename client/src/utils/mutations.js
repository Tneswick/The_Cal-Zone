import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_GOAL = gql`
  mutation addGoal($goal: Int!) {
    addGoal(goal: $goal) {
      _id
      username
      email
      goal
    }
  }
`

export const ADD_POST = gql`
  mutation addPost($userId: String!, $description: String!, $calories: Int!, $dateTime: String!) {
    addPost(user_id: $userId, description: $description, calories: $calories, date_time: $datetTime) {
      userId
      description
      calories
      dateTime
    }
  }
`;

export const DELETE_POST = gql`
  mutation Mutation($deletePostId: String) {
    deletePost(id: $deletePostId) {
      _id
    }
  }
`

