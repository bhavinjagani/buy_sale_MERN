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
export const GENERATE_AD_DESCRIPTION = gql`
  mutation GenerateAdDescription($title: String!, $category: String!, $condition: String, $details: String) {
    generateAdDescription(title: $title, category: $category, condition: $condition, details: $details)
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
