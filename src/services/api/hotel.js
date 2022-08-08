import httpClient from '@/plugins/axios';

const getList = (limit = 15, filterMenu) => {
  let path = `/product/search/product?$limit=${limit}&$skip=0&$total=100000`;
  if(filterMenu && filterMenu != ""){
    path = `${path}&country=${ filterMenu }`;
  }
  return httpClient.get(path);
}

export { getList };