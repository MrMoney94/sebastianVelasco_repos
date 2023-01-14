export const serialize = (str: any) => {
  const searchIndex = str.replace('?', 'QUE').search('QUE');
  const query = str.substring(searchIndex + 1);
  const obj = JSON.parse(
    '{"' + decodeURI(query.replace(/&/g, '","').replace(/=/g, '":"')) + '"}',
  );
  return obj;
};
