const prisma = require("../prisma");

const seed = async () => {
  // TODO: Create 10 players
  const createPlayers = async () => {
    const players = [
      {
        name: "Daisy",
        breed: "Boston Terrier",
        status: "field",
      },
      {
        name: "Muppet",
        breed: "Shih Tzu",
        status: "field",
      },
      {
        name: "Wilbur",
        breed: "Shorkie",
        status: "field",
      },
      {
        name: "Elvis",
        breed: "Shorkie",
        status: "field",
      },
      {
        name: "Sophie",
        breed: "Yorkshire Terrier",
        status: "field",
      },
      {
        name: "Java",
        breed: "Black Labrador",
        status: "bench",
      },
      {
        name: "Brie",
        breed: "Black Labrador",
        status: "bench",
      },
      {
        name: "Charlie Brown",
        breed: "Sheprador",
        status: "bench",
      },
      {
        name: "Rex",
        breed: "Sharpay",
        status: "bench",
      },
      {
        name: "Shogun",
        breed: "Bichon Frisé",
        status: "bench",
      },
    ];
    await prisma.player.createMany({ data: players });
  };

  await createPlayers();
};

seed()
  .then(async () => await prisma.$disconnect())
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
