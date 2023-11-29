import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default async function handleProfileSignup(firstName, lastName, fileName) {
  const promiseArray = [signUpUser(firstName, lastName), uploadPhoto(fileName)];
  return Promise.allSettled(promiseArray).then((res) => res.map((obj) => ({
    status: obj.status,
    value: obj.status === 'fulfilled' ? obj.value : String(obj.reason),
  })));
}
