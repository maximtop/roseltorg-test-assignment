import Promise from 'bluebird';

Promise.promisifyAll(api);

const getDataOrCreateUser = async () => {
  try {
    const userInfo = await getUserCurrentAsync();
    if (userInfo) {
      const organization = await getOrganiaztionInfoAsync(userInfo.organization_id);
      if (userInfo.scopes.indexOf('orders') !== -1) {
        const orders = await getOrdersAsync();
      }
    } else {
      await createUser(data);
      getDataOrCreateUser();
    }
  }
  catch (e) {
    console.log('Не в силах')
  }
}

getDataOrCreateUser();


