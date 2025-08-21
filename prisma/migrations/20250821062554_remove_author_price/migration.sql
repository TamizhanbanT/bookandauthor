/*
  Warnings:

  - You are about to drop the column `bookId` on the `author` table. All the data in the column will be lost.
  - You are about to drop the column `price` on the `author` table. All the data in the column will be lost.
  - Added the required column `authorId` to the `Book` table without a default value. This is not possible if the table is not empty.
  - Added the required column `price` to the `Book` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `author` DROP FOREIGN KEY `Author_bookId_fkey`;

-- DropIndex
DROP INDEX `Author_bookId_key` ON `author`;

-- AlterTable
ALTER TABLE `author` DROP COLUMN `bookId`,
    DROP COLUMN `price`;

-- AlterTable
ALTER TABLE `book` ADD COLUMN `authorId` INTEGER NOT NULL,
    ADD COLUMN `price` DOUBLE NOT NULL;

-- AddForeignKey
ALTER TABLE `Book` ADD CONSTRAINT `Book_authorId_fkey` FOREIGN KEY (`authorId`) REFERENCES `Author`(`authorId`) ON DELETE RESTRICT ON UPDATE CASCADE;
