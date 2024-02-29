/*
  Warnings:

  - The primary key for the `Estudante` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `foto` on the `Estudante` table. All the data in the column will be lost.
  - You are about to drop the column `id` on the `Estudante` table. All the data in the column will be lost.
  - Added the required column `fotoUrl` to the `Estudante` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Estudante" DROP CONSTRAINT "Estudante_pkey",
DROP COLUMN "foto",
DROP COLUMN "id",
ADD COLUMN     "fotoUrl" TEXT NOT NULL,
ADD CONSTRAINT "Estudante_pkey" PRIMARY KEY ("ra");
