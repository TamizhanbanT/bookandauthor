-- CreateTable
CREATE TABLE `Book` (
    `bookId` INTEGER NOT NULL AUTO_INCREMENT,
    `bookName` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`bookId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Author` (
    `authorId` INTEGER NOT NULL AUTO_INCREMENT,
    `authorName` VARCHAR(191) NOT NULL,
    `price` DOUBLE NOT NULL,
    `bookId` INTEGER NOT NULL,

    UNIQUE INDEX `Author_bookId_key`(`bookId`),
    PRIMARY KEY (`authorId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Author` ADD CONSTRAINT `Author_bookId_fkey` FOREIGN KEY (`bookId`) REFERENCES `Book`(`bookId`) ON DELETE RESTRICT ON UPDATE CASCADE;
