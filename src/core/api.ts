import {GET} from '../provider/index';
import {URL, base_api} from '../constants/credentials';

export async function GetInfo(url: string) {
  const api = `${URL + base_api + url}?_format=json`;
  try {
    const data = await GET(api, {method: 'GET'});
    return data;
  } catch (error) {
    return error;
  }
}
