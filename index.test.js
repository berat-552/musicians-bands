const { db } = require("./db.js");
const Band = require("./models/Band.js");
const Musician = require("./models/Musician.js");
const Song = require("./models/Song.js");

beforeAll(async () => {
  // the 'sync' method will create tables based on the model class
  // by setting 'force:true' the tables are recreated each time the
  // test suite is run
  //   await db.sync();
});

// afterAll(async () => {
//   await sequelize.close();
// });

test("can create a new Band", async () => {
  const testBand = await Band.create({ name: "The Beatles", genre: "Rock" });
  expect(testBand.name).toBe("The Beatles");
  expect(testBand.genre).toBe("Rock");
});

test("can create a new Musician", async () => {
  const testMusician = await Musician.create({
    name: "John Lennon",
    instrument: "Guitar",
  });
  expect(testMusician.name).toBe("John Lennon");
  expect(testMusician.instrument).toBe("Guitar");
});

test("can create a new Song", async () => {
  const testSong = await Song.create({ title: "Hey Jude", year: 1968, length: 431 });
  expect(testSong.title).toBe("Hey Jude");
  expect(testSong.year).toBe(1968);
  expect(testSong.length).toBe(431);
});

test("can update a Band instance", async () => {
  const testBand = await Band.create({ name: "The Beatles", genre: "Rock" });
  testBand.genre = "Pop";
  await testBand.save();
  expect(testBand.genre).toBe("Pop");
});

test("can update a Musician instance", async () => {
  const testMusician = await Musician.create({
    name: "John Lennon",
    instrument: "Guitar",
  });
  testMusician.instrument = "Piano";
  await testMusician.save();
  expect(testMusician.instrument).toBe("Piano");
});

test("can update a Song instance", async () => {
  const testSong = await Song.create({ title: "Hey Jude", year: 1968, length: 431 });
  testSong.length = 420;
  await testSong.save();
  expect(testSong.length).toBe(420);
});

test("can delete a Band instance", async () => {
  const testBand = await Band.create({ name: "The Beatles", genre: "Rock" });
  await testBand.destroy();
  const foundBand = await Band.findByPk(testBand.id);
  expect(foundBand).toBeNull();
});

test("can delete a Musician instance", async () => {
  const testMusician = await Musician.create({
    name: "John Lennon",
    instrument: "Guitar",
  });
  await testMusician.destroy();
  const foundMusician = await Musician.findByPk(testMusician.id);
  expect(foundMusician).toBeNull();
});

test("can delete a Song instance", async () => {
  const testSong = await Song.create({ title: "Hey Jude", year: 1968, length: 431 });
  await testSong.destroy();
  const foundSong = await Song.findByPk(testSong.id);
  expect(foundSong).toBeNull();
});
