const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

const questionArray = [
{
  id:1,
  question:"What is the general theme for the outing",
  choices:[
    {
      id: 1,
      text: "Competitive"
    },

    {
      id: 2,
      text: "Cozy"
    },

    {
      id: 3,
      text: "Crafty"
    },

    {
      id: 4,
      text: "Crazy"
    }
  ]
  },

{
  id:2,
  question:"What's your budget?",
  choices:[
    {
      id:1,
      text: "Under $20"
    },

    {
      id:2,
      text: "$20-$40"
    },

    {
      id:3,
      text: "$40-$60"
    },

    {
      id:3,
      text: "$60 and above"
    },
  ]
  }, 
] 
  


async function main() {
  console.log(`Update me to seed data`);
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
