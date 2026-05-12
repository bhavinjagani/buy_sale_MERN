import { gql } from '@apollo/client';

export const CREATE_AD = gql`
  mutation CreateAd($input: AdInput!) {
    createAd(input: $input) {
      success
      insertId
      message
    }
  }
`;

export const UPDATE_AD = gql`
  mutation UpdateAd($input: AdInput!) {
    updateAd(input: $input) {
      success
      message
    }
  }
`;
