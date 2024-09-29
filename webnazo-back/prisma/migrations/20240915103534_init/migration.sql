/*
  Warnings:

  - You are about to drop the column `teamName` on the `RankMatch` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "RankMatch" DROP COLUMN "teamName";

-- AlterTable
ALTER TABLE "Room" ADD COLUMN     "teamName" TEXT;
