/**
 * Company: Redpoints.
 * Website: www.redpoints.com
 * Autor: alucas
 * Date: 30/07/2017
 * Project: react-intl-testing
 * Description: The description here
 */
const flattenMessages = (nestedMessages, prefix = '') => Object.keys(nestedMessages).reduce(
  (messages, key) => {
    const msg = messages;
    const value = nestedMessages[key];
    const prefixedKey = prefix ? `${prefix}.${key}` : key;

    if (typeof value === 'string') {
      msg[prefixedKey] = value;
    } else {
      Object.assign(msg, flattenMessages(value, prefixedKey));
    }

    return msg;
  },
  {},
);

export default flattenMessages;
