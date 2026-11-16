ALTER TABLE "DailyReflection"
  ADD COLUMN "assessmentScore" INTEGER,
  ADD COLUMN "assessmentCorrect" INTEGER,
  ADD COLUMN "assessmentTotal" INTEGER,
  ADD COLUMN "assessmentDetails" JSONB,
  ADD COLUMN "assessedAt" TIMESTAMP(3);
