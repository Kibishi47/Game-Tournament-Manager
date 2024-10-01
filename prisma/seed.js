/**
 * This script is used to populate the database with initial data.
 * It connects to the database using Prisma, and inserts two users into the "User" table.
 * After successfully adding the users, the script disconnects from the database.
 */

import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

async function main() {
  await prisma.user.createMany({
    data: [
      { email: 'user1@example.com', name: 'User One' },
      { email: 'user2@example.com', name: 'User Two' },
    ],
  })
  console.log('Inserted 2 users')
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
