export interface Stargazers {
  totalCount: number;
}

interface Response {
  user: {
    repository: {
      stargazers: Stargazers;
    };
  };
}

export const fetchStargazers = async () => {
  const query = `
    query {
      user (login: "hauptrolle") {
        repository(name: "chakra-templates") {
          stargazers {
            totalCount
          }
        }
      }
    }
  `;

  return 10;
};
