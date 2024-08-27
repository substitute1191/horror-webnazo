-- CreateTable
CREATE TABLE "RankMatch" (
    "id" SERIAL NOT NULL,
    "roomId" TEXT NOT NULL,
    "teamName" TEXT,
    "isDone" BOOLEAN[],
    "q2sentence" JSONB NOT NULL,

    CONSTRAINT "RankMatch_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "RankMatch_roomId_key" ON "RankMatch"("roomId");

-- AddForeignKey
ALTER TABLE "RankMatch" ADD CONSTRAINT "RankMatch_roomId_fkey" FOREIGN KEY ("roomId") REFERENCES "Room"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
