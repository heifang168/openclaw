# Vercel GitHub Workflow

## Purpose

This document defines the workflow for modifying, committing, and deploying the Next.js website through GitHub and Vercel.

## Project Environment

- Code repository: GitHub
- Deployment platform: Vercel
- Framework: Next.js
- Execution agent: follows ChatGPT instructions only

## General Workflow

For every website task, follow this process:

1. Read the task instruction from ChatGPT.
2. Identify the files that need to be created or modified.
3. Modify only the required files.
4. Do not change unrelated files.
5. Run local checks if available.
6. Commit changes to GitHub.
7. Wait for Vercel deployment.
8. Report commit ID and deployment result.

## Before Editing

Before making changes, confirm:

1. The task target is clear.
2. The required file paths are clear.
3. The page structure is provided.
4. The copywriting is provided or referenced.
5. The visual requirement is provided.
6. The acceptance standard is provided.

If the task instruction does not provide enough information, do not guess business strategy. Return the missing information request.

## File Modification Rule

Only modify files required by the current task.

Do not modify:

- Unrelated pages
- Unrelated components
- Package configuration
- Environment variables
- Deployment settings
- Existing business logic
- Existing styles unless required

## Commit Rule

Each task should have a clear Git commit.

Commit message should be short and clear.

Examples:

- add ai website brain docs
- add homepage structure
- add generator product pages
- update homepage hero section
- add inquiry form
- fix mobile header layout
- update seo metadata

## Vercel Deployment Rule

After pushing to GitHub, check Vercel deployment status.

Acceptable deployment status:

- Ready
- Success
- Completed

If deployment fails, report:

1. Error message
2. Failed file or module if shown
3. Build log summary
4. Suggested next step

Do not silently ignore deployment errors.

## Build Error Handling

When a build error occurs:

1. Do not randomly change multiple files.
2. Read the error message.
3. Identify the exact file and line if available.
4. Fix the smallest possible issue.
5. Commit the fix.
6. Check deployment again.

## Reporting Format

After each task, report:

1. Task name
2. Files changed
3. GitHub commit ID
4. GitHub commit link
5. Vercel deployment status
6. Whether the website frontend was changed
7. Whether any error occurred

## Safety Rule

Do not delete existing website pages, components, assets, or configuration unless ChatGPT explicitly instructs it.

Do not rename existing routes unless ChatGPT explicitly instructs it.

Do not replace the entire project structure without instruction.

## Documentation Rule

When adding website strategy, SEO, copywriting, visual, or conversion rules, place them under:

/docs/ai-website-brain/

When adding raw source materials, place them under:

/docs/source-materials/

## Page Build Rule

When creating new pages, ensure:

1. Route path matches instruction.
2. Page title is clear.
3. SEO metadata is included if the project supports it.
4. Layout is responsive.
5. CTA links work.
6. No TypeScript or build errors.
7. Vercel deployment succeeds.

## Final Principle

GitHub is the source of code truth.

Vercel is the deployment verification platform.

ChatGPT provides strategy and instructions.

The execution agent only implements the provided instructions.