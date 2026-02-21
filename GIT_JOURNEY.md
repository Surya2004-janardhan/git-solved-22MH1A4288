# My Git Mastery Challenge Journey

## Student Information
- Name: CHINTALA D S C V V SURYA JANARDHAN
- Student ID: 22MH1A4288
- Repository: https://github.com/Surya2004-janardhan/git-solved-22MH1A4288
- Date Started: February 17, 2026
- Date Completed: February 21, 2026

## Task Summary
Cloned instructor's repository with pre-built conflicts and resolved all 
merge conflicts across multiple branches using proper Git workflows.

## Commands Used

| Command | Times Used | Purpose |
|---------|------------|----------|
| git clone | 1 | Clone instructor's repository |
| git checkout | 25+ | Switch between branches (main, dev, conflict-simulator) |
| git branch | 10+ | View and manage local and remote branches |
| git merge | 2 | Merge dev and conflict-simulator into main |
| git add | 35+ | Stage resolved conflicts and new files |
| git commit | 15+ | Commit resolved changes and documentation updates |
| git push | 12+ | Push code and tags to origin |
| git fetch | 2 | Sync metadata from instructor remote |
| git pull | 1 | Integrate changes from instructor/main |
| git stash | 2 | Temporarily store WIP during branch switches |
| git cherry-pick | 1 | Apply specific commit for feature integration |
| git rebase | 1 | Re-align feature branch onto main |
| git reset | 3 | Manage local state using soft/mixed/hard resets |
| git revert | 1 | Safe undo of a problematic commit |
| git tag | 2 | Create release tags (v1.0, v1.1) |
| git status | 60+ | Continuously monitor repository state |
| git log | 40+ | Audit history and verify merge resolution |
| git diff | 20+ | Compare differences before merging and resolving |

## Conflicts Resolved

### Merge 1: main + dev (6 files)

#### Conflict 1: config/app-config.yaml
- **Issue**: Production used port 8080, development used 3000
- **Resolution**: Created unified config with environment-based settings
- **Strategy**: Keep production as default, add dev as optional
- **Difficulty**: Medium
- **Time**: 15 minutes

#### Conflict 2: config/database-config.json
- **Issue**: Different database hosts and SSL modes
- **Resolution**: Created separate profiles for production and development
- **Strategy**: Restructured JSON to support both environments
- **Difficulty**: Medium
- **Time**: 10 minutes

#### Conflict 3: scripts/deploy.sh
- **Issue**: Different deployment strategies (production vs docker-compose)
- **Resolution**: Added conditional logic based on DEPLOY_ENV variable
- **Strategy**: Made script handle both environments dynamically
- **Difficulty**: Hard
- **Time**: 20 minutes

#### Conflict 4: scripts/monitor.js
- **Issue**: Different monitoring intervals and log formats
- **Resolution**: Environment-based configuration object
- **Strategy**: Used process.env.NODE_ENV to determine behavior
- **Difficulty**: Medium
- **Time**: 15 minutes

#### Conflict 5: docs/architecture.md
- **Issue**: Different architectural descriptions
- **Resolution**: Merged both descriptions into comprehensive document
- **Strategy**: Created sections for each environment
- **Difficulty**: Easy
- **Time**: 10 minutes

#### Conflict 6: README.md
- **Issue**: Different feature lists and version numbers
- **Resolution**: Combined all features with clear environment labels
- **Strategy**: Organized features by category
- **Difficulty**: Easy
- **Time**: 10 minutes

### Merge 2: main + conflict-simulator (6 files)

#### Conflict 1: config/app-config.yaml
- **Issue**: New experimental feature section conflicted with existing dev config
- **Resolution**: Added experimental flag to unified YAML config
- **Strategy**: Keep experimental features disabled by default
- **Difficulty**: Medium
- **Time**: 10 minutes

#### Conflict 2: config/database-config.json
- **Issue**: Distributed experimental database settings conflicted with profiles
- **Resolution**: Integrated experimental profile as a third JSON key
- **Strategy**: Maintain isolation between prod, dev, and experimental
- **Difficulty**: Easy
- **Time**: 5 minutes

#### Conflict 3: scripts/deploy.sh
- **Issue**: Added AI-Powered Canary logic conflicted with environment switcher
- **Resolution**: Added a third `elif` condition for experimental deployments
- **Strategy**: Use environment variables to trigger AI features
- **Difficulty**: Hard
- **Time**: 20 minutes

#### Conflict 4: scripts/monitor.js
- **Issue**: AI analysis prediction logic conflicted with health check loops
- **Resolution**: Added `aiEnabled` property to configuration objects
- **Strategy**: Conditionally log AI predictions in experimental mode only
- **Difficulty**: Medium
- **Time**: 15 minutes

#### Conflict 5: docs/architecture.md
- **Issue**: Added AI Architecture section after normal components
- **Resolution**: Appended experimental AI documentation as a separate block
- **Strategy**: Clearly label experimental sections as "BETA"
- **Difficulty**: Easy
- **Time**: 5 minutes

#### Conflict 6: README.md
- **Issue**: Experimental feature list added to main Feature section
- **Resolution**: Categorized experimental features into their own bullet points
- **Strategy**: Mention usage warnings for Beta features
- **Difficulty**: Easy
- **Time**: 10 minutes

## Most Challenging Parts

1. **Understanding Conflict Markers**: Initially confused by `<<<<<<<`, `=======`, `>>>>>>>` symbols. Learned that HEAD is current branch and the other side is incoming changes.

2. **Deciding What to Keep**: Hardest part was choosing between conflicting code. Learned to read both versions completely before deciding.

3. **Complex Logic Conflicts**: `deploy.sh` had completely different logic. Had to understand both approaches before combining.

4. **Testing After Resolution**: Making sure resolved code actually worked was crucial.

## Key Learnings

### Technical Skills
- Mastered conflict resolution process
- Understood merge conflict markers
- Learned to use git diff effectively
- Practiced all major Git commands

### Best Practices
- Always read both sides of conflict before resolving
- Test resolved code before committing
- Write detailed merge commit messages
- Use git status frequently
- Commit atomically

### Git Workflow Insights
- Conflicts are normal, not errors
- Take time to understand both changes
- When in doubt, ask for clarification
- Document your resolution strategy
- Keep calm and read carefully

## Reflection
This challenge taught me that merge conflicts aren't scary - they're 
just Git asking "which version do you want?". The key is understanding 
what each side is trying to do before combining them. I now feel 
confident handling conflicts in real projects.

The hands-on practice with all Git commands (especially rebase and 
cherry-pick) was invaluable. I understand the difference between merge 
and rebase, and when to use each. Most importantly, I learned that 
`git reflog` is a lifesaver!
