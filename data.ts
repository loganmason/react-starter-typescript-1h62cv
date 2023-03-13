import { faker } from '@faker-js/faker';

export function createPersonData(count = 5) {
  const data = [];
  for (let i = 0; i < count; i++) {
    data.push({
      id: faker.random.numeric(),
      firstName: faker.name.firstName(),
      lastName: faker.name.lastName(),
      age: getRandomInt(20, 60),
      jobTitle: faker.name.jobTitle(),
      jobArea: faker.name.jobArea(),
      jobType: faker.name.jobType(),
    });
  }

  function getRandomInt(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  return data;
}
