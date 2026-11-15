/*
  Warnings:

  - You are about to drop the column `userId` on the `likes` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[photoId,visitorToken]` on the table `likes` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `visitorToken` to the `likes` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "likes" DROP CONSTRAINT "likes_userId_fkey";

-- DropIndex
DROP INDEX "likes_photoId_userId_key";

-- AlterTable
ALTER TABLE "likes" DROP COLUMN "userId",
ADD COLUMN     "visitorToken" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "likes_photoId_visitorToken_key" ON "likes"("photoId", "visitorToken");
