# GitHub Actions - Claude Code Setup

This directory contains the GitHub Actions workflow configuration for Claude Code integration.

## Setup Instructions

To complete the setup and enable Claude Code tagging in GitHub issues and PRs:

### 1. Add Authentication Secret

Choose one of the following authentication methods:

#### Option A: OAuth Token (Recommended for Pro/Max Users)

1. Run `claude setup-token` in Claude Code terminal to generate your OAuth token
2. Go to your repository on GitHub
3. Navigate to **Settings** > **Secrets and variables** > **Actions**
4. Click **New repository secret**
5. Name: `CLAUDE_CODE_OAUTH_TOKEN`
6. Value: The token generated from step 1

#### Option B: API Key (All Users)

1. Get your API key from https://console.anthropic.com/
2. Go to your repository on GitHub
3. Navigate to **Settings** > **Secrets and variables** > **Actions**
4. Click **New repository secret**
5. Name: `ANTHROPIC_API_KEY`
6. Value: Your Anthropic API key

**IMPORTANT**: Never commit API keys or tokens directly to the repository!

### 2. Usage

Once set up, you can:

- **Tag Claude in issues**: Mention `@claude` in any issue comment or description
- **Tag Claude in PRs**: Mention `@claude` in PR comments or reviews
- **Assign issues**: Assign issues to Claude for automated responses

### Example Usage

```
@claude can you help fix the bug described above?
```

```
@claude please review this PR and suggest improvements
```

## Workflow Details

The `claude.yml` workflow:
- Triggers on issue comments, PR review comments, issues opened/assigned, and PR reviews
- Only runs when `@claude` is mentioned
- Has permissions to read/write contents, issues, and pull requests
- Uses the official `anthropics/claude-code-action@v1`

## Authentication Options

You can authenticate using:
- **Anthropic API Key** (recommended for most users): `ANTHROPIC_API_KEY`
- **OAuth Token** (Pro/Max users): `CLAUDE_CODE_OAUTH_TOKEN`
- **AWS Bedrock**: Configure via custom GitHub app
- **Google Vertex AI**: Configure via custom GitHub app

## Troubleshooting

If Claude doesn't respond:
1. Verify `CLAUDE_CODE_OAUTH_TOKEN` or `ANTHROPIC_API_KEY` is set in repository secrets
2. Check that the workflow file is in `.github/workflows/`
3. Ensure you're mentioning `@claude` in comments
4. Check the Actions tab for workflow run logs
5. For Max users: Run `claude setup-token` if your OAuth token has expired

## Documentation

- [Claude Code GitHub Actions Docs](https://docs.claude.com/en/docs/claude-code/github-actions)
- [claude-code-action Repository](https://github.com/anthropics/claude-code-action)
