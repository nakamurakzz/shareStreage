-- CreateTable
CREATE TABLE `SharedInfo` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,
    `sharedDate` DATETIME(3) NOT NULL,
    `sharedToOrFrom` VARCHAR(255) NOT NULL,
    `sharedTypeId` INTEGER NOT NULL,
    `messageTitle` VARCHAR(255) NOT NULL,
    `messageBody` TEXT NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `SharedFile` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,
    `fileName` VARCHAR(255) NOT NULL,
    `iilePath` VARCHAR(255) NOT NULL,
    `fileSize` INTEGER NOT NULL,
    `sharedInfoId` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `SharedFile` ADD CONSTRAINT `SharedFile_sharedInfoId_fkey` FOREIGN KEY (`sharedInfoId`) REFERENCES `SharedInfo`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
