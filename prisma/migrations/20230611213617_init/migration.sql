-- CreateEnum
CREATE TYPE "JobTitle" AS ENUM ('SOFTWARE_ENGINEER', 'SENIOR_SOFTWARE_ENGINEER', 'TECHNICAL_LEAD', 'LEAD_ENGINEER', 'FULL_STACK_ENGINEER', 'CONSULTANT_TRAINEE');

-- CreateEnum
CREATE TYPE "SKillCategory" AS ENUM ('LANGUAGES', 'BACKEND', 'FRONTEND', 'DATASTORE', 'PLATFORM', 'TOOLS');

-- CreateTable
CREATE TABLE "organization" (
    "id" UUID NOT NULL,
    "name" VARCHAR(150) NOT NULL,
    "description" TEXT,
    "webpage_url" VARCHAR(2048),
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "organization_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "university" (
    "id" UUID NOT NULL,
    "name" VARCHAR(150) NOT NULL,
    "description" TEXT,
    "webpage_url" VARCHAR(2048),
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "university_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "experience" (
    "id" UUID NOT NULL,
    "title" "JobTitle" NOT NULL DEFAULT 'SOFTWARE_ENGINEER',
    "organization_id" UUID NOT NULL,
    "started_at" DATE NOT NULL,
    "ended_at" DATE,
    "achievements" JSONB,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "experience_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "education" (
    "id" UUID NOT NULL,
    "title" VARCHAR(150) NOT NULL,
    "description" TEXT,
    "started_at" DATE NOT NULL,
    "ended_at" DATE,
    "university_id" UUID NOT NULL,
    "achievements" JSONB,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "education_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "profile" (
    "id" UUID NOT NULL,
    "name" VARCHAR(100) NOT NULL,
    "email" VARCHAR(254) NOT NULL,
    "phone_number" VARCHAR(20) NOT NULL,
    "location" JSONB,
    "desired_job_titles" TEXT NOT NULL,
    "identify_yourself" VARCHAR(500),
    "description" TEXT,
    "summary" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "profile_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "contact" (
    "id" UUID NOT NULL,
    "title" VARCHAR(150) NOT NULL,
    "description" TEXT NOT NULL,
    "link" VARCHAR(2048) NOT NULL,
    "icon" VARCHAR(50) NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "contact_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "skill" (
    "id" UUID NOT NULL,
    "title" VARCHAR(150) NOT NULL,
    "description" TEXT,
    "icon" VARCHAR(2048),
    "rating" DECIMAL(3,1) NOT NULL,
    "category" "SKillCategory" NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "skill_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "project" (
    "id" UUID NOT NULL,
    "title" VARCHAR(150) NOT NULL,
    "organization_id" UUID NOT NULL,
    "tech_stack" TEXT[],
    "role" VARCHAR(400) NOT NULL,
    "summary" TEXT NOT NULL,
    "responsibility" JSONB NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "project_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "project_to_skill" (
    "project_id" UUID NOT NULL,
    "skill_id" UUID NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "project_to_skill_pkey" PRIMARY KEY ("project_id","skill_id")
);

-- CreateIndex
CREATE UNIQUE INDEX "organization_name_key" ON "organization"("name");

-- CreateIndex
CREATE UNIQUE INDEX "university_name_key" ON "university"("name");

-- CreateIndex
CREATE UNIQUE INDEX "experience_title_organization_id_key" ON "experience"("title", "organization_id");

-- CreateIndex
CREATE UNIQUE INDEX "education_title_key" ON "education"("title");

-- CreateIndex
CREATE UNIQUE INDEX "profile_email_key" ON "profile"("email");

-- CreateIndex
CREATE UNIQUE INDEX "profile_phone_number_key" ON "profile"("phone_number");

-- CreateIndex
CREATE UNIQUE INDEX "contact_title_key" ON "contact"("title");

-- CreateIndex
CREATE UNIQUE INDEX "skill_title_key" ON "skill"("title");

-- CreateIndex
CREATE UNIQUE INDEX "project_title_organization_id_key" ON "project"("title", "organization_id");

-- AddForeignKey
ALTER TABLE "experience" ADD CONSTRAINT "experience_organization_id_fkey" FOREIGN KEY ("organization_id") REFERENCES "organization"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "education" ADD CONSTRAINT "education_university_id_fkey" FOREIGN KEY ("university_id") REFERENCES "university"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "project" ADD CONSTRAINT "project_organization_id_fkey" FOREIGN KEY ("organization_id") REFERENCES "organization"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "project_to_skill" ADD CONSTRAINT "project_to_skill_project_id_fkey" FOREIGN KEY ("project_id") REFERENCES "project"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "project_to_skill" ADD CONSTRAINT "project_to_skill_skill_id_fkey" FOREIGN KEY ("skill_id") REFERENCES "skill"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
