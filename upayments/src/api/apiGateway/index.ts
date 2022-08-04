import { apiGet, apiPost } from '../index';

export const initApi = async (
  path: string,
  params: {},
  isPost = false,
) => {
  try {
    let response = [] as any;
    if (isPost) {
      response = apiPost(
        path,
        params
      );
    } else {
      response = apiGet(path);
    }
    return response;
  } catch (error) {
    return {
      err: true,
      message: 'Error while performing API call..',
    };
  }
};
