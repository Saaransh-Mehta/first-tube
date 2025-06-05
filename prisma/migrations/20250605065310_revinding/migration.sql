/*
  Warnings:

  - You are about to drop the column `authorId` on the `Video` table. All the data in the column will be lost.
  - You are about to drop the `User` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Video" DROP CONSTRAINT "Video_authorId_fkey";

-- AlterTable
ALTER TABLE "Video" DROP COLUMN "authorId";

-- DropTable
DROP TABLE "User";
