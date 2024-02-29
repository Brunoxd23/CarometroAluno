-- CreateTable
CREATE TABLE "Estudante" (
    "id" SERIAL NOT NULL,
    "ra" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "curso" TEXT NOT NULL,
    "foto" TEXT NOT NULL,

    CONSTRAINT "Estudante_pkey" PRIMARY KEY ("id")
);
