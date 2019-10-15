import {get} from "../utils/api";

const baseApi = 'https://www.api-football.com/demo/api/v2/';

export default {
  countries:  () => get({ url: baseApi+'countries' }),
  leagues: () => get({ url: baseApi+'leagues' })
}

