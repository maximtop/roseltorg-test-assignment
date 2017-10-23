import Promise from 'bluebird';

Promise.promisifyAll(api);

// const getDataOrCreateUser = async () => {
//   try {
//     const userInfo = await getUserCurrentAsync();
//     if (userInfo) {
//       const organizationInfo = await getOrganiaztionInfoAsync(userInfo.organization_id);
//       if (userInfo.scopes.indexOf('orders') !== -1) {
//         const orders = await getOrdersAsync();
//       }
//     } else {
//       await createUser(data);
//       getDataOrCreateUser();
//     }
//   }
//   catch (e) {
//     console.log('Не в силах')
//   }
// }


function* getDataOrCreateUser () {
  try {
    const userInfo = yield getUserCurrentAsync();
    if (userInfo) {
      const organizationInfo = yield getOrganiaztionInfoAsync(userInfo.organization_id);
      if (userInfo.scopes.indexOf('orders') !== -1) {
        const orders = yield getOrdersAsync();
      }
    } else {
      yield createUser(data);
      getDataOrCreateUser();
    }
  }
  catch (e) {
    console.log('Не в силах')
  }
}

getDataOrCreateUser();


