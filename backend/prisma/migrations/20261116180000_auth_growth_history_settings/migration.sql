ALTER TABLE "User" ALTER COLUMN "googleId" DROP NOT NULL;
ALTER TABLE "User" ADD COLUMN "passwordHash" TEXT;

ALTER TABLE "Classroom"
  ADD COLUMN "dayParts" JSONB,
  ADD COLUMN "timezone" TEXT NOT NULL DEFAULT 'Asia/Kolkata',
  ADD COLUMN "allowLateGoalEdits" BOOLEAN NOT NULL DEFAULT false;

ALTER TABLE "DailyGoal" ADD COLUMN "statement" TEXT;
