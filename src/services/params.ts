import md5 from 'js-md5';
import { PUBLIC_API_KEY, PRIVATE_API_KEY } from '../../env';

export default () => {
  const ts = Date.now();

  return {
    apikey: PUBLIC_API_KEY,
    ts,
    hash: md5
      .create()
      .update(`${ts}${PRIVATE_API_KEY}${PUBLIC_API_KEY}`)
      .hex(),
  };
};
