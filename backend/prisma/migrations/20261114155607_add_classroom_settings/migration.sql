-- AlterTable
ALTER TABLE "Classroom" ADD COLUMN     "dailyGoal" TEXT,
ADD COLUMN     "goalSettingTime" TEXT,
ADD COLUMN     "reflectionTime" TEXT,
ADD COLUMN     "tasksPerDay" INTEGER NOT NULL DEFAULT 5;
