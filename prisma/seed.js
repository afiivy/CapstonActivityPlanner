const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

const activityData = [
{
  question:"",
  answer:""
  }, 
{
  question:"",
  answer:""
  },  
  
{
  question:"",
  answer:""
  }, 
  
{
  question:"",
  answer:""
  }, 
  
{
  question:"",
  answer:""
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
