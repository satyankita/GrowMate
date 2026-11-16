CREATE TABLE "ClassroomNotification" (
    "id" TEXT NOT NULL,
    "classroomId" TEXT NOT NULL,
    "createdById" TEXT,
    "recipientEmail" TEXT,
    "type" TEXT NOT NULL DEFAULT 'ANNOUNCEMENT',
    "title" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "ClassroomNotification_pkey" PRIMARY KEY ("id")
);

CREATE TABLE "ClassroomNotificationRead" (
    "notificationId" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "readAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "ClassroomNotificationRead_pkey" PRIMARY KEY ("notificationId", "userId")
);

CREATE INDEX "ClassroomNotification_classroomId_createdAt_idx"
ON "ClassroomNotification"("classroomId", "createdAt");

CREATE INDEX "ClassroomNotification_recipientEmail_idx"
ON "ClassroomNotification"("recipientEmail");

CREATE INDEX "ClassroomNotificationRead_userId_readAt_idx"
ON "ClassroomNotificationRead"("userId", "readAt");

ALTER TABLE "ClassroomNotification"
ADD CONSTRAINT "ClassroomNotification_classroomId_fkey"
FOREIGN KEY ("classroomId") REFERENCES "Classroom"("id") ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE "ClassroomNotification"
ADD CONSTRAINT "ClassroomNotification_createdById_fkey"
FOREIGN KEY ("createdById") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

ALTER TABLE "ClassroomNotificationRead"
ADD CONSTRAINT "ClassroomNotificationRead_notificationId_fkey"
FOREIGN KEY ("notificationId") REFERENCES "ClassroomNotification"("id") ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE "ClassroomNotificationRead"
ADD CONSTRAINT "ClassroomNotificationRead_userId_fkey"
FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
