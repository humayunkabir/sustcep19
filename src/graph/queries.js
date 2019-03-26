import { gql } from 'apollo-boost';

export const getAlumnisQuery = gql`
  {
    alumnis {
      id
      name
      headline
      email
      cell
      avatar {
        fileName
        url
      }
    }
  }
`;

export const getAlumniQuery = gql`
  query($id: ID) {
    alumni(where: { id: $id }) {
      name
      headline
      description
      bio
      email
      cell
      avatar {
        fileName
        url
      }
    }
  }
`;

export const getFacultiesQuery = gql`
  {
    faculties {
      facultyId
      name
      designation
      thumbnailUrl
    }
  }
`;
