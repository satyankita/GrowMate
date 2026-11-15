-- CreateEnum
CREATE TYPE "JoinRequestStatus" AS ENUM ('PENDING', 'ACCEPTED', 'REJECTED');

-- CreateTable
CREATE TABLE "ClassroomJoinRequest" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "classroomId" TEXT NOT NULL,
    "status" "JoinRequestStatus" NOT NULL DEFAULT 'PENDING',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ClassroomJoinRequest_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "ClassroomJoinRequest_classroomId_status_idx" ON "ClassroomJoinRequest"("classroomId", "status");

-- CreateIndex
CREATE UNIQUE INDEX "ClassroomJoinRequest_userId_classroomId_key" ON "ClassroomJoinRequest"("userId", "classroomId");

-- AddForeignKey
ALTER TABLE "ClassroomJoinRequest" ADD CONSTRAINT "ClassroomJoinRequest_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ClassroomJoinRequest" ADD CONSTRAINT "ClassroomJoinRequest_classroomId_fkey" FOREIGN KEY ("classroomId") REFERENCES "Classroom"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
