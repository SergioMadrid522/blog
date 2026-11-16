/*
  Warnings:

  - Made the column `location` on table `photos` required. This step will fail if there are existing NULL values in that column.
  - Made the column `blurimgurl` on table `photos` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "photos" ALTER COLUMN "location" SET NOT NULL,
ALTER COLUMN "blurimgurl" SET NOT NULL;
