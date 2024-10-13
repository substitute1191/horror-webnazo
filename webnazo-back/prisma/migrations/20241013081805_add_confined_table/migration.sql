-- CreateTable
CREATE TABLE "Confined" (
    "id" SERIAL NOT NULL,
    "roomId" TEXT NOT NULL,
    "isMillionaire" BOOLEAN NOT NULL,
    "reachedShop" BOOLEAN NOT NULL,
    "hasMicrowave" BOOLEAN NOT NULL,
    "isDonated" BOOLEAN NOT NULL,
    "hasDice" BOOLEAN NOT NULL,

    CONSTRAINT "Confined_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Confined_roomId_key" ON "Confined"("roomId");

-- AddForeignKey
ALTER TABLE "Confined" ADD CONSTRAINT "Confined_roomId_fkey" FOREIGN KEY ("roomId") REFERENCES "Room"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
