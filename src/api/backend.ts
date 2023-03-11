export const API_URL = "http://1f85-14-143-59-170.in.ngrok.io";

export type Repo = {
  id: string;
  name: string;
  url: string;
  description: string;
  stargazers: {
    totalCount: number;
  };
};

export const createProjectApi = async (postData: any) => {
  const res = await fetch(`${API_URL}/project`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(postData),
  });
  return res;
};
export const fetchProjects = async <R extends any>(query: any) => {
  console.log(`${API_URL}/projects/?wallet_id=${query.walletId}`);
  const res = await fetch(`${API_URL}/projects/?wallet_id=${query.walletId}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const { resp } = await res.json();
  // const resp = {
  //   projects: [
  //     {
  //       id: 'f872702d-b67f-4b5f-89af-b7264a89bfa8',
  //       name: 'bus',
  //       active: true,
  //       created_at: '2023-03-05T11:45:55.476424+05:30',
  //       updated_at: '2023-03-05T11:45:55.476424+05:30',
  //     },
  //     {
  //       id: 'cf6d40a6-2715-4999-99c0-44b1dfba6be9',
  //       name: 'bicycle',
  //       active: true,
  //       created_at: '2023-03-05T11:53:41.855287+05:30',
  //       updated_at: '2023-03-05T11:53:41.855287+05:30',
  //     },
  //     {
  //       id: '01ab1838-c6a7-440d-888a-5daf63da7b1a',
  //       name: 'car',
  //       active: false,
  //       created_at: '2023-03-07T18:52:17.435916+05:30',
  //       updated_at: '2023-03-07T18:52:17.435916+05:30',
  //     },
  //     {
  //       id: 'bb58759a-91c9-443c-b268-6beb4e459f88',
  //       name: 'bike',
  //       active: false,
  //       created_at: '2023-03-07T18:53:19.285072+05:30',
  //       updated_at: '2023-03-07T18:53:19.285072+05:30',
  //     },
  //     {
  //       id: '6b85d6d1-9dc5-4aeb-80de-6fac30264d46',
  //       name: 'space',
  //       active: false,
  //       created_at: '2023-03-07T19:36:28.087735+05:30',
  //       updated_at: '2023-03-07T19:36:28.087735+05:30',
  //     },
  //     {
  //       id: 'fc84183b-e344-4d14-9ee8-26938292e1e8',
  //       name: 'space1',
  //       active: false,
  //       created_at: '2023-03-07T19:38:22.924265+05:30',
  //       updated_at: '2023-03-07T19:38:22.924265+05:30',
  //     },
  //     {
  //       id: '030e63f3-58b6-4255-98a8-77852bfcb531',
  //       name: 'space1',
  //       active: false,
  //       created_at: '2023-03-07T19:40:21.103723+05:30',
  //       updated_at: '2023-03-07T19:40:21.103723+05:30',
  //     },
  //     {
  //       id: 'da9ceac9-8967-4cf8-a574-fa23f10fc202',
  //       name: 'space10',
  //       active: false,
  //       created_at: '2023-03-07T18:53:44.919415+05:30',
  //       updated_at: '2023-03-07T20:40:02.127196+05:30',
  //     },
  //   ],
  //   wallet_id: 'GrZMZse68SN8kEpFQwNRDHJqdXxbsa8NgjwFeoBkQqr4',
  // };
  return resp;
};

export const fetchProject = async (query: any) => {
  console.log(
    `${API_URL}/projects?wallet_id=${query.walletId}&${query.projectId}`
  );
  const res = await fetch(
    `${API_URL}/projects?wallet_id=${query.walletId}&project_id=${query.projectId}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  const d = await res.json();
  console.log(d);
  const { resp } = d;
  return resp;

  // const resp = {
  //   project: {
  //     id: 'f872702d-b67f-4b5f-89af-b7264a89bfa8',
  //     name: 'bus',
  //     active: true,
  //     expiry: null,
  //     created_at: '2023-03-05T11:45:55.476424+05:30',
  //     updated_at: '2023-03-05T11:45:55.476424+05:30',
  //     labelled_images: [
  //       {
  //         id: 'eadea483-ddc1-4d5f-943c-4bd6f7ff369a',
  //         url:
  //           'file://f872702d-b67f-4b5f-89af-b7264a89bfa8_bus/labelled/image-2.jpg',
  //         name: 'image-2.jpg',
  //         size: null,
  //         active: true,
  //         clicks: 0,
  //         created_at: '2023-03-05T12:10:45.717522+05:30',
  //         project_id: 'f872702d-b67f-4b5f-89af-b7264a89bfa8',
  //         updated_at: '2023-03-05T12:10:45.717522+05:30',
  //         shown_to_users: 0,
  //       },
  //       {
  //         id: '59cdebf4-4069-4d3f-8aa5-81db29963393',
  //         url:
  //           'file://f872702d-b67f-4b5f-89af-b7264a89bfa8_bus/labelled/image-3.jpg',
  //         name: 'image-3.jpg',
  //         size: null,
  //         active: true,
  //         clicks: 0,
  //         created_at: '2023-03-05T12:10:45.717522+05:30',
  //         project_id: 'f872702d-b67f-4b5f-89af-b7264a89bfa8',
  //         updated_at: '2023-03-05T12:10:45.717522+05:30',
  //         shown_to_users: 0,
  //       },
  //       {
  //         id: 'bb839863-7e7c-4b05-91e1-a7c4208436be',
  //         url:
  //           'file://f872702d-b67f-4b5f-89af-b7264a89bfa8_bus/labelled/image-4.jpg',
  //         name: 'image-4.jpg',
  //         size: null,
  //         active: true,
  //         clicks: 0,
  //         created_at: '2023-03-05T12:10:45.717522+05:30',
  //         project_id: 'f872702d-b67f-4b5f-89af-b7264a89bfa8',
  //         updated_at: '2023-03-05T12:10:45.717522+05:30',
  //         shown_to_users: 0,
  //       },
  //       {
  //         id: 'ea81561f-8ad6-4ae8-848f-f19aaec5492e',
  //         url:
  //           'file://f872702d-b67f-4b5f-89af-b7264a89bfa8_bus/labelled/image-5.jpg',
  //         name: 'image-5.jpg',
  //         size: null,
  //         active: true,
  //         clicks: 0,
  //         created_at: '2023-03-05T12:10:45.717522+05:30',
  //         project_id: 'f872702d-b67f-4b5f-89af-b7264a89bfa8',
  //         updated_at: '2023-03-05T12:10:45.717522+05:30',
  //         shown_to_users: 0,
  //       },
  //       {
  //         id: 'be47683e-e76b-4aba-93e7-e1b559a0bf14',
  //         url:
  //           'file://f872702d-b67f-4b5f-89af-b7264a89bfa8_bus/labelled/image-1.jpg',
  //         name: 'image-1.jpg',
  //         size: null,
  //         active: true,
  //         clicks: 0,
  //         created_at: '2023-03-05T12:10:45.717522+05:30',
  //         project_id: 'f872702d-b67f-4b5f-89af-b7264a89bfa8',
  //         updated_at: '2023-03-05T12:10:45.717522+05:30',
  //         shown_to_users: 0,
  //       },
  //     ],
  //     unlabelled_images: [
  //       {
  //         id: '515efac9-0466-4b1f-9ed0-668aaab60879',
  //         url:
  //           'file://f872702d-b67f-4b5f-89af-b7264a89bfa8_bus/unlabelled/image-11.jpg',
  //         name: 'image-11.jpg',
  //         size: null,
  //         active: true,
  //         clicks: 11,
  //         created_at: '2023-03-05T12:10:45.717522+05:30',
  //         project_id: 'f872702d-b67f-4b5f-89af-b7264a89bfa8',
  //         updated_at: '2023-03-05T12:10:45.717522+05:30',
  //         shown_to_users: 27,
  //         image_confidence: 40.74,
  //       },
  //       {
  //         id: '7ea0c790-3f80-4061-a833-6ac609f113cd',
  //         url:
  //           'file://f872702d-b67f-4b5f-89af-b7264a89bfa8_bus/unlabelled/image-12.jpg',
  //         name: 'image-12.jpg',
  //         size: null,
  //         active: true,
  //         clicks: 14,
  //         created_at: '2023-03-05T12:10:45.717522+05:30',
  //         project_id: 'f872702d-b67f-4b5f-89af-b7264a89bfa8',
  //         updated_at: '2023-03-07T19:02:38.860876+05:30',
  //         shown_to_users: 33,
  //         image_confidence: 42.42,
  //       },
  //       {
  //         id: 'dd5daab9-b529-4f5a-9f0b-af41b6e42de4',
  //         url:
  //           'file://f872702d-b67f-4b5f-89af-b7264a89bfa8_bus/unlabelled/image-8.jpg',
  //         name: 'image-8.jpg',
  //         size: null,
  //         active: true,
  //         clicks: 9,
  //         created_at: '2023-03-05T12:10:45.717522+05:30',
  //         project_id: 'f872702d-b67f-4b5f-89af-b7264a89bfa8',
  //         updated_at: '2023-03-07T19:02:38.860876+05:30',
  //         shown_to_users: 29,
  //         image_confidence: 31.03,
  //       },
  //       {
  //         id: 'bafe28e3-ab09-48c9-99f1-8fb6b6c748c9',
  //         url:
  //           'file://f872702d-b67f-4b5f-89af-b7264a89bfa8_bus/unlabelled/image-6.jpg',
  //         name: 'image-6.jpg',
  //         size: null,
  //         active: true,
  //         clicks: 21,
  //         created_at: '2023-03-05T12:10:45.717522+05:30',
  //         project_id: 'f872702d-b67f-4b5f-89af-b7264a89bfa8',
  //         updated_at: '2023-03-07T19:02:38.860876+05:30',
  //         shown_to_users: 41,
  //         image_confidence: 51.22,
  //       },
  //       {
  //         id: '94a31df3-d8f3-45c8-b6b9-c49537680986',
  //         url:
  //           'file://f872702d-b67f-4b5f-89af-b7264a89bfa8_bus/unlabelled/image-10.png',
  //         name: 'image-10.png',
  //         size: null,
  //         active: true,
  //         clicks: 10,
  //         created_at: '2023-03-05T12:10:45.717522+05:30',
  //         project_id: 'f872702d-b67f-4b5f-89af-b7264a89bfa8',
  //         updated_at: '2023-03-07T19:02:38.860876+05:30',
  //         shown_to_users: 35,
  //         image_confidence: 28.57,
  //       },
  //       {
  //         id: '870b5e49-6d3f-4f8a-bee1-b8bcb117dcd1',
  //         url:
  //           'file://f872702d-b67f-4b5f-89af-b7264a89bfa8_bus/unlabelled/image-7.jpg',
  //         name: 'image-7.jpg',
  //         size: null,
  //         active: true,
  //         clicks: 9,
  //         created_at: '2023-03-05T12:10:45.717522+05:30',
  //         project_id: 'f872702d-b67f-4b5f-89af-b7264a89bfa8',
  //         updated_at: '2023-03-05T12:10:45.717522+05:30',
  //         shown_to_users: 30,
  //         image_confidence: 30,
  //       },
  //       {
  //         id: '72d54dba-fb36-4d25-8e1b-0792c1fe9e2c',
  //         url:
  //           'file://f872702d-b67f-4b5f-89af-b7264a89bfa8_bus/unlabelled/image-9.jpg',
  //         name: 'image-9.jpg',
  //         size: null,
  //         active: true,
  //         clicks: 18,
  //         created_at: '2023-03-05T12:10:45.717522+05:30',
  //         project_id: 'f872702d-b67f-4b5f-89af-b7264a89bfa8',
  //         updated_at: '2023-03-05T12:10:45.717522+05:30',
  //         shown_to_users: 27,
  //         image_confidence: 66.67,
  //       },
  //     ],
  //   },
  //   wallet_id: 'GrZMZse68SN8kEpFQwNRDHJqdXxbsa8NgjwFeoBkQqr4',
  // };
  // return resp;
};

export const fetchData = async <R extends any>(query: any) => {
  const res = await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
    },
    body: JSON.stringify({ query }),
  });

  const { data }: { data: R } = await res.json();
  return data;
};

export const uploadImagesApi = async <R extends any>(query: any) => {
  let formData = new FormData();
  query.files.forEach((file: any) => {
    formData.append("images", file);
  });
  console.log(query);

  const res = await fetch(
    `${API_URL}/upload_images?wallet_id=${query.walletId}&labelled=${query.labelled}&project_id=${query.projectId}`,
    {
      method: "PUT",
      body: formData,
    }
  );

  const { resp }: { resp: R } = await res.json();
  return resp;
};

export const fetchApiKey = async (query: any) => {
  console.log(`${API_URL}/api_key_stats?wallet_id=${query.walletId}`);
  const res = await fetch(
    `${API_URL}/api_key_stats?wallet_id=${query.walletId}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  const d = await res.json();
  console.log(d);
  const { resp } = d;
  return resp;
};

export const updateProjectApi = async (query: any) => {
  console.log(`${API_URL}/updateProject`, query);
  const res = await fetch(`${API_URL}/update_project`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(query),
  });
  const d = await res.json();
  console.log(d);
  const { resp } = d;
  return resp;
};
